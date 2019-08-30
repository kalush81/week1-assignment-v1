// Write your JS here
const hero = {
    name: 'Superman',
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: 'laser',
        damage: 2
    }    
};

function rest(obj) {
    if (obj.health < 10) {
        obj.health = 10
    } else {
        alert('it has 10 ')
    }
    return obj;
};

function pickUpItem(obj, weapon) {
    obj.inventory.push(weapon);
}

function equipWeapon(obj) {
    if (obj.inventory.length > 0) {
        obj.weapon = obj.inventory[0];
    }
}
//hero img end reseting health funcionality
const heroImg = document.createElement('img');
heroImg.id = 'inn';
document.body.appendChild(heroImg);
heroImg.innerText = hero.name;
heroImg.style.width = '100px';
heroImg.style.height = '100px';
heroImg.style.border = '2px solid green';

heroImg.onclick =  function() {
    hero.health = 10;
}

//weapon img and picking new weapon functionality
const weaponImg = document.createElement('img');
weaponImg.id = 'dagger';
document.body.appendChild(weaponImg);
weaponImg.style.border = '2px solid green';
weaponImg.style.width = '100px';
weaponImg.style.height = '100px';

weaponImg.onclick = function() {
    pickUpItem(hero, {'type': 'dagger', 'damage': 2})
}

//bag img and filling bag with first weapon found in inventory
const bagImg = document.createElement('img');
bagImg.id = 'bag';
document.body.appendChild(bagImg);
bagImg.style.border = '2px solid green';
bagImg.style.width = '100px';
bagImg.style.height = '100px';

bagImg.onclick = function() {
    hero.weapon = hero.inventory[0];
}