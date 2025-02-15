const captainModel = require('../models/captain.model');
const { validationResult } = require('express-validator');
const captainService = require('../services/captain.service');
const bcrypt = require('bcrypt');
const blacklistTokenModel = require('../models/blacklistToken.model');

module.exports.registerCaptain = async (req, res) => {
    const errors =  validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const {
        fullname,
        email,
        password,
        vehicle
    } = req.body;

    const captainExists = await captainModel.findOne({ email });
    if(captainExists){
        return res.status(400).json({message: 'Captain already exists'});
    }

    const hashedPassword = await captainModel.hashPassword(password);

    const captain = await captainService.createCaptain({
        firstName: fullname.firstName,
        lastName: fullname.lastName,
        email,
        password: hashedPassword,
        color: vehicle.color,
        plate: vehicle.plate,
        capacity: vehicle.capacity,
        vehicleType: vehicle.vehicleType
    });

    const token = captain.generateAuthToken();
    res.status(201).json({ token, captain });
}

module.exports.loginCaptain = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    const captain = await captainModel.findOne({ email }).select('+password');

    if(!captain){
        return res.status(401).json({message: 'Invalid email'});
    }

    const isMatch = await captain.comparePassword(password);
    if(!isMatch){
        return res.status(401).json({message: 'Invalid password'});
    }

    const token = captain.generateAuthToken();
    res.cookie('token', token);
    return res.status(200).json({ token, captain });
}

module.exports.getCaptainProfile = async (req, res) => {
    const captain = req.captain;
    res.status(200).json({ captain });
}

module.exports.logoutCaptain = async (req, res) => {
    const token = req.cookies.token || res.headers.authorization.split(' ')[1];
    await blacklistTokenModel.create({ token });
    res.clearCookie('token');
    res.status(200).json({message: 'Captain logged out'});
}