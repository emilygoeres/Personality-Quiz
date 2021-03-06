module.exports = function(sequelize, DataTypes) {
    var answer = sequelize.define("answer", {
      answer: {
        type: DataTypes.STRING,
        allowNull: false
      },
      points: {
        type: DataTypes.INTEGER,
        defaultVale: 1
      }
    });
    answer.associate = function(models) {
        answer.belongsTo(models.question, {
          foreignKey: {
            allowNull: false
          }
        } 
        );

        answer.belongsTo(models.personality, {
          foreignKey: {
            allowNull: false
          }
        }
        );
      }
    return answer;
  }