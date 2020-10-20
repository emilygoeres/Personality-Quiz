module.exports = function(sequelize, DataTypes) {
    var answer = sequelize.define("answer", {
      answer: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
    answer.associate = function(models) {
        answer.belongsTo(models.question, {
          foreignKey: {
            allowNull: false
          }
        } 
        );
        answer.hasMany(models.quizTaken, {
          foreignKey: {
            allowNull: false
          }
        }
        );
        answer.belongsTo(models.archetype, {
          foreignKey: {
            allowNull: false
          }
        }
        );
      }
    return answer;
  }