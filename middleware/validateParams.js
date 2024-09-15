const responder = require('../helper/responder');

// Middleware to check for required params, body, and query parameters
const validateRequest = (requiredParams = [], requiredBody = [], requiredQuery = []) => {
    return (req, res, next) => {
      let missingParams = [];
      let missingBody = [];
      let missingQuery = [];
  
      // Check required params
      requiredParams.forEach(param => {
        if (!req.params[param]) {
          missingParams.push(param);
        }
      });
  
      // Check required body fields
      requiredBody.forEach(field => {
        if (!req.body[field]) {
          missingBody.push(field);
        }
      });
  
      // Check required query fields
      requiredQuery.forEach(queryParam => {
        if (!req.query[queryParam]) {
          missingQuery.push(queryParam);
        }
      });
  
      // If any are missing, respond with an error
      if (missingParams.length || missingBody.length || missingQuery.length) {
        return responder.missingParams(res, missingParams, missingBody, missingQuery)
      }
      // Proceed to the next middleware or route handler if all checks pass
      next();
    };
  };
  
  module.exports = validateRequest;
  