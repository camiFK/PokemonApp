import axios from 'axios';

export const getPokemons = () => dispatch => {
    return axios(`http://localhost:3001/pokemons`)
    .then((json) => dispatch({type: 'GET_POKEMONS', payload: json.data}))
    .catch(error => console.log(error))
}

export function getPokeName(name) {
    return async function(dispatch) {
        try {
            const json = await axios(`http://localhost:3001/pokemons?name=${name}`)
            return dispatch({type: 'GET_POKE_NAME', payload: json.data}) 
        } catch (error) {console.log(error)}
    }
}

export const getPokeDetail = (id) => dispatch => {
    return axios(`http://localhost:3001/pokemons/${id}`)
    .then((json) => dispatch({type: 'GET_DETAIL', payload: json.data}))
    .catch(error => console.log(error))
}

export const getAllTypes = () => dispatch => {
    return axios(`http://localhost:3001/types`)
    .then((json) => dispatch({type: 'GET_TYPES', payload: json.data}))
    .catch(error => console.log(error))
}

export function filterCreated(parameter) {
    return {type: 'ORDER_CREATED', parameter}
}

export function filterTypes(payload) {
    return {type: 'FILTER_TYPES', payload}
}