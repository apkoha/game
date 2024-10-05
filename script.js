const mainContainer = document.querySelector(".main__container");
const cards = document.querySelectorAll(".game__card");
const cardsInner = document.querySelectorAll(".card__inner");

const reverseCard = () => {
  const target = event.target.parentElement;
  const card = target.parentElement;
  target.classList.add("card__inner-active");
  card.classList.add("active");

  // console.log('event.target: ', event.target.parentElement.parentElement);
  for (let i = 0; i < cards.length; i++) {
    // closeCard();
    const dataset = cards[i].dataset.color;
    const target = event.target.parentElement.parentElement;
    const targetColor = event.target.parentElement.parentElement.dataset.color;

    // если карточка имеет класс active и её дата-атрибут совпадает с дата атрибутом ивентТаргета,
    // то присвоить карточке и card__inner класс open
    // if (cards[i].closest(".active") && dataset === targetColor) {
    //   cards[i].classList.add("open");
    //   target.classList.add("open");
    //   // cards[i].classList.remove("active");
    //   // target.classList.remove("active");
    //   // reverseCard();
    //   // closeCard();
    //   console.log(111);
    // }
  }
};

// const reverseCard = () => {
//   const target = event.target.parentElement;
//   const card = target.parentElement;
//   target.classList.add("card__inner-active");
//   card.classList.add("active");
// };

const closeCard = () => {
  const target = event.target.parentElement.parentElement;
  console.log('target: ', target);
  const targetColor = event.target.parentElement.parentElement.dataset.color;
  console.log('targetColor: ', targetColor);
  // if () {
  //   cards.forEach((item) => item.classList.remove("active"));
  //   cardsInner.forEach((item) => item.classList.remove("active"));
  // }
  // for (let i = 0; i < cards.length; i++) {
  //   console.log(222);
  //   cards[i].classList.remove("active");
  // }
}

mainContainer.addEventListener("click", reverseCard);
mainContainer.addEventListener("click", closeCard);