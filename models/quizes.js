module.exports = function(sequelize, DataTypes) {
    var quiz = sequelize.define("quiz", {
      quiz_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      quiz_catergory: DataTypes.STRING,
    });
    
    quiz.associate = function(models) {
      quiz.belongsTo(models.user, {
      foreignKey: {
        allowNull: false
      }
      })
      quiz.belongsTo(models.quizzes_taken, {
        foreignKey: {
          allowNull: false
        }
      });

      quiz.hasMany(models.question,
      {
        foreignKey: {
          allowNull: false
        }
      });
    }
    return quiz;
  };
  