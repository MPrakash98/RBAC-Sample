const roleService = require('../services/roleService');
const responder = require('../helper/responder');

// Get all roles
const getAllRoles = async (req, res) => {
  try {
    const roles = await roleService.getAllRoles();
    responder.success(res, roles);
  } catch (error) {
    responder.error(res, error.message);
  }
};

// Get a single role by ID
const getRoleById = async (req, res) => {
  try {
    const role = await roleService.getRoleById(req.params.id);
    if (role) {
      responder.success(res, role);
    } else {
      responder.notFound(res);
    }
  } catch (error) {
    responder.error(res, error.message);
  }
};

// Create a new role
const createRole = async (req, res) => {
  try {
    const newRole = await roleService.createRole(req.body);
    responder.created(res, newRole);
  } catch (error) {
    responder.error(res, error.message);
  }
};

// Update a role
const updateRole = async (req, res) => {
  try {
    const updatedRole = await roleService.updateRole(req.params.id, req.body);
    if (updatedRole) {
      responder.success(res, updatedRole);
    } else {
      responder.notFound(res);
    }
  } catch (error) {
    responder.error(res, error.message);
  }
};

// Delete a role
const deleteRole = async (req, res) => {
  try {
    const deleted = await roleService.deleteRole(req.params.id);
    if (deleted) {
      responder.success(res, { message: "Role deleted successfully" });
    } else {
      responder.notFound(res);
    }
  } catch (error) {
    responder.error(res, error.message);
  }
};

module.exports = {
  getAllRoles,
  getRoleById,
  createRole,
  updateRole,
  deleteRole
};
