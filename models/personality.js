module.exports = function(sequelize, DataTypes) {
    var personality = sequelize.define("personality", {
      personality_type: {
        type: DataTypes.STRING,
        allowNull: false
      }
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
  