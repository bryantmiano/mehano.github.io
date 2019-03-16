import actions from './actions';

const fetchPokemon = ({ id, index }) => dispatch => {

    dispatch(actions.fetchPokemon(id));

    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(
            response => response.json(),
            error => actions.fetchPokemonFailure(error),
        )
        .then(json => {
            if (index) dispatch(actions.replacePokemon(json, index));
            else dispatch(actions.fetchPokemonSuccess(json));
        })
        .catch(error => actions.fetchPokemonFailure(error))
};

export default {
    fetchPokemon,
};
