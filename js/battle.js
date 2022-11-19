let selectionJson = Cookies.get(`pkmSelection`);
let selection = JSON.parse(selectionJson);

document.body.insertAdjacentHTML(`afterend`, `<img src="${selection.imageUrl}">`);
document.body.insertAdjacentHTML(`afterend`, `<p>Name: ${selection.firstName}</p>`);
document.body.insertAdjacentHTML(`afterend`, `<p>Health:${selection.healthPoints}</p>`);
// document.body.insertAdjacentHTML(`afterbegin`, `<p>Attack:${selection.attack}</p>`);
/** Variable names placeholders
attackName = ``;
Curattack{};
randomInt =
randomInt =
enemyAttack = 
characters = [],
*/

function battleNumbers (max, min){
    // generate a random number
    if(min === undefined || min === '' || min === null){
        min = 0;
    }
    return Math.floor(Math.random() * (max - min) + min);
}

// TEMPORARY CALL
// document.body.getElementById(`kick`).addEventListener(`click`, battleNumbers);

function attackHandler(event){
    let parent = event.target.parentElement;
    if(parent.id =="attack"){
    let attackJson = JSON.stringify(attack)
    Cookies.set(`attackSelection`, attackJson)
    }
}

function playerHealth(){
    
}


let enemy = {
    firstName : `Mark`,
    health : 100,
    attack : [
        {
            name : "slap",
            health : battleNumbers (5, 10)
        },
        {
            name : "kick",
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
    ],
    imageUrl : `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRah_GffKal78XJXMGogQ9k2m-crNep-S6lsw&usqp=CAU`
}


let enemyJson = JSON.stringify(enemy);
cookies.set(`enemy`, enemyJson)
