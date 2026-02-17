const ERROR_TYPES = {
  BAD_REQUEST: { statusCode: 400, message: "Invalid data" },
  UNAUTHORIZED: { statusCode: 401, message: "Unauthorized" },
  FORBIDDEN: { statusCode: 403, message: "Forbidden" },
  NOT_FOUND: { statusCode: 404, message: "Not found" },
  INTERNAL_SERVER_ERROR: { statusCode: 500, message: "Internal server error" },
};

module.exports = { ERROR_TYPES };
