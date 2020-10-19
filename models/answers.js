module.exports = function(sequelize, DataTypes) {
    var answer = sequelize.define("answer", {
      answer: DataTypes.STRING,
    });
    answer.associate = function(models) {
        answer.belongsTo(models.question, {
          foreignKey: {
            allowNull: false
          }
        } )
    }
        answer.belongsTo(models.quizzes_taken, {
          foreignKey: {
            allowNull: false
          }
        })
        answer.belongsTo(models.personality, {
          foreignKey: {
            allowNull: false
          }
        })
    return answer;
  };