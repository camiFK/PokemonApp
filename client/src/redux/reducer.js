const initialState = {
    allPokemons: [],
    allPokemonsCopy: [],
    detail: [],
    types: []
}

function rootReducer (state = initialState, action) {
    switch(action.type) {
        case 'GET_POKEMONS':
            return {
                ...state,
                allPokemons: action.payload,
                allPokemonsCopy: action.payload
            }
        case 'GET_POKE_NAME':
            return {
                ...state,
                allPokemons: action.payload
            }
        case 'GET_DETAIL':
            return {
                ...state,
                detail: action.payload
            }
        case 'GET_TYPES':
            return {
                ...state,
                types: action.paylaod
            }
        default:
            return state;
        
    }
}

export default rootReducer;