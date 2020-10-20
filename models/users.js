module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("user", {
      user_name: DataTypes.STRING,
      password: DataTypes.STRING,
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      email: {
          type: DataTypes.STRING,
          validate: {
              isEmail: true
          }
      }
    });
    User.associate = function(models) {
      User.hasMany(models.result, {
        foreignKey: {
          allowNull: false
        }
      })
      User.hasMany(models.quiz, {
        foreignKey: {
          allowNull: false
        }
    })
  }
    return User;
  };