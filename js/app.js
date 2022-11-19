// this will make the Pokemon selected appear on the battle page
function pokemonSelector(event){
    let parent = event.target.parentElement;
    if(parent.id == `pkmChoice1`){
        let pkmJson = JSON.stringify(pkm1);
        Cookies.set(`pkmChoice`, pkmJson)
    } else if (parent.id == `pkmChoice2`){
        let pkmJson = JSON.stringify(pkm2);
        Cookies.set(`pkmChoice`, pkmJson)
    } else if (parent.id == `pkmChoice3`){
        let pkmJson = JSON.stringify(pkm3);
        Cookies.set(`pkmChoice`, pkmJson)
    }
}


function battleNumbers (max, min){
    // generate a random number
    if(min === undefined || min === '' || min === null){
        min = 0;
    }
    return Math.floor(Math.random() * (max - min) + min);
}


let pkm1 = {
    firstName: `Totadile`,
    healthPoints: 100,
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/158.png",
    attack : [
        {
            name : "water",
            minDamage: 0,
            maxDamage: 100
        },
        {
            name : "spray",
            minDamage: 0,
            maxDamage: 100
        },
        {
            name : "punch",
            minDamage: 0,
            maxDamage: 100
        },
        {
            name : "tackle",
            minDamage: 0,
            maxDamage: 100
        },
    ]
}
let pkm2 = {
    firstName: `Cyndaquil`,
    healthPoints: 100,
    imageUrl: "https://static.pokemonpets.com/images/monsters-images-800-800/155-Cyndaquil.webp",
    attack : [
        {
            name: "fire",
            minDamage: 0,
            maxDamage: 100
        },
        {
            name : "roast",
            minDamage: 0,
            maxDamage: 100
        },
        {
            name : "punch",
            minDamage: 0,
            maxDamage: 100
        },
        {
            name : "tackle",
            minDamage: 0,
            maxDamage: 100
        },
    ]
}
let pkm3 = {
    firstName : `Chikorita`,
    healthPoints : 100,
    imageUrl : `https://assets.pokemon.com/assets/cms2/img/pokedex/full/152.png`,
    attack : [
        {
            name: "Vine Slap",
            minDamage: 0,
            maxDamage: 100
        },
        {
            name : "Kick",
            minDamage: 0,
            maxDamage: 100
        },
        {
            name : "Throat Punch",
            minDamage: 0,
            maxDamage: 100
        },
        {
            name : "Wrestle",
            minDamage: 0,
            maxDamage: 100
        },
    ]
}

let pokemon1 = document.getElementById(`pkmChoice1`);
pokemon1.insertAdjacentHTML(`afterbegin`, `<p>Health: ${pkm1.healthPoints}</p>`);
pokemon1.insertAdjacentHTML(`afterbegin`, `<p>Name: ${pkm1.firstName}</p>`);
pokemon1.insertAdjacentHTML(`afterbegin`, `<img src="${pkm1.imageUrl}" alt="Todotile">`);


// pokemon1.insertAdjacentHTML(`afterbegins`, `<button>${pkm1.attack.name[]}</button>`);

console.log(pkm2.attack[0]); 


let pkm1Json = JSON.stringify(pkm1);
Cookies.set(`pkmChoice`, pkm1Json)

let pokemon2 = document.getElementById(`pkmChoice2`);
pokemon2.insertAdjacentHTML(`afterbegin`, `<p>Health: ${pkm2.healthPoints}</p>`);
pokemon2.insertAdjacentHTML(`afterbegin`, `<p>Name: ${pkm2.firstName}</p>`);
pokemon2.insertAdjacentHTML(`afterbegin`, `<img src="${pkm2.imageUrl}" alt="Cyndaquil">`);


let pokemon3 = document.getElementById(`pkmChoice3`);
pokemon3.insertAdjacentHTML(`afterbegin`, `<p>Health: ${pkm3.healthPoints}</p>`);
pokemon3.insertAdjacentHTML(`afterbegin`, `<p>Name: ${pkm3.firstName}</p>`);
pokemon3.insertAdjacentHTML(`afterbegin`, `<img src="${pkm3.imageUrl}" alt="Chikorita">`);

let selection = []
pokemon1.querySelector(`a`).addEventListener(`click`, pokemonSelector);
pokemon2.querySelector(`a`).addEventListener(`click`, pokemonSelector);
pokemon3.querySelector(`a`).addEventListener(`click`, pokemonSelector);
