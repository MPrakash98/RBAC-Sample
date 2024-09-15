const userService = require('../services/userService');
const responder = require('../helper/responder');
const md5 = require('md5-nodejs');
const jwt = require('jsonwebtoken');

// Allow User to Login with Email And Password
const loginUser = async (req, res, next) => {
    try {
        let body = req.body;
        let hash = md5(body.userPassword).toString();

        let whereObj = {
            userEmail: body.userEmail,
            userPassword: hash,
        }

        let user = await userService.checkForUser(whereObj);
        if (!user) {
            return responder.unAuthorized(res, "Please enter correct credentials");
        }
        let userJsonObj = JSON.parse(JSON.stringify(user));
        let token = await genToken(userJsonObj);
        responder.success(res, { token: token },  "User authenticated & Token Generated Successfully");
    } catch (error) {
        return responder.error(res, error.message)
    }

}

// Get all users
const getAllUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        responder.success(res, users);
    } catch (error) {
        responder.error(res, error.message);
    }
};

// Get a single user by ID
const getUserById = async (req, res) => {
    try {
        const user = await userService.getUserById(req.params.id);
        if (user) {
            responder.success(res, user);
        } else {
            responder.notFound(res);
        }
    } catch (error) {
        responder.error(res, error.message);
    }
};

// Create a new user
const createUser = async (req, res) => {
    try {
        let body = req.body;
        body.userPassword =  md5(body.userPassword).toString();

        const newUser = await userService.createUser(req.body);
        responder.created(res, newUser);
    } catch (error) {
        responder.error(res, error.message);
    }
};

// Update a user
const updateUser = async (req, res) => {
    try {
        const updatedUser = await userService.updateUser(req.params.id, req.body);
        if (updatedUser) {
            responder.success(res, updatedUser);
        } else {
            responder.notFound(res);
        }
    } catch (error) {
        responder.error(res, error.message);
    }
};

// Delete a user
const deleteUser = async (req, res) => {
    try {
        const deleted = await userService.deleteUser(req.params.id);
        if (deleted) {
            responder.success(res, { message: "User deleted successfully" });
        } else {
            responder.notFound(res);
        }
    } catch (error) {
        responder.error(res, error.message);
    }
};

// Function for generating token 
async function genToken(data) {
    return new Promise(async function (resolve, reject) {
        jwt.sign(data, 'secret', { expiresIn: "5h", }, (err, token) => {
            if (err) {
                reject(err);
            }
            resolve(token);
        }
        );
    })
};

module.exports = {
    loginUser,
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};
