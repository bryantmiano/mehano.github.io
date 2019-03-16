import types from './types';

const fetchPokemon = id => ({
    type: types.FETCH_POKEMON,
    id,
});

const fetchPokemonSuccess = response => ({
    type: types.FETCH_POKEMON_SUCCESS,
    ...response,
});

const fetchPokemonFailure = error => ({
    type: types.FETCH_POKEMON_FAILURE,
    error,
});

const replacePokemon = (pokemon, index) => ({
    type: types.REPLACE_POKEMON,
    pokemon,
    index,
});

export default {
    fetchPokemon,
    fetchPokemonSuccess,
    fetchPokemonFailure,
    replacePokemon,
};