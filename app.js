// app.js
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var productsRouter = require("./routes/products");
var categoriesRouter = require("./routes/categories");
var authRouter = require("./routes/auth");
var sequelize = require("./models/index");

// Data model

var Category = require("./models/category");
var Customer = require("./models/customer");
var Employee = require("./models/employee");
var Order = require("./models/order");
var OrderDetail = require("./models/orderDetail");
var Product = require("./models/product");
var Shipper = require("./models/shipper");
var Supplier = require("./models/supplier");



var app = express();
app.set('view engine', 'pug');

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use('/uploads', express.static('uploads'));
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);
app.use("/categories", categoriesRouter);
app.use("/auth", authRouter);
sequelize
  .sync()
  .then(() => {
    console.log("Database synchronized");
  })
  .catch((err) => {
    console.error("Error synchronizing database:", err);
  });
module.exports = app;
