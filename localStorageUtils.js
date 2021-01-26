import pokemon from './data.js';
import { findUnderlineId } from './util.js';

const POKESTATS = 'POKESTATS';

export function getPokeData() {
    let stats = JSON.parse(localStorage.getItem(POKESTATS));

    if (!stats){ //this makes a cart for the stats 
        stats = [];
        localStorage.setItem(POKESTATS, JSON.stringify(stats));
    }
    return stats;
}

 
export function encounter(pokemonId){ //also generates pokemon for results
    const stats = getPokeData();
    const pokeId = findUnderlineId(pokemonId, stats);

    if (!pokeId){
        const pokemonStats = findUnderlineId(pokemon, pokemonId);
        const addPoke = {
            name: pokemonStats.pokebase, //this is where the name is in the data
            _id: pokemonId,
            encounter: 1,
            caught: 0,
        };
        stats.push(addPoke);
    } else {
        pokemon.encounter++;
    }
    setPokemonStats(stats);
}

export function setPokemonStats(stats){ //adds pokemon to local storage
    localStorage.setItem(POKESTATS, JSON.stringify(stats)); 
}

export function caught(pokemonId){
    const stats = getPokeData();
    const pokeId = findUnderlineId(pokemonId, stats);

    pokeId.caught++;
    setPokemonStats(stats);
}