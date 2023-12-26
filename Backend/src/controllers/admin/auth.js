const User = require("../../models/user");
const jwt = require("jsonwebtoken");

exports.signup = (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || typeof firstName !== "string" || firstName.trim() === "") {
    return res.status(400).json({
      message: "Please provide a valid first name",
    });
  }

  User.findOne({ email: email }, (error, existingUser) => {
    if (error) {
      return res.status(500).json({
        message: "Database error while checking for existing user",
        error: error.message, // Optional: Sending the error message for debugging
      });
    }

    if (existingUser) {
      return res.status(400).json({
        message: "Admin already exists",
      });
    }

    const username = `${firstName.toLowerCase()}${Math.floor(
      Math.random() * 10000
    )}`;

    const newUser = new User({
      firstName,
      lastName,
      email,
      password,
      username,
      role: "admin",
    });

    newUser.save((saveError, savedUser) => {
      if (saveError) {
        return res.status(500).json({
          message: "Error while creating the user",
          error: saveError.message, // Optional: Sending the error message for debugging
        });
      }

      if (savedUser) {
        return res.status(201).json({
          message: "Admin created successfully",
          user: savedUser,
        });
      }
    });
  });
};

exports.signin = (req, res) => {
  User.findOne({ email: req.body.email }).exec(async (error, user) => {
    if (error) return res.status(400).json({ error });
    if (user) {
      try {
        const authenticated = await user.authenticate(
          req.body.password && user.role === "admin"
        );
        if (authenticated) {
          const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "1h",
          });
          const { _id, firstName, lastName, email, role, fullName } = user;
          res.status(200).json({
            token,
            user: { _id, firstName, lastName, email, role, fullName },
          });
        } else {
          return res.status(400).json({
            message: "Invalid Password",
          });
        }
      } catch (error) {
        return res.status(500).json({
          message: "Authentication error",
          error: error.message, // Send the specific error message for debugging
        });
      }
    } else {
      return res.status(400).json({ message: "User not found" });
    }
  });
};

exports.requiresignin = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const user = jwt.verify(token, process.env.JWT_SECRET);
  req.user = user;
  next();
};
