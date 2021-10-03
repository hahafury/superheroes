const db = require('../models');
const superheroQueries = require('./queries/superheroQueries');
const fs = require('fs');
const path = require('path');

module.exports.createSuperhero = async (req, res, next) => {
    const superheroData = JSON.parse(req.body.superheroData)
    const files = req.files

    try {
        superheroData.images = []
        files.forEach(file => {
            superheroData.images.push(file.filename)
        })
        const newSuperhero = await superheroQueries.createSuperhero(superheroData)
        if(newSuperhero) res.status(201).send(newSuperhero)
    } catch (error) {
        res.sendStatus(500)
        next(error)
    }
}

module.exports.getSuperheroes = async (req, res, next) => {
    const { body } = req
    try {
        const superheroes = await superheroQueries.getAllSuperheroes(body)
        if(superheroes) res.status(201).send(superheroes)
    } catch (error) {
        res.sendStatus(404)
        next(error)
    }
}

module.exports.getSuperheroById = async (req, res, next) => {
    const {superheroid} = req.headers
    try {
        const superhero = await superheroQueries.getSuperheroById(superheroid)
        if (superhero) res.status(201).send(superhero)
    } catch (error) {
        res.sendStatus(404)
        next(error)
    }
}

module.exports.updateSuperhero = async (req, res, next) => {
    const {superheroExistingImages} = req.body
    const superheroData = JSON.parse(req.body.superheroData)
    const files = req.files
    const newImages = []
    try {
        if(superheroExistingImages){
            superheroExistingImages.forEach(image => {
                newImages.push(image)
            })
        }
        if(files){
            files.forEach(file => {
                newImages.push(file.filename)
            })
        }
        const superhero = await superheroQueries.getSuperheroById(superheroData.id)
        if(newImages.length == 0){
            superhero.images.forEach(image => {
                fs.unlink(path.join(__dirname, `../public/images/${image}`),()=>console.log(`IMG ${image} was deleted`))
            })
        } else{
            superhero.images.forEach(image => {
                if(!newImages.includes(image)){
                    fs.unlink(path.join(__dirname, `../public/images/${image}`),() => console.log(`IMG ${image} was deleted`))
                }
            })
        }
        superheroData.images = newImages;
        const updatedSuperhero = await superheroQueries.updateSuperhero(superheroData, superheroData.id)
        if(updatedSuperhero) res.status(200).send(updatedSuperhero)
    } catch (error) {
        res.sendStatus(500)
        next(error)
    }
    
}

module.exports.deleteSuperhero = async (req, res, next) => {
    const id = {
        id: req.headers.superheroid
    }
    try {
        const superhero = await superheroQueries.getSuperheroById(id.id)
        superhero.images.forEach(image => {
            fs.unlink(path.join(__dirname, `../public/images/${image}`),() => console.log(`IMG ${image} was deleted`))
        })
        const deletedSuperhero = await superheroQueries.deleteSuperhero(id)
        if(deletedSuperhero) res.sendStatus(200).send(deletedSuperhero)
    } catch (error) {
        res.sendStatus(500)
        next(error)
    }
}