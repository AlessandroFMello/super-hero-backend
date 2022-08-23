const Universe = (sequelize, DataTypes) => {
  const universe = sequelize.define('Universe', {
    id: {
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    universe: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  }, {
    underscored: true,
    sequelize,
    modelName: 'Universe',
    tableName: 'universes',
    timestamps: false,
  });

  universe.associate = (models) => {
    universe.hasMany(
      models.Hero,
      { foreignKey: 'universe', as: 'universeHeroes' },
    );
  };

  return universe;
};

module.exports = Universe;
