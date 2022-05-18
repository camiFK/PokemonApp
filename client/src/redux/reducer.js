const initialState = {
    allPokemons: [],
    allPokemonsCopy: []
}

function rootReducer (state = initialState, action) {
    switch(action.type) {
        case 'GET_POKEMONS':
            return {
                ...state,
                allPokemons: action.payload,
                allPokemonsCopy: action.payload
            }
        default:
            return state;
        
    }
}