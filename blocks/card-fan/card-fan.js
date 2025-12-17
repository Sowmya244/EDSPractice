export default function decorate(block) {
  block.classList.add('card-fan');

  function init() {
    const cards = [...block.children];

    if (cards.length < 2) {
      requestAnimationFrame(init);
      return;
    }

    let current = Math.floor(cards.length / 2);

    function update() {
      cards.forEach((card, i) => {
        card.classList.remove('active', 'prev', 'next', 'hidden');

        const diff = i - current;

        if (diff === 0) {
          card.classList.add('active');
        } else if (diff === -1) {
          card.classList.add('prev');
        } else if (diff === 1) {
          card.classList.add('next');
        } else {
          card.classList.add('hidden');
        }
      });
    }

    cards.forEach((card, index) => {
      card.addEventListener('click', () => {
        current = index;
        update();
      });
    });

    update();
  }

  init();
}
