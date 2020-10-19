module.exports = function(sequelize, DataTypes) {
    var result = sequelize.define("result", {
      result: DataTypes.STRING,
    });
    return result;
  };
  