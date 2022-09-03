let playerAttack;
let enemyAttack;

function startGame() {
  let fireSpan = document.getElementById("span-fire");
  fireSpan.style.display = "none";
  let spanWater = document.getElementById("span-water");
  spanWater.style.display = "none";
  let spanEarth = document.getElementById("span-earth");
  spanEarth.style.display = "none";
  let buttonPet = document.getElementById("button-pet");
  buttonPet.addEventListener("click", choosePet);
  let buttonFire = document.getElementById("button-fire");
  buttonFire.addEventListener("click", () => attack(fireSpan));
  let buttonWater = document.getElementById("button-water");
  buttonWater.addEventListener("click", () => attack(spanWater));
  let buttonEarth = document.getElementById("button-earth");
  buttonEarth.addEventListener("click", () => attack(spanEarth));
  let buttonReset = document.getElementById("button-reset");
  buttonReset.addEventListener("click", () => resetData());
  let chooseAttackSection = document.getElementById("choose-attack");
  // chooseAttackSection.style.display = "none";
  let messages = document.getElementById("messages");
  messages.style.display = "none";
  let hipodoge = document.getElementById("hipodoge-label");
  hipodoge.addEventListener("click", () => sound("audio-hipodoge"));
  let capipepo = document.getElementById("capipepo-label");
  capipepo.addEventListener("click", () => sound("audio-capipepo"));
  let ratigueya = document.getElementById("ratigueya-label");
  ratigueya.addEventListener("click", () => sound("audio-ratigueya"));
  let langostelvis = document.getElementById("langostelvis-label");
  langostelvis.addEventListener("click", () => sound("audio-langostelvis"));
  let tucapalma = document.getElementById("tucapalma-label");
  tucapalma.addEventListener("click", () => sound("audio-tucapalma"));
  let pydos = document.getElementById("pydos-label");
  pydos.addEventListener("click", () => sound("audio-pydos"));
}
function choosePet() {
  let hipodoge = document.getElementById("Hipodoge");
  let Capipepo = document.getElementById("Capipepo");
  let Ratigueya = document.getElementById("Ratigueya");
  let Langostelvis = document.getElementById("Langostelvis");
  let Tucapalma = document.getElementById("Tucapalma");
  let Pydos = document.getElementById("Pydos");
  let ownPet = document.getElementById("own-pet");
  let AttackSection = document.getElementById("choose-attack");
  let chooseSection = document.getElementById("choose-pet");
  if (hipodoge.checked) {
    ownPet.innerHTML = "Hipodoge";
    AttackSection.style.display = "flex";
    chooseSection.style.display = "none";
  } else if (Capipepo.checked) {
    ownPet.innerHTML = "Capipepo";
    AttackSection.style.display = "flex";
    chooseSection.style.display = "none";
  } else if (Ratigueya.checked) {
    ownPet.innerHTML = "Ratigueya";
    AttackSection.style.display = "flex";
    chooseSection.style.display = "none";
  } else if (Langostelvis.checked) {
    ownPet.innerHTML = "Langostelvis";
    AttackSection.style.display = "flex";
    chooseSection.style.display = "none";
  } else if (Tucapalma.checked) {
    ownPet.innerHTML = "Tucapalma";
    AttackSection.style.display = "flex";
    chooseSection.style.display = "none";
  } else if (Pydos.checked) {
    ownPet.innerHTML = "Pydos";
    AttackSection.style.display = "flex";
    chooseSection.style.display = "none";
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
  let enemyLive = document.getElementById("enemy-lives");
  let petLive = document.getElementById("pet-lives");
  let enemyLives = enemyLive.textContent;
  let petLives = petLive.textContent;
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
      enemyLives--;
    } else if (playerAttack == enemyAttack) {
      result = "You Draw";
      draws = 1 + draws;
      localStorage.setItem("draw", draws);
    } else {
      result = "You Lose";
      loses = 1 + loses;
      localStorage.setItem("lose", loses);
      petLives--;
    }
    let newResult = `Your ${myPet} attacked with ${playerAttack} and the enemy chose ${enemyPet} and counterattack with ${enemyAttack}, ${result}`;
    let mensajes = document.getElementById("live-attack");
    mensajes.innerHTML = newResult;
    let accumulate = document.getElementById("accumulate");
    accumulate.innerHTML = `You won ${wins} times lost ${loses} times and draw ${draws} times`;
    enemyLive.innerHTML = enemyLives;
    petLive.innerHTML = petLives;
    showMessages(wins, loses, draws);
    endOfGame(petLives, enemyLives);
  }
  choosePet();
}

function resetData(){
  localStorage.setItem("win", 0);
  localStorage.setItem("draw", 0);
  localStorage.setItem("lose", 0);
  let wins = Number(localStorage.getItem("win"));
  let loses = Number(localStorage.getItem("lose"));
  let draws = Number(localStorage.getItem("draw"));
  let accumulate = document.getElementById("accumulate");
  accumulate.innerHTML = `You won ${wins} times lost ${loses} times and draw ${draws} times`;
  window.location.reload();
}

function endOfGame(myself, enemy){
  let buttonFire = document.getElementById("button-fire");
  let buttonWater = document.getElementById("button-water");
  let buttonEarth = document.getElementById("button-earth");
  let buttonReset = document.getElementById("button-reset");
  if(enemy == 0){
    buttonReset.style.display = "block"
    buttonFire.disabled = true;
    buttonWater.disabled = true;
    buttonEarth.disabled = true;
    setTimeout(function message() {
      alert("You win 🥇🥳, tab enter or click on accept to restart game");
      resetData();
    }, 5800);
  }else if(myself == 0){
    buttonReset.style.display = "block";
    buttonFire.disabled = true;
    buttonWater.disabled = true;
    buttonEarth.disabled = true;
    setTimeout(function message(){
      alert("So Sorry, You Lost 😵😶‍🌫️, tab enter or click on accept to restart game");
      resetData();}, 5800);
  }
}
function showMessages(w, l, d) {
  if (w != 0 || l != 0 || d != 0) {
    let messages = document.getElementById("messages");
    messages.style.display = "flex";
  }
}
function sound(id){
  let audioElement = document.getElementById(id);
  audioElement.play();
  background();
}
function background() {
  let buttonPet = document.getElementById("button-pet");
  buttonPet.style.backgroundColor = "#FF0000";
}
window.addEventListener("load", startGame);
