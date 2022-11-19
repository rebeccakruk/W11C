function pokemonSelector(event){
    let parent = event.target.parentElement;
    if(parent.id == `pkmChoice1`){
        let pkmJSON = JSON.stringify(pkm1);
        Cookies.set(`pkmSelection`, pkmJSON)
    } else if (parent.id == `pkmChoice2`){
        let pkmJSON = JSON.stringify(pkm2);
        Cookies.set(`pkmSelection`, pkmJSON)
    } else if (parent.id == `pkmChoice3`){
        let pkmJSON = JSON.stringify(pkm3);
        Cookies.set(`pkmSelection`, pkmJSON)
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
    imageUrl: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAF3X-rWD55IST7lDhqco6jxolCe9deiDihg&usqp=CAU`,
    attack : [
        {
            name : "water",
            health : battleNumbers (5, 10)
        },
        {
            name : "spray",
            health : battleNumbers (10, 20)
        },
        {
            name : "punch",
            health : battleNumbers (10, 15)
        },
        {
            name : "tackle",
            health : battleNumbers (10, 20)
        },
    ]
}
let pkm2 = {
    firstName: `Cyndaquil`,
    healthPoints: 100,
    imageUrl: "https://static.pokemonpets.com/images/monsters-images-800-800/155-Cyndaquil.webp",
    attack : [
        {
            name : "fire",
            health : battleNumbers (5, 10)
        },
        {
            name : "roast",
            health : battleNumbers (10, 20)
        },
        {
            name : "punch",
            health : battleNumbers (10, 15)
        },
        {
            name : "tackle",
            health : battleNumbers (10, 20)
        },
    ]
}
let pkm3 = {
    firstName : `Chikorita`,
    healthPoints : 100,
    imageUrl : `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgTxVhEk3spQL61CJKSGE40nutrb7MfqH4EQ&usqp=CAU`,
    attack : [
        {
            name : "Grass Blade",
            health : battleNumbers (5, 10)
        },
        {
            name : "Vine Whip",
            health : battleNumbers (10, 20)
        },
        {
            name : "punch",
            health : battleNumbers (10, 15)
        },
        {
            name : "tackle",
            health : battleNumbers (10, 20)
        },
    ]
}



let pokemon1 = document.getElementById(`pkmChoice1`);
pokemon1.insertAdjacentHTML(`afterbegin`, `<img src="${pkm1.imageUrl}" alt="Totadile>`);
pokemon1.insertAdjacentHTML(`afterbegin`, `<p>Name: ${pkm1.firstName}</p>`);
pokemon1.insertAdjacentHTML(`afterbegin`, `<p>Health:${pkm1.healthPoints}</p>`);


let pokemon2 = document.getElementById(`pkmChoice2`);
pokemon2.insertAdjacentHTML(`afterbegin`, `<img src="${pkm2.imageUrl}" alt="Cyndaquil">`);
pokemon2.insertAdjacentHTML(`afterbegin`, `<p>Name: ${pkm2.firstName}</p>`);
pokemon2.insertAdjacentHTML(`afterbegin`, `<p>Health: ${pkm2.healthPoints}</p>`);


let pokemon3 = document.getElementById(`pkmChoice3`);
pokemon3.insertAdjacentHTML(`afterbegin`, `<img src="${pkm3.imageUrl}" alt="Chikorita">`);
pokemon3.insertAdjacentHTML(`afterbegin`, `<p>Name: ${pkm3.firstName}</p>`);
pokemon3.insertAdjacentHTML(`afterbegin`, `<p>Health: ${pkm3.healthPoints}</p>`);

let selection = []
pokemon1.querySelector(`button`).addEventListener(`click`, pokemonSelector);
pokemon2.querySelector(`button`).addEventListener(`click`, pokemonSelector);
pokemon3.querySelector(`button`).addEventListener(`click`, pokemonSelector);

let Pkm1Json = JSON.stringify(pkm1);
cookies.set(`pkm1`, enemyJson);

let Pkm2Json = JSON.stringify(pkm2);
cookies.set(`pkm2`, enemyJson);

let Pkm3Json = JSON.stringify(pkm3);
cookies.set(`pkm3`, enemyJson);