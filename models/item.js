"use strict";

module.exports = function(sequelize, DataTypes) {
  var Item = sequelize.define("Item", {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Item.hasMany(models.Size)
      }
    }
  });

  return Item;
};