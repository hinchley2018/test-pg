const express = require("express")
const app = express()

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()

//dependencies
const Sequelize = require("sequelize")
const sequelize = new Sequelize(
    process.env.PG_DB_NAME,
    process.env.PG_USERNAME,
    process.env.PG_PASS,
    {
        host: process.env.PG_HOST,
        dialect: "postgres"
    }
)

sequelize.authenticate().then(() => {
    console.log("Success!");
}).catch((err) => {
    console.log(err);
});


//grab model
const movieSchema = require("./models/movie_model")
const movieModel = movieSchema(sequelize,Sequelize.DataTypes) 

app.get("/", async (req, res) => {
    try {
        let movies = await movieModel.findAll({

        })
        res.json(movies)
    }
    catch (e){
        console.error(e)
        res.send("An errorr occurred")
    }
})

app.post("/", async (req, res) => {
    try {
        let newMovie = await movieModel.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new movie',
            data: newMovie
        })
    }
    catch (e){
        console.error(e)
        res.send("An errorr occurred")
    }
})

app.listen(3000, () => {
    console.log("App listening on http://localhost:3000")
})