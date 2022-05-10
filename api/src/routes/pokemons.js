const router = require('express').Router();
const {getAllPokemons} = require('../controllers/pokemonC')

router.get('/', async (req, res) => {

    const {name} = req.query
    let allPokemons = await getAllPokemons();

    if (name) {
        let filterPoke = allPokemons.filter((poke) => poke.name.toLowerCase().includes(name.toLowerCase()))
        filterPoke.length ?
        res.status(200).send(filterPoke)
        : res.status(404).send('Error')
    }
    else {
        res.status(200).send(allPokemons)
    }
    
})

module.exports = router;