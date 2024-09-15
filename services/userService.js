const models = require('../models');

// Get all users
const checkForUser = async (whereObj) => {
    let searchCon = {
        ...whereObj,
        isDeleted: 0,
        status: 1
    }
    return await models.User.findOne({
        where: searchCon,
        include: [
            {
                model: models.Role,
                where: { isDeleted: 0, status: 1 }
            }
        ],
    });
};

// Get all users
const getAllUsers = async () => {
    return await models.User.findAll({
        where: { isDeleted: 0, status: 1 }
    });
};

// Get a single user by ID
const getUserById = async (id) => {
    return await models.User.findByPk(id);
};

// Create a new user
const createUser = async (data) => {
    return await models.User.create(data);
};

// Update a user by ID
const updateUser = async (id, data) => {
    const user = await models.User.findByPk(id);
    if (user) {
        return await user.update(data);
    }
    return null;
};

// Delete a user by ID
const deleteUser = async (id) => {
    const user = await models.User.findByPk(id);
    if (user) {
        await user.update({isDeleted:1});
        return true;
    }
    return false;
};

module.exports = {
    checkForUser,
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};
