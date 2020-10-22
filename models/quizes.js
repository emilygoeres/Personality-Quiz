module.exports = function(sequelize, DataTypes) {
    var quiz = sequelize.define("quiz", {
      quiz_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      quiz_category: DataTypes.STRING,
      image_tile: {
        type: DataTypes.TEXT,
      }
    });
    
    quiz.associate = function(models) {
      // quiz.belongsTo(models.user, {
      // foreignKey: {
      //   allowNull: false
      // }
      // })
      quiz.hasMany(models.quizTaken, {
        foreignKey: {
          allowNull: false
        }
      });

      quiz.hasMany(models.question,{
        foreignKey: {
          allowNull: false
        }
      });
    }
    return quiz;
  };
  