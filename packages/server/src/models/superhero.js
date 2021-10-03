'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Superhero extends Model {
    static associate(models) {}
  }
  Superhero.init(
    {
      nickname: {
        type: DataTypes.STRING,
        require: true,
      },
      real_name: {
        type: DataTypes.STRING,
        require: true,
      },
      origin_description: DataTypes.TEXT,
      superpowers: {
        type: DataTypes.TEXT,
        defaultValue: '',
      },
      catch_phrase: DataTypes.STRING,
      images: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        defaultValue: [],
      },
    },
    {
      timestamp: true,
      sequelize,
      modelName: 'Superhero',
      underscored: true,
      tableName: 'superheroes',
    }
  );
  return Superhero;
};
