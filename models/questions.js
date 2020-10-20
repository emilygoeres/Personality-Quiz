module.exports = function(sequelize, DataTypes) {
    var question = sequelize.define("question", {
      question: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    });
    question.associate = function(models) {
      question.belongsTo(models.quiz, {
        foreignKey: {
          allowNull: false
        }})

      question.hasMany(models.answer,{
        foreignKey: {
          allowNull: false
        }}
      )
    }
    return question;
  };
  