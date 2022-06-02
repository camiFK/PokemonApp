import axios from 'axios';

export const getPokemons = () => dispatch => {
    return axios(`https://cfk-pokeapp.herokuapp.com/pokemons`)
    .then((json) => dispatch({type: 'GET_POKEMONS', payload: json.data}))
    .catch(error => console.log(error))
}

export const getPokeDetail = (id) => dispatch => {
    return axios(`https://cfk-pokeapp.herokuapp.com/pokemons/${id}`)
    .then((json) => dispatch({type: 'GET_DETAIL', payload: json.data}))
    .catch(error => console.log(error))
}

export const cleanDetail = (dispatch) => {
    return dispatch({type: 'CLEAN_DETAIL', payload: []})
}

export const cleanPokemons = (dispatch) => {
    return dispatch({type: 'CLEAN_POKEMONS', payload: []})
};

export function getPokeName(name) {
    return async function(dispatch) {
        try {
            const json = await axios(`https://cfk-pokeapp.herokuapp.com/pokemons?name=${name}`)
            return dispatch({type: 'GET_POKE_NAME', payload: json.data}) 
        } catch (error) {
            return dispatch({
                type: 'GET_POKE_NAME', payload: [{error: `Hmmm... ${name} doesn't exists`}]
            })
        }
    }
}

export function getAllTypes() {
    return async function(dispatch) {
        try {
            const json = await axios.get(`https://cfk-pokeapp.herokuapp.com/types`)
            return dispatch({type: 'GET_TYPES', payload: json.data})
        } catch (error) {console.log(error)}
    }
}
 export function postPokemon(input) {
     return async function(dispatch) {
         try {
             let newPokemon = await axios.post(`https://cfk-pokeapp.herokuapp.com/pokemons`, input)
             return dispatch ({type: 'POST_POKEMON', newPokemon})
         } catch (error) {console.log(error)}
     }

 }

export function filterCreated(payload) {
    return {type: 'ORDER_CREATED', payload}
}

export function filterTypes(payload) {
    return {type: 'FILTER_TYPES', payload}
}

export function filterOrderAlp(payload) {
    return {type: 'ORDER_ALP', payload}
}

export function filterStrength(payload) {
    return {type: 'ORDER_STRENGTH', payload}
}

