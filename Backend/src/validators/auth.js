const { check, validationResult } = require("express-validator");

exports.validateSignUpRequest = [
  check("firstName").notEmpty().withMessage("First Name is required"),
  check("lastName").notEmpty().withMessage("Last Name is required"),
  check("email").isEmail().withMessage("Valid Email is required"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
];

exports.isRequestValidated = (req, res, next) => {
  const errors = validationResult(req);
  console.log(errors);
  if (errors.array().length > 0) {
    return res.status(400).json({ error: errors.array()[0].msg });
  }
  next();
};

exports.validateSignInRequest = [
  check("email")
    .isEmail()
    .withMessage("Valid Email is required")
    .normalizeEmail()
    .withMessage("Email should be in a valid format"),

  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long")
    .matches(/\d/)
    .withMessage("Password must contain a number")
    .matches(/[!@#$%^&*(),.?":{}|<>]/)
    .withMessage("Password must contain a special character"),
];
