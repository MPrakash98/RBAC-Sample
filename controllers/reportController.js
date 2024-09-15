const reportService = require('../services/reportService');
const responder = require('../helper/responder');

// Get all reports
const getAllReports = async (req, res) => {
  try {
    const reports = await reportService.getAllReports();
    responder.success(res, reports);
  } catch (error) {
    responder.error(res, error.message);
  }
};

// Get a single report by ID
const getReportById = async (req, res) => {
  try {
    const report = await reportService.getReportById(req.params.id);
    if (report) {
      responder.success(res, report);
    } else {
      responder.notFound(res);
    }
  } catch (error) {
    responder.error(res, error.message);
  }
};

// Create a new report
const createReport = async (req, res) => {
  try {
    const newReport = await reportService.createReport(req.body);
    responder.created(res, newReport);
  } catch (error) {
    console.log("err",error)
    responder.error(res, error.message);
  }
};

// Update a report
const updateReport = async (req, res) => {
  try {
    const updatedReport = await reportService.updateReport(req.params.id, req.body);
    if (updatedReport) {
      responder.success(res, updatedReport);
    } else {
      responder.notFound(res);
    }
  } catch (error) {
    responder.error(res, error.message);
  }
};

// Delete a report
const deleteReport = async (req, res) => {
  try {
    const deleted = await reportService.deleteReport(req.params.id);
    if (deleted) {
      responder.success(res, { message: "Report deleted successfully" });
    } else {
      responder.notFound(res);
    }
  } catch (error) {
    responder.error(res, error.message);
  }
};

module.exports = {
  getAllReports,
  getReportById,
  createReport,
  updateReport,
  deleteReport
};
