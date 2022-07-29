function startGame(){
    let buttonPet = document.getElementById("button-pet");
    buttonPet.addEventListener("click", choosePet);
    let buttonFire = document.getElementById("button-fire");
    let buttonWater = document.getElementById("button-water");
    let buttonEarth = document.getElementById("button-earth");
    let buttonReset = document.getElementById("button-reset");
}

function choosePet(){
    let hipodoge = document.getElementById("Hipodoge");
    let Capipepo = document.getElementById("Capipepo");
    let Ratigueya = document.getElementById("Ratigueya");
    let Langostelvis = document.getElementById("Langostelvis");
    let Tucapalma = document.getElementById("Tucapalma");
    let Pydos = document.getElementById("Pydos");
    let ownPet = document.getElementById("own-pet");
    if (hipodoge.checked) {
        ownPet.innerHTML = "Hipodoge";
    } else if (Capipepo.checked) {
        ownPet.innerHTML = "Capipepo";
    } else if (Ratigueya.checked) {
        ownPet.innerHTML = "Ratigueya";
    } else if (Langostelvis.checked) {
        ownPet.innerHTML = "Langostelvis";
    } else if (Tucapalma.checked) {
        ownPet.innerHTML = "Pydos";
    } else if (Pydos.checked) {
        ownPet.innerHTML = "Hipodoge";
    }else{
        alert("No choice, please choose one pet")
    }
    function random(min, max){
        return Math.floor(Math.random() * (max-min+1)+min)
    }
    let enemy = random(1, 6);
    let enemyPet = document.getElementById("enemy-pet");
    if (enemy == 1) {
        enemyPet.innerHTML = "Hipodoge";
    } else if (enemy == 2) {
        enemyPet.innerHTML = "Capipepo";
    } else if (enemy == 3) {
        enemyPet.innerHTML = "Ratigueya";
    } else if (enemy == 4) {
        enemyPet.innerHTML = "Langostelvis";
    } else if (enemy == 5) {
        enemyPet.innerHTML = "Pydos";
    } else if (enemy == 6) {
        enemyPet.innerHTML = "Hipodoge";
    }
}

window.addEventListener("load", startGame)