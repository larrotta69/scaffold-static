(function () {
  class Card {
    constructor($el) {
      this.name = $el.getAttribute("data-name");
      console.log("this.name -----> debug");
      console.log(this.name);
    }
  }

  const cards = document.querySelectorAll(".card");
  if (cards) {
    cards.forEach(function (card) {
      new Card(card);
    });
  }
})();
