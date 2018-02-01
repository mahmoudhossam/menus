"use strict";

module.exports = function(sequelize, DataTypes) {
  var Size = sequelize.define("Size", {
    name: {type: DataTypes.STRING, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false}
  });
  return Size;
};
