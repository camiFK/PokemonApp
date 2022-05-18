import axios from 'axios';

export const getPokemons = () => dispatch => {
    return axios(`http://localhost:3001/pokemons`)
    .then((json) => dispatch({type: 'GET_POKEMONS', payload: json.data}))
    .catch(error => console.log(error))
}