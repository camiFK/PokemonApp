const router = require('express').Router();
const {getAllPokemons} = require('../controllers/pokemonC');
const {Pokemon, Type} = require('../db');

router.get('/', async (req, res) => {

    const {name} = req.query
    let allPokemons = await getAllPokemons();

    if (name) {
        let filterPoke = allPokemons.filter((poke) => poke.name.toLowerCase().includes(name.toLowerCase()))
        filterPoke.length 
        ? res.status(200).send(filterPoke)
        : res.status(404).send('Error')
    }
    else {
        res.status(200).send(allPokemons)
    }
    
})

router.get('/:id', async (req, res) => {

    const {id} = req.params
    let totalPokemons = await getAllPokemons(id);
    
    if(id) {
        let filterId = totalPokemons.filter((poke) => poke.id == id)
        filterId.length 
        ? res.status(200).send(filterId)
        : res.status(404).send('Error')
    }
})

router.post('/', async (req, res) => {
    let {name, life, strength, defense, speed, height, weight, types, image, createdDB} = req.body

    
    let newPokemon = await Pokemon.create({
        name,
        life,
        strength,
        defense,
        speed,
        height,
        weight,
        image,
        createdDB
    });
    
    let typesDb = await Type.findAll({
        where: {name: types}
    })
    
    await newPokemon.addType(typesDb)

    res.status(200).send(newPokemon)
})

module.exports = router;