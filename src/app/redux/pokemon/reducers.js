import types from './types';

function createReducer(initialState, handlers) {
    return function reducer(state = initialState, action) {
        if (handlers.hasOwnProperty(action.type)) {
            return handlers[action.type](state, action)
        } else {
            return state
        }
    }
}

const initialState = {
    loading: false,
    error: null,
    pokemon: [],
};

export default createReducer(initialState, {
    [types.FETCH_POKEMON]: state => ({
        ...state,
        loading: true,
    }),
    [types.FETCH_POKEMON_SUCCESS]: (state, payload) => ({
        ...state,
        loading: false,
        pokemon: [
            ...state.pokemon,
            {...payload }
        ],
    }),
    [types.FETCH_POKEMON_FAILURE]: (state, payload) => ({
        ...state,
        loading: false,
        error: payload,
    }),
    [types.REPLACE_POKEMON]: (state, payload) => {
        const newState = {
            ...state,
            loading: false,
        };

        newState.pokemon[payload.index] = payload.pokemon;

        return newState;
    }
});
