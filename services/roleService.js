const Role = require('../models/role');

// Get all roles
const getAllRoles = async () => {
  return await Role.findAll();
};

// Get a single role by ID
const getRoleById = async (id) => {
  return await Role.findByPk(id);
};

// Create a new role
const createRole = async (data) => {
  return await Role.create(data);
};

// Update a role by ID
const updateRole = async (id, data) => {
  const role = await Role.findByPk(id);
  if (role) {
    return await role.update(data);
  }
  return null;
};

// Delete a role by ID
const deleteRole = async (id) => {
  const role = await Role.findByPk(id);
  if (role) {
    await role.destroy();
    return true;
  }
  return false;
};

module.exports = {
  getAllRoles,
  getRoleById,
  createRole,
  updateRole,
  deleteRole
};
