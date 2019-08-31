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
//assign css class to all img's elements
const imgs = document.querySelectorAll('img');
imgs.forEach(img => img.classList.add('imgCss'));

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
const heroImg = document.querySelector('#inn');
heroImg.onclick =  function() {
    hero.health = 10;
    displayStats(hero.health);
}
//enemy, when clicked, the hero's health scores goes down
const enemy = document.querySelector('#enemy');
enemy.onclick = function() {
    hero.health -= 1;
    displayStats();
}

const weaponImg = document.querySelector('#dagger');
weaponImg.onclick = function(e) {
    pickUpItem(hero, {'type': 'dagger', 'damage': 2});
    displayStats();
    weaponImg.style.display = 'none';

    //clicking on bag is possible only if a weapon is clicked
    bagImg.onclick = function() {
        hero.weapon = hero.inventory[0];
        displayStats();
    }
}

const bagImg = document.querySelector('#bag');

// const stats = document.querySelector('ul');

function displayStats() {
    const lis = document.querySelectorAll('li');
    lis[0].innerHTML = "name: "+hero.name;
    lis[1].innerHTML = 'healt: '+hero.health;
    lis[2].innerHTML = "weapon damage: " + hero.weapon.damage;
    lis[3].innerHTML = 'weapon type : '+ hero.weapon.type; 
}

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    const newName = document.querySelector('form input');
    if (newName.value == '') {
        alert('name can\'t be empty')
    } else {
        hero.name = newName.value;
        newName.value = '';
        displayStats();
    }
})
displayStats();