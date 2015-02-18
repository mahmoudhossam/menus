"use strict";

module.exports = function(sequelize, DataTypes) {
  var Size = sequelize.define("Size", {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER
  });
  return Size;
};
