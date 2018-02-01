"use strict";

module.exports = function(sequelize, DataTypes) {
  var Item = sequelize.define("Item", {
    name: {type: DataTypes.STRING, allowNull: false}
  }, {
    classMethods: {
      associate: function(models) {
        Item.hasMany(models.Size)
      }
    }
  });

  return Item;
};
