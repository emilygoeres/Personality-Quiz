module.exports = function(sequelize, DataTypes) {
    
    friends.associate = function(models) {

        friends.belongsTo(models.users, {
        foreignKey: {
          allowNull: false
        }
      } )
    }
        friends.hasMany(models.users, {
            foreignKey: {
              allowNull: false
            }
        })
    return friends;
  };
  