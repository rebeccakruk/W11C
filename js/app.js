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





let pkm1 = {
    firstName: `Totadile`,
    healthPoints: 100,
    attack: [`punch`, 'kick', `slap`, `tackle`],
    imageUrl: "https://64.media.tumblr.com/f4ca60473857e55041faf8fdb6a057f4/7347a361139ff768-48/s500x750/b15fe2bc3c1aa3ad43cf6345b2b1755953906ba5.png"
}
let pkm2 = {
    firstName: `Cyndaquil`,
    healthPoints: 100,
    attack: [`punch`, `kick`, `slap`, `tackle`],
    imageUrl: `https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-black-and-white/4/40/Pokemans_155.gif" alt="Cyndaquil`
}
let pkm3 = {
    firstName : `Chikorita`,
    healthPoints : 100,
    attack : [`punch`, `kick`, `slap`, `tackle`],
    imageUrl : `https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/57cfa540-b68e-4df7-97f0-ea9cb50dc02f/dcmh7w2-6daeeba4-4ba3-45e4-bfca-a6d3592b7673.png" alt="Chikorita`
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
