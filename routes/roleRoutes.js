const express = require('express');
const router = express.Router();
const roleController = require('../controllers/roleController');
const validateRequest = require('../middleware/validateParams');
const authMiddleware = require('../middleware/authMiddleware');

// CRUD Routes for roles
router.get('/', authMiddleware.checkLogin, authMiddleware.setPermissionSlug('read-role'), authMiddleware.checkPermission, roleController.getAllRoles);

router.get('/:id', authMiddleware.checkLogin, authMiddleware.setPermissionSlug('read-role'), authMiddleware.checkPermission, validateRequest(['id'], [], []), roleController.getRoleById);

router.post('/', authMiddleware.checkLogin, authMiddleware.setPermissionSlug('create-role'), authMiddleware.checkPermission, validateRequest([], ['roleName','rules'], []), roleController.createRole);

router.put('/:id', authMiddleware.checkLogin, authMiddleware.setPermissionSlug('update-role'), authMiddleware.checkPermission, validateRequest(['id'], ['roleName','rules'], []), roleController.updateRole);

router.delete('/:id', authMiddleware.checkLogin, authMiddleware.setPermissionSlug('delete-role'), authMiddleware.checkPermission, validateRequest(['id'], [], []), roleController.deleteRole);

module.exports = router;
