const Hero = (sequelize, DataTypes) => {
  const hero = sequelize.define('Hero', {
    id: {
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    universe: {
      allowNull: false,
      type: DataTypes.STRING,
      foreignKey: true,
      references: {
        model: 'Universe',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    image: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  }, {
    underscored: true,
    sequelize,
    modelName: 'Hero',
    tableName: 'heroes',
    timestamps: false,
  });

  hero.associate = (models) => {
    hero.belongsTo(
      models.Universe,
      { foreignKey: 'universe', as: 'heroUniverse' },
    );
  };

  return hero;
};

module.exports = Hero;
