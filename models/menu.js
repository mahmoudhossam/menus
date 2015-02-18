"use strict";

module.exports = function(sequelize, DataTypes) {
  var Menu = sequelize.define("Menu", {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Menu.hasMany(models.Category)
      }
    }
  });

  return Menu;
};
