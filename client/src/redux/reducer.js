const initialState = {
    allPokemons: [],
    allPokemonsCopy: [],
    detail: [],
    types: [],
}

function rootReducer (state = initialState, action) {
    const {newPokemon} = action;
    switch(action.type) {
        case 'GET_POKEMONS':
            return {
                ...state,
                allPokemons: action.payload,
                allPokemonsCopy: action.payload
            }
        case 'CLEAN_POKEMONS':
            return {
                ...state,
                allPokemons: action.payload
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
        case 'CLEAN_DETAIL': 
        return {
            ...state,
            detail: action.payload
        }
        case 'GET_TYPES':
            return {
                ...state,
                types: action.payload
            }
        case 'ORDER_CREATED':
            const pokemons = state.allPokemonsCopy
            const filter =
            action.payload === 'created'
            ? pokemons.filter((el) => el.createdDB)
            : pokemons.filter((el) => !el.createdDB)
            return {
                ...state,
                allPokemons: [...filter]
            }
        case 'FILTER_TYPES':
            let pokemons2 = state.allPokemonsCopy;
            let typeFiltered =
              action.payload === "all"
                ? pokemons2
                : pokemons2.filter(el => el.types[0].name === action.payload 
                    || el.types[1]?.name === action.payload
                    || el.types[2]?.name === action.payload
                    );
            if (typeFiltered.length <= 0 ) {
                typeFiltered = pokemons2;
                alert('Sorry, there are not pokemons with that type :(');
            }
            return {
                ...state,
                allPokemons: [...typeFiltered]
            }
        case 'ORDER_ALP':
            let pokemons3 = state.allPokemons
            let sorted = 
              action.payload === 'atoz'
              ? pokemons3.sort(function(a,b) {
                if (a.name.toLowerCase() > b.name.toLowerCase()) {return 1}
                if (b.name.toLowerCase() > a.name.toLowerCase()) {return -1}
                return 0;
              })
              : pokemons3.sort(function(a,b) {
                if (a.name.toLowerCase() > b.name.toLowerCase()) {return -1}
                if (b.name.toLowerCase() > a.name.toLowerCase()) {return 1}
                return 0;
              })
            return {
                ...state,
                allPokemons: [...sorted]
            }
        case 'ORDER_STRENGTH':
            let pokemons4 = state.allPokemons
            let sorted2 = 
              action.payload === 'asc'
              ? pokemons4.sort((a,b) => a.strength - b.strength)
              : pokemons4.sort((a,b) => b.strength - a.strength)
            return {
                ...state,
                allPokemons: [...sorted2]
            }
        case 'POST_POKEMON':
            return {
                ...state,
                allPokemons: [...state.allPokemons, ...newPokemon]
            }
        default: return state;    
    }
}

export default rootReducer;