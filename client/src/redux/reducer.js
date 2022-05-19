const initialState = {
    allPokemons: [],
    allPokemonsCopy: [],
    detail: [],
    types: [],
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
        case 'ORDER_CREATED':
            const pokemons = state.allPokemonsCopy
            const filter =
            action.payload === 'created'
            ? pokemons.filter((el) => el.createdDB)
            : pokemons.filter((el) => !el.createdDB)
            return {
                ...state,
                allPokemons: filter
            }
        case 'FILTER_TYPES':
            const pokemons2 = state.allPokemonsCopy;
            const statusFilter2 =
              action.payload === "all"
                ? pokemons2
                : pokemons2.filter((e) => e.types.includes(action.payload));
            return {
                ...state,
                allPokemons: statusFilter2
            }
        case 'ORDER_ALP':
            let pokemons3 = state.allPokemons
            let sorted = 
              action.payload === 'atoz'
              ? pokemons3.sort(function(a,b) {
                if (a.name > b.name) {return 1}
                if (b.name > a.name) {return -1}
                return 0;
              })
              : pokemons3.sort(function(a,b) {
                if (a.name > b.name) {return -1}
                if (b.name > a.name) {return 1}
                return 0;
              })

            return {
                ...state,
                allPokemons: sorted
            }
        default:
            return state;
        
    }
}

export default rootReducer;