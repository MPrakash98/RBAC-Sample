const Report = require('../models/report');

// Get all reports
const getAllReports = async () => {
  return await Report.findAll();
};

// Get a single report by ID
const getReportById = async (id) => {
  return await Report.findByPk(id);
};

// Create a new report
const createReport = async (data) => {
  return await Report.create(data);
};

// Update a report by ID
const updateReport = async (id, data) => {
  const report = await Report.findByPk(id);
  if (report) {
    return await report.update(data);
  }
  return null;
};

// Delete a report by ID
const deleteReport = async (id) => {
  const report = await Report.findByPk(id);
  if (report) {
    await report.destroy();
    return true;
  }
  return false;
};

module.exports = {
  getAllReports,
  getReportById,
  createReport,
  updateReport,
  deleteReport
};
