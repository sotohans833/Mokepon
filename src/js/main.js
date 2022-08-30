let playerAttack;
let enemyAttack;

function startGame() {
  let buttonPet = document.getElementById("button-pet");
  buttonPet.addEventListener("click", choosePet);
  let buttonFire = document.getElementById("button-fire");
  buttonFire.addEventListener("click", () => attack(buttonFire));
  let buttonWater = document.getElementById("button-water");
  buttonWater.addEventListener("click", () => attack(buttonWater));
  let buttonEarth = document.getElementById("button-earth");
  buttonEarth.addEventListener("click", () => attack(buttonEarth));
  let buttonReset = document.getElementById("button-reset");
}
window.addEventListener("load", startGame);

function choosePet() {
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
    ownPet.innerHTML = "Tucapalma";
  } else if (Pydos.checked) {
    ownPet.innerHTML = "Pydos";
  } else {
    alert("No choice, please choose one pet");
  }
  let text = ownPet.textContent;
  let enemy = random(1, 6);
  let enemyPet = document.getElementById("enemy-pet");
  if (enemy == 1 && text != "(Your choice)") {
    enemyPet.innerHTML = "Hipodoge";
  } else if (enemy == 2 && text != "(Your choice)") {
    enemyPet.innerHTML = "Capipepo";
  } else if (enemy == 3 && text != "(Your choice)") {
    enemyPet.innerHTML = "Ratigueya";
  } else if (enemy == 4 && text != "(Your choice)") {
    enemyPet.innerHTML = "Langostelvis";
  } else if (enemy == 5 && text != "(Your choice)") {
    enemyPet.innerHTML = "Pydos";
  } else if (enemy == 6 && text != "(Your choice)") {
    enemyPet.innerHTML = "Tucapalma";
  }
}
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function attack(clicked) {
  let myPetNode = document.getElementById("own-pet");
  let hisPetNode = document.getElementById("enemy-pet");
  if (myPetNode.textContent == "(Your choice)") {
    alert("No choice, please choose one pet");
  } else {
    playerAttack = clicked.textContent;
    let randomAttack = random(1, 3);
    if (randomAttack == 1) {
      enemyAttack = "Fire🔥";
    } else if (randomAttack == 2) {
      enemyAttack = "Water💦";
    } else if (randomAttack == 3) {
      enemyAttack = "Earth🌱";
    }
    let myPet = myPetNode.textContent;
    let enemyPet = hisPetNode.textContent;
    let result;
    let wins = Number(localStorage.getItem("win"));
    let loses = Number(localStorage.getItem("lose"));
    let draws = Number(localStorage.getItem("draw"));
    if (
      (playerAttack == "Fire🔥" && enemyAttack == "Earth🌱") ||
      (playerAttack == "Water💦" && enemyAttack == "Fire🔥") ||
      (playerAttack == "Earth🌱" && enemyAttack == "Water💦")
    ) {
      result = "You Win";
      wins = 1 + wins;
      localStorage.setItem("win", wins);
    } else if (playerAttack == enemyAttack) {
      result = "You Draw";
      draws = 1 + draws;
      localStorage.setItem("draw", draws);
    } else {
      result = "You Lose";
      loses = 1 + loses;
      localStorage.setItem("lose", loses);
    }
    let newResult = `Your ${myPet} attacked with ${playerAttack} and the enemy chose ${enemyPet} and counterattack with ${enemyAttack}, ${result}`;
    let mensajes = document.getElementById("mensajes");
    let newP = document.createElement("p");
    newP.innerHTML = newResult;
    mensajes.appendChild(newP);
    let accumulate = document.getElementById("accumulate");
    accumulate.innerHTML = `You won ${wins} times lost ${loses} times and draw ${draws} times`;
  }
  choosePet();
}
