

module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("user", {
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [1]
      }
    },
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8, 16]
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    archetype_1: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    archetype_2: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    archetype_3: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    archetype_4: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    archetype_5: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    archetype_6: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    archetype_7: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    archetype_8: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    archetype_9: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    archetype_10: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    archetype_11: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    archetype_12: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }

  });
  User.associate = function (models) {
    User.hasMany(models.quizTaken, {
      foreignKey: {
        allowNull: true
      }
    })
    User.hasMany(models.quiz, {
      foreignKey: {
        allowNull: true
      }
    })
  }
  // User.beforeCreate(function(user){
  // user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10),null);
  // })

  return User;
};