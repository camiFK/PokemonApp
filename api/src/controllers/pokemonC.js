const axios = require('axios')
const { Pokemon, Type } = require('../db')

const getPokemonsApi = async () => {
    try {  
        let allUrls= []
        let id = 1;

        while (id <= 53) {
            allUrls.push(axios(`https://pokeapi.co/api/v2/pokemon/${id}`))
            id++
        }

        const allInfo = await Promise.all(allUrls)
        .then((pokemon) => {
            let pokeData = pokemon.map((poke) => {
                return {
                    id: poke.data.id,
                    name: poke.data.name,
                    life: poke.data.stats[0].base_stat,
                    strength: poke.data.stats[1].base_stat,
                    defense: poke.data.stats[2].base_stat,
                    speed: poke.data.stats[5].base_stat,
                    height: poke.data.height,
                    weight: poke.data.weight,
                    image: poke.data.sprites.other.home.front_default,
                    types: poke.data.types.map((el) => { return{ name: el.type.name }})
                }
            })
            return pokeData
        });
        return allInfo;               
    } catch (error) {console.log(error)}
    
}

const getPokemonsDb = async () => {
    try {
        return await Pokemon.findAll({
            include: { model: Type, attributes: ['name'], through: {attributes: []} }
        });
    } catch (error) { console.log(error) }
}

 const getAllPokemons = async () => {
     try {   
         const apipokes = await getPokemonsApi()
         const dbpokes = await getPokemonsDb()
         const allpokes = apipokes.concat(dbpokes)
         return allpokes
     } catch (error) { console.log(error) }
 }

module.exports = {
    getAllPokemons
}