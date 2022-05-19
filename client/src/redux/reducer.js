const initialState = {
    allPokemons: [],
    allPokemonsCopy: [],
    detail: [],
    types: []
}

function rootReducer (state = initialState, action) {
    const {parameter, types} = action;
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
            const filtertypes = state.allPokemonsCopy.filter((el) => {
                return el.types.some(t => t.name.toLowerCase === types.toLowerCase())
            })
            return {
                ...state,
                allPokemons: filtertypes
            }
        default:
            return state;
        
    }
}

export default rootReducer;