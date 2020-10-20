module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("user", {
      user_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          len: [8,16]
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [8,16]
        }
      },
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
      User.hasMany(models.friends, {
        foreignKey: {
          allowNull: false
        }
    })
    User.belongsTo(models.friends, {
      foreignKey: {
        allowNull: false
      }
  })
  }
    return User;
  };