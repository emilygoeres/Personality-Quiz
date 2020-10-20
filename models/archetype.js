module.exports = function(sequelize, DataTypes) {
    var archetype = sequelize.define("archetype", {
      archetype: {
          type: DataTypes.STRING,
          allowNull: false
        },
      archetype_description: {
          type: DataTypes.TEXT,
          allowNull: false
      }
    });

    archetype.associate = function(models) {
      archetype.hasMany(models.personality, {
        foreignKey: {
          allowNull: false
        }
      } )
    
    archetype.hasMany(models.answer, {
      foreignKey: {
        allowNull: false
      }
    })
    }
    return archetype;
  }
  