var card, cardInner;

window.addEventListener('load', () => {
    card = document.getElementById('flip-card');
    window.addEventListener('resize', resizeCard);
    window.addEventListener('onorientationchange', resizeCard);
    resizeCard()

    cardInner = document.getElementById('flip-card-inner');
    document.getElementById('flip-card').addEventListener('click', toggleCard);
});

function resizeCard() {
    var cardWidth = getWidth()/2;
    var cardHeight = cardWidth*0.715;

    if(cardHeight>getHeight()) {
        cardHeight = getHeight();
        cardWidth = cardHeight/0.715;
    }

    card.style.width = `${cardWidth}px`;
    card.style.height = `${cardHeight}px`;
}

function toggleCard(e) {
    cardInner.classList.toggle('flipped');
    e.preventDefault();
}

function getWidth() {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    );
  }

function getHeight() {
    return Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.documentElement.clientHeight
    );
}