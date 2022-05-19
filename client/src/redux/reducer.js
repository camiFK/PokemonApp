const initialState = {
    allPokemons: [],
    allPokemonsCopy: [],
    detail: [],
    types: []
}

function rootReducer (state = initialState, action) {
    const {parameter} = action;
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
        case 'ORDER_CREATED':
            const pokemons = state.allPokemonsCopy
            const filter =
            parameter === 'created'
            ? pokemons.filter((el) => el.createdDB)
            : pokemons.filter((el) => !el.createdDB)
            return {
                ...state,
                allPokemons: filter
            }
        case 'FILTER_TYPES':
            const allPokemons2 = state.allPokemonsCopy;
            const typeFilter = action.payload === "all"
                ? allPokemons2
                : allPokemons2.filter((el) =>
                    el.type
                      ? el.type[0] === action.payload || el.type[1] === action.payload
                      : el.types[0].name === action.payload || el.types[1]?.name === action.payload
                );
            return {
                ...state,
                allPokemons: typeFilter
            }
        default:
            return state;
        
    }
}

export default rootReducer;