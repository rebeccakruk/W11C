
/** Variable names placeholders
attackName = ``;
curAttack{};
randomInt =
randomInt =
enemyAttack = 
characters = [],
*/
let selectionJson = Cookies.get(`pkmSelection`);
let selection = JSON.parse(selectionJson);

pokemon1.insertAdjacentElement(`afterbegin`, `<img src="${selection.imageUrl}" alt="Totadile>`);
pokemon1.insertAdjacentElement(`afterbegin`, `<p>Name: ${selection.firstName}</p>`);
pokemon1.insertAdjacentElement(`afterbegin`, `<p>Health:${selection.healthPoints}</p>`);

let enemy = {
    firstName : `Mark`,
    healthPoints : 100,
    attack : [`punch`, `kick`, `slap`, `tackle`],
    imageUrl : `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRah_GffKal78XJXMGogQ9k2m-crNep-S6lsw&usqp=CAU`
}

/**function Battlenumbers(max, min){
    // generate a random number
    if(min === undefined || min === '' || min === null){
        min = 0;
    }
    return Math.floor(Math.random() * (max - min) + min);
} */