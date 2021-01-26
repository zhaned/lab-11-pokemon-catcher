export function labelsArray(pokeData){
    const names = [];

    for (let i of pokeData){
        names.push(i.name);
    }
    return names;
}

export function encounterArray(pokeData){
    const encounter = [];

    for (let i of pokeData){
        encounter.push(i.encounter);
    }
    return encounter;
}

export function caughtArray(pokeData){
    const caught = [];

    for (let i of pokeData){
        caught.push(i.caught);
    }
    return caught;
}