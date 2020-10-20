module.exports = function(sequelize, DataTypes) {
    var result = sequelize.define("result", {
      result: DataTypes.STRING,
    });

    quizzes_taken.associate = function(models) {
      quizzes_taken.hasOne(models.user, {
        foreignKey: {
          allowNull: false
        }
      })
      quizzes_taken.hasOne(models.answer, {
        foreignKey: {
          allowNull: false
        }
      })
      quizzes_taken.hasOne(models.quiz, {
        foreignKey: {
          allowNull: false
        }
      })
    }

    return result;
  };
  