const router = require('express').Router();
const axios = require('axios')
const {Type} = require('../db')

router.get('/', async (req, res) => {
    
    const response = await axios('https://pokeapi.co/api/v2/type')
    
    const allTypes = response.data.results.map(el => el.name)
         
    allTypes.forEach(element => {
             Type.findOrCreate({
                 where: {name: element}
             })
         });
     
         const totalTypes = await Type.findAll()
         res.status(200).send(totalTypes)
})

module.exports = router;