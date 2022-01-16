const { DataTypes } = require("sequelize");

module.exports = model;

function model(sequelize) {
  const attributes = {
    title: { type: DataTypes.STRING, allowNull: false },
    topic: { type: DataTypes.STRING, allowNull: false },
    requestUserId: { type: DataTypes.STRING, allowNull: false },
    hostUserId: { type: DataTypes.STRING, allowNull: true },
    bookedDate: { type: DataTypes.DATE, allowNull: true },
  };

  const options = {
    defaultScope: {},
    scopes: {},
  };

  return sequelize.define("Post", attributes, options);
}
