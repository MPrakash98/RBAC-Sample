const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController');
const validateRequest = require('../middleware/validateParams');
const authMiddleware = require('../middleware/authMiddleware');

// CRUD Routes for reports
router.get('/',  authMiddleware.checkLogin, authMiddleware.setPermissionSlug('read-report'), authMiddleware.checkPermission, reportController.getAllReports);

router.get('/:id', authMiddleware.checkLogin, authMiddleware.setPermissionSlug('read-report'), authMiddleware.checkPermission, validateRequest(['id'], [], []), reportController.getReportById);

router.post('/',  authMiddleware.checkLogin, authMiddleware.setPermissionSlug('create-report'), authMiddleware.checkPermission, validateRequest([], ['title','description'], []), reportController.createReport);

router.put('/:id',  authMiddleware.checkLogin, authMiddleware.setPermissionSlug('update-report'), authMiddleware.checkPermission, validateRequest(['id'], ['title','description'], []), reportController.updateReport);

router.delete('/:id', authMiddleware.checkLogin, authMiddleware.setPermissionSlug('delete-report'), authMiddleware.checkPermission, validateRequest(['id'], [], []), reportController.deleteReport);

module.exports = router;
