"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "first-model",
      [
        {
          firstName: "John",
          lastName: "Doe",
          email: "demo@demo.com"
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("first-nmodel", null, {});
  }
};
