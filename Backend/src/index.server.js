const express = require("express");
const app = express();
const env = require("dotenv");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
//routes
const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin/auth");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");
const cartRoutes = require("./routes/cart");
// Environment variable or you can say constants
env.config();

//mongodb connection
//mongodb+srv://root:<password>@cluster0.o4lsg4q.mongodb.net/?retryWrites=true&w=majority

// @cluster0.o4lsg4q.mongodb.net/?retryWrites=true&w=majority

mongoose.set("strictQuery", false);
mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.o4lsg4q.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`
  )
  .then((db) => {
    console.log("Database connected");
    // Additional code handling database connection if needed
  })
  .catch((error) => {
    console.error("Error connecting to database:", error);
  });

app.use(express.json());
app.use("/api", authRoutes); //adminRoutes
app.use("/api", adminRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);
app.use("/api", cartRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
