// Success response
const success = (res, data, message = null) => {
  if (message !== null) {
    res.status(200).json({
      status: "success",
      message: message,
      data: data
    });
  } else {
    res.status(200).json({
      status: "success",
      data: data
    });
  }
};

// Created response
const created = (res, data) => {
  res.status(201).json({
    status: "created",
    data: data
  });
};

// Error response
const error = (res, message) => {
  res.status(500).json({
    status: "error",
    message: message
  });
};

// Error response
const unAuthorized = (res, message) => {
  res.status(401).json({
    status: "error",
    message: message
  });
};

// Not found response
const notFound = (res) => {
  res.status(404).json({
    status: "not found",
    message: "Resource not found"
  });
};

// Forbidden response
const forbidden = (res) => {
  res.status(403).json({
    status: "forbidden",
    message: "Forbidden. You are not authorized to access this page"
  });
};

// Missing fields from request
const missingParams = (res, ...data) => {
  res.status(403).json({
    status: "missing",
    message: "Missing required fields",
    data: data
  });
};

module.exports = {
  missingParams,
  forbidden,
  success,
  created,
  error,
  unAuthorized,
  notFound
};
