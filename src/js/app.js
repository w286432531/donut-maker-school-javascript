const infoDiv = document.querySelector(".information");
const addDonut = document.querySelector(".addDonut");
const buyAutoclicker = document.querySelector(".buyAutoClicker");
const buyClickerMultiplier = document.querySelector(".buyClickerMultiplier");
const showDonutNums = document.querySelector(".showDonutNums");
const showAutoClickers = document.querySelector(".showAutoClicker");
const showClickerMultiplier = document.querySelector(".showClickerMultiplier");
const autoClickerCost = document.querySelector(".autoClickerCost");
const donutMultiplierCost = document.querySelector(".multiplierCost");
const donutsPerClick = document.querySelector(".donutsPerClick");
const resetButton = document.querySelector(".resetButton");
const soundButton = document.querySelector(".sound");
const makeSound = new Audio("lib/make.wav");
const shortBonus = new Audio("lib/shortBonus.wav");
const longBonus = new Audio("lib/longBonus.wav");
const backgroundMusic = new Audio("lib/background.mp3");
let musicStatus = false;
backgroundMusic.addEventListener(
  "ended",
  function () {
    this.currentTime = 0;
    this.play();
  },
  false
);
soundButton.addEventListener('click', () => {
    if (!musicStatus){
    backgroundMusic.play();
    musicStatus = true;
    }
    else {
        backgroundMusic.pause();
        musicStatus = false;
    }
});

document.querySelector(".aboutCompany").addEventListener('click', () => {
   infoDiv.innerHTML =
     "Information about the company. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet beatae ea sint nisi dolore placeat quidem, amet maxime similique provident, neque architecto eligendi dolores. Debitis in pariatur maxime inventore consectetur."; 
});
document.querySelector(".aboutGame").addEventListener("click", () => {
  infoDiv.innerHTML =
    "Information about the game. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet beatae ea sint nisi dolore placeat quidem, amet maxime similique provident, neque architecto eligendi dolores. Debitis in pariatur maxime inventore consectetur.";
});
document.querySelector(".contact").addEventListener("click", () => {
  infoDiv.innerHTML =
    "Contact information. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet beatae ea sint nisi dolore placeat quidem, amet maxime similique provident, neque architecto eligendi dolores. Debitis in pariatur maxime inventore consectetur.";
});

let shop = new Donut();

function gameStart() {
  shop.init();
  showDonutNums.innerHTML = shop.roundDonutNums();
  donutsPerClick.innerHTML = Math.round(shop.donutsPerClick * 100) / 100;
  showAutoClickers.innerHTML = shop.autoClickerCount;
  autoClickerCost.innerHTML = Math.round(shop.autoClickerCost * 100) / 100;
  showClickerMultiplier.innerHTML =
    Math.round(shop.donutMultiplierCount * 100) / 100;
  donutMultiplierCost.innerHTML =
    Math.round(shop.donutMultiplierCost * 100) / 100;
}

gameStart();
function checkButtons() {
  if (shop.donutNums >= shop.autoClickerCost) {
    buyAutoclicker.removeAttribute("disabled");
  } else {
    buyAutoclicker.setAttribute("disabled", "");
  }
  if (shop.donutNums >= shop.donutMultiplierCost) {
    buyClickerMultiplier.removeAttribute("disabled");
  } else {
    buyClickerMultiplier.setAttribute("disabled", "");
  }
}

function updateDonut() {
  setInterval(() => {
    showDonutNums.innerHTML = shop.roundDonutNums();
    checkButtons();
  }, 1000);
}
updateDonut();

addDonut.addEventListener("click", () => {
    makeSound.play();
  shop.addDonut();
  showDonutNums.innerHTML = shop.roundDonutNums();
  checkButtons();
});

buyAutoclicker.addEventListener("click", () => {
  shop.buyAutoclicker();
  longBonus.play();
  checkButtons();
  autoClickerCost.innerHTML = Math.round(shop.autoClickerCost * 100) / 100;
  showDonutNums.innerHTML = shop.roundDonutNums();
  shop.runAutoClicker();
  showAutoClickers.innerHTML = shop.autoClickerCount;
});

buyClickerMultiplier.addEventListener("click", () => {
  shop.buyDonutMultiplier();
  shortBonus.play();
  checkButtons();
  shop.getDonutsPerClick();
  donutsPerClick.innerHTML = Math.round(shop.donutsPerClick * 100) / 100;
  donutMultiplierCost.innerHTML =
    Math.round(shop.donutMultiplierCost * 100) / 100;
  showDonutNums.innerHTML = shop.roundDonutNums();
  showClickerMultiplier.innerHTML = shop.donutMultiplierCount;
});

resetButton.addEventListener("click", gameStart);
