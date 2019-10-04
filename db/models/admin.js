"use strict";
module.exports = (sequelize, DataTypes) => {
  const Admin = sequelize.define(
    "Admin",
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING
    },
    {
      timestamps: false,
      defaultScope: {
        attributes: { exclude: ["password"] }
      }
    }
  );
  Admin.associate = function(models) {
    Admin.hasMany(models.blog)
    // associations can be defined here
  };
  return Admin;
};
