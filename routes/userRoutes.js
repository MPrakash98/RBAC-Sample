const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const validateRequest = require('../middleware/validateParams');
const authMiddleware = require('../middleware/authMiddleware');

// CRUD Routes for users
router.post('/login', validateRequest([], ['userEmail','userPassword'], []), userController.loginUser);

router.get('/', authMiddleware.checkLogin, authMiddleware.setPermissionSlug('read-user'), authMiddleware.checkPermission, userController.getAllUsers);

router.get('/:id', authMiddleware.checkLogin, authMiddleware.setPermissionSlug('read-user'), authMiddleware.checkPermission, validateRequest(['id'], [], []), userController.getUserById);

router.post('/', authMiddleware.checkLogin, authMiddleware.setPermissionSlug('create-user'), authMiddleware.checkPermission, validateRequest([], ['userName','userEmail','userPassword','roleId'], []), userController.createUser);

router.put('/:id', authMiddleware.checkLogin, authMiddleware.setPermissionSlug('update-user'), authMiddleware.checkPermission, validateRequest(['id'], ['userEmail','userName'], []), userController.updateUser);

router.delete('/:id', authMiddleware.checkLogin, authMiddleware.setPermissionSlug('delete-user'), authMiddleware.checkPermission, validateRequest(['id'], [], []), userController.deleteUser);

module.exports = router;
