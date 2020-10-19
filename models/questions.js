module.exports = function(sequelize, DataTypes) {
    var question = sequelize.define("question", {
      question: DataTypes.STRING,
      answer_A: DataTypes.STRING,
      answer_B: DataTypes.STRING,
      answer_C: DataTypes.STRING,
      answer_D: DataTypes.STRING,
      

    });
    question.associate = function(models) {
      question.belongsTo(models.quiz, {
        foreignKey: {
          allowNull: false
        }})
    }
    return question;
  };
  