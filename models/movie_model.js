const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Movie extends Model {
        
    }
    Movie.init({
        movie_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING
        }
        
    }, {
        sequelize,
        modelName: 'Movie',
        tableName: 'movies'
    });
    return Movie;
};