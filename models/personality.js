module.exports = function(sequelize, DataTypes) {
    var personality = sequelize.define("personality", {
      personality_type: DataTypes.STRING,
    });
    return personality;
  };
  