module.exports = function(sequelize, DataTypes) {
    var personality = sequelize.define("personality", {
      personality_type: DataTypes.STRING,
      personality_description: DataTypes.TEXT
    });

    personality.associate = function(models) {
      personality.hasMany(models.answer, {
        foreignKey: {
          allowNull: false
        }
      } )
    }
    return personality;
  };
  