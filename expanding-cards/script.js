var cards = document.querySelectorAll('.card');
cards.forEach(function(card) {
  card.addEventListener('click', function() {
    var isCardActive = this.classList.contains('cardActive');
    
    cards.forEach(function(c) {
      c.classList.remove('cardActive');
    });

    if (!isCardActive) {
      this.classList.add('cardActive');
    }
  });
});
