// models/product.js
const { DataTypes } = require("sequelize");
const sequelize = require("./index");
const Supplier = require("./supplier");
const Category = require("./category");
const Product = sequelize.define("Product", {
  productID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  productName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  supplierID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references : {
      model : Supplier,
      key : "supplierID"
    }
  },
  categoryID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Category,
      key : "categoryID"
    }
  },
  unit: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
});

Product.belongsTo(Supplier, {foreignKey : "supplierID"});
Supplier.hasMany(Product, { foreignKey : "supplierID"});

Product.belongsTo(Category, {foreignKey : "categoryID"});
Category.hasMany(Product, {foreignKey : "categoryID"});


module.exports = Product;
