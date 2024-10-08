import CARDS from "./CARDS.json" with { type: "json" };

const mainContainer = document.querySelector(".main__container");
let datasetArr = [];
let counter = 0;
let endGameCounter = 0;
let GameMoveCounter = 0;

const doubleCardsArr = CARDS.concat(CARDS);

const startGame = () => {
  const cards = document.querySelectorAll(".game__card");
  const targetDataset = event.target.parentElement.parentElement.dataset.color;
  const cardContainer = event.target.parentElement.parentElement;

  counter++;
  GameMoveCounter++;
  reverseCard();
  cardContainer.removeEventListener("click", startGame);
  cardContainer.style.cursor = "auto";
  
  for (let i = 0; i < cards.length; i++) {
    if (cards[i].closest(".active") && targetDataset === datasetArr[datasetArr.length - 2]) {
      cards[i].classList.add("open");
      cards[i].children[0].classList.add("card__inner-open");
      cards[i].classList.remove("active");
      cards[i].children[0].classList.remove("card__inner-active");
      cards[i].removeEventListener("click", startGame);
      cards[i].style.cursor = "auto";
      counter = 0;
      endGameCounter++;
      console.log(111);
    }
    
    if (targetDataset != datasetArr[datasetArr.length - 2] && counter != 1) {
      setTimeout(closeCard, 1000);
      datasetArr = [];
      counter = 0;
    };
  }

  if (endGameCounter === 20) setTimeout(endGame, 600);
  
};

const reverseCard = () => {
  const parentOfTarget = event.target.parentElement;
  const cardOfTarget = parentOfTarget.parentElement;
  const cardDataset = cardOfTarget.dataset.color;
  
  datasetArr.push(cardDataset);
  parentOfTarget.classList.add("card__inner-active");
  cardOfTarget.classList.add("active");
};

const closeCard = () => {
  const cards = document.querySelectorAll(".game__card");
  const cardsInner = document.querySelectorAll(".card__inner");

  cardsInner.forEach((item) => item.classList.remove("card__inner-active"));
  cards.forEach(function(item) {
    item.classList.remove("active");
    if (!item.closest("open")) {
      item.addEventListener("click", startGame);
    }    
  });
};

const endGame = () => {
  alert("Ты выиграл! " + "Количесто ходов: " + (GameMoveCounter / 2));
  mainContainer.innerHTML = "";
  initGame();
};

const createCard = (cardData) => {
  const cardContainer = document.createElement("div");
  cardContainer.dataset.color = `${cardData.color}`;
  cardContainer.className = "game__card";
  cardContainer.innerHTML = `
    <div class="card__inner">
      <div class="card__front">
        <img class="front__img" src="" alt="">
      </div>
      <div class="card__back">
        <img class="back__img" src="${cardData.urlToImages}" alt="" width="120" height="100">
      </div>
    </div>
  `
  cardContainer.addEventListener("click", startGame);
  mainContainer.append(cardContainer);
}

const getCardsData = () => {
  for (const cardData of doubleCardsArr) {
    createCard(cardData);
  }
};

const initGame = () => {
  doubleCardsArr.sort(() => Math.random() - 0.5);
  getCardsData(doubleCardsArr);
};

initGame();