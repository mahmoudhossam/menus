"use strict";

module.exports = function(sequelize, DataTypes) {
  var Menu = sequelize.define("Menu", {
    name: {type: DataTypes.STRING, allowNull: false}
  }, {
    classMethods: {
      associate: function(models) {
        Menu.hasMany(models.Category)
      }
    }
  });

  return Menu;
};
