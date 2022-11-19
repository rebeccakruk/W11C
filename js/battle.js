function battleNumbers (max, min){
    // generate a random number
    if(min === undefined || min === '' || min === null){
        min = 0;
    }
    return Math.floor(Math.random() * (max - min) + min);

}

let selectionJson = Cookies.get(`pkmChoice`);
let selection = JSON.parse(selectionJson);


function makeAttack(event){
    let damage = battleNumbers(selection.attack[0].maxDamage, selection.attack[0].minDamage);
    let hit = (enemy.health - damage);
    console.log(hit);
//     Cookies.set(enemyHealth);
//     if(enemyHealth - damage)
//     damage = (damage - enemy.health)
//  console.log(damage);
}

//Attempts to set timeouts for enemy attack
function makeEnemyAttack(){
    let enemyDamage = battleNumbers(enemy.attack[0].maxDamage, selection.attack[0].minDamage);
    enemyDamage - playerHealth
} 
//trying to make it so the enemy attacks after one of the attack buttons in clicked
function enemyAttack(){
    document.getElementById(`attackButtons`)
} 
//Attempting to make it so that our buttons are locked until enemy attack
var attackdelay = document.getElementById(`attackButtons`)
attackdelay.onclick = function() {
    attackdelay.disabled = true;
    setTimeout(function() {
        attackdelay.disabled = false;
    }, 2000);
}


let enemy = {
    firstName : `Mark`,
    health : 100,
    // imageUrl: ""
    attack : [
        {
            name : "Teach",
            minDamage: 0,
            maxDamage: 100
        },
        {
            name : "Code",
            minDamage: 0,
            maxDamage: 100
        },
        {
            name : "Tangent",
            minDamage: 0,
            maxDamage: 100
        },
        {
            name : "Text Message",
            minDamage: 0,
            maxDamage: 100
        },
    ],
    // imageUrl : `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRah_GffKal78XJXMGogQ9k2m-crNep-S6lsw&usqp=CAU`
}

let playerHealth = selection.healthPoints;

document.getElementById(`attack1`).addEventListener(`click`, makeAttack);
document.getElementById(`attack2`).addEventListener(`click`, makeAttack);
document.getElementById(`attack3`).addEventListener(`click`, makeAttack);
document.getElementById(`attack4`).addEventListener(`click`, makeAttack);
document.getElementById(`attackButtons`).addEventListener(`click`, enemyAttack);

document.body.insertAdjacentHTML(`afterend`, `<img src="${selection.imageUrl}">`);
document.body.insertAdjacentHTML(`afterend`, `<p>${selection.firstName}</p>`);
document.body.insertAdjacentHTML(`afterend`, `<p>Health:${selection.healthPoints}</p>`);
document.body.insertAdjacentHTML(`afterbegin`, `<button id="attack1">${selection.attack[0].name}</button>`);
document.body.insertAdjacentHTML(`afterbegin`, `<button id="attack2">${selection.attack[1].name}</button>`);
document.body.insertAdjacentHTML(`afterbegin`, `<button id="attack3">${selection.attack[2].name}</button>`);
document.body.insertAdjacentHTML(`afterbegin`, `<button id="attack4">${selection.attack[3].name}</button>`);
document.body.insertAdjacentHTML(`afterend`, `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1PAZwO-jR5Z842vckeoRajOPPWhq38asBoA&usqp=CAU"`);
// enemy.insertAdjacentHTML(`afterend`,`<p>${[enemy][health]}</p>`);

console.log(selection.attack[0].minDamage);
console.log(selection.attack[0].maxDamage);



let computerCurrentHealth = enemy.health;
console.log(computerCurrentHealth);


