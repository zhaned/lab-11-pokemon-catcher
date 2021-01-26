import pokemon from './data.js';
import { encounter, caught } from './localStorageUtils.js';
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

    encounter(pokemonOne._id);
    encounter(pokemonTwo._id);
    encounter(pokemonThree._id);

    const display1 = getDisplay(pokemonOne);
    const display2 = getDisplay(pokemonTwo);
    const display3 = getDisplay(pokemonThree);

    displayPoke.textContent = '';
    displayPoke.append(display1, display2, display3);
}

export function findUnderlineId(id, stats){
    for (let i of stats){
        if (i._id === id){
            return i;
        }
    }
}

export function getDisplay(item) {
    const image = document.createElement('img');
    image.src = item.url_image;
    image.classList.add('pokemon-image');

    image.addEventListener('click', () => {
        caught(item._id);
        if (turns < 10) {
            generatePokemon();
        
        } else {
            window.location = 'results'; //takes to the results page
        }
    });
    
    return image;
}