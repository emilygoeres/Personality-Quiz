module.exports = function(sequelize, DataTypes) {
    var quizTaken = sequelize.define("quizTaken", {
      quizTaken: DataTypes.STRING,
    });

    quizTaken.associate = function(models) {
      quizTaken.belongsTo(models.user, {
        foreignKey: {
          allowNull: false
        }
      })
      quizTaken.belongsTo(models.answer, {
        foreignKey: {
          allowNull: false
        }
      })
      quizTaken.belongsTo(models.quiz, {
        foreignKey: {
          allowNull: false
        }
      })
    }

    return quizTaken;
  };
  