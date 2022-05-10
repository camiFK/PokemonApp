const axios = require('axios')

function getPokemonsApi() {
    let pokeData = []
     axios('https://pokeapi.co/api/v2/pokemon?limit=40')
    .then((res) => {
       res.data.results.map(poke => {
         const pokeurl = poke.url
         axios(pokeurl)
         .then((res2) => {
             const {data} = res2
             
             let pokemon = {
                id: data.id,
                name: data.name,
                life: data.stats[0].base_stat,
                strength: data.stats[1].base_stat,
                defense: data.stats[2].base_stat,
                speed: data.stats[5].base_stat,
                height: data.height,
                weight: data.weight,
                image: data.sprites.front_default,
                types: data.types.map((el) => { return el.type.name })
             }
             pokeData.push(pokemon)
             return pokeData
         })
     });
    })
   .catch((error) => {console.log(error)})
}





module.exports = {
    getPokemonsApi
}