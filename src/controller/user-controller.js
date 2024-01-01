const express = require('express')
const userModel = require('../models/user-model')

const get_user = async function (req, res) {
    try {
        const userDetails = await userModel.find()
        if (userDetails.length > 0) {
            res.status(200).json({
                status: true,
                userDetails: userDetails
            })
        }
        else {
            res.status(400).json({
                status: false,
                message: 'user not found'
            })
        }
    }
    catch (err) {
        res.status(500).json({
            status: false,
            message: 'Internal server Error'
        })
    }
}

const create_user = function(req, res) 
{

    if (req.body.password !== req.body.confirm_password) {
        res.status(400).send('password does not match with confirm password')
    }
    const User = new userModel({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        confirm_password: req.body.confirm_password,
        mobile_number: req.body.mobile_number,
        profile: req.body.profile

    })
    User.save()
        .then((data) => {
            res.status(201).json({
                status: true,
                userDetails: data
            })
        })
        .catch((error) => {
            res.status(500).json({
                status: false,
                message: error.message
            })
        })
}

    module.exports ={get_user,create_user}