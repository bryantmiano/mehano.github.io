import React from 'react';

function PokemonCard({pokemon}) {
    return <div className="pokemon-card">
        <h3>{pokemon.name}</h3>
        <img className="thumb" alt="pokemon img" src={pokemon.sprites.front_shiny}/>
        <dl>
            <dt>Height</dt>
            <dd>{pokemon.height}</dd>
            <dt>Weight</dt>
            <dd>{pokemon.weight}</dd>
            <dt>Base Experience</dt>
            <dd>{pokemon.base_experience}</dd>
        </dl>
    </div>
}

export default PokemonCard;