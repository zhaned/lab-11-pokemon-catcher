import pokemon from './data.js';
const displayPoke = document.getElementById('pokemon');

let turns = 0;

export function getPokemon(){
    const id = Math.floor(Math.random() * pokemon.length);
    return pokemon[id];
}

export function generatePokemon(){
    turns++; // adds a turn everytime new encounter occurs
    let pokemonOne = getPokemon();
    let pokemonTwo = getPokemon();
    let pokemonThree = getPokemon();

    while (pokemonOne === pokemonTwo || pokemonOne === pokemonThree || pokemonTwo === pokemonThree){
        pokemonOne = getPokemon();
        pokemonTwo = getPokemon();
        pokemonThree = getPokemon();
    }

    

}

export function findUnderlineId(id, stats){
    for (let i of stats){
        if (i._id === id){
            return i;
        }
    }
}