module.exports = function(sequelize, DataTypes) {
    var quiz = sequelize.define("quiz", {
      quiz_name: DataTypes.STRING,
    });
    
    quiz.associate = function(models) {
    quiz.belongsTo(models.user, {
      foreignKey: {
        allowNull: false
      }}
      )

    quiz.hasMany(models.question,
      {
        foreignKey: {
          allowNull: false
        }});
    }
    return quiz;
  };
  