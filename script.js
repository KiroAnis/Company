const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

  const items = document.querySelectorAll('.carousel-item');
  const indicators = document.querySelectorAll('.carousel-indicators button');
  let current = 0;

  function showSlide(index) {
    items.forEach((item, i) => {
      item.classList.remove('active');
      indicators[i].classList.remove('active');
    });
    items[index].classList.add('active');
    indicators[index].classList.add('active');
    current = index;
  }

  document.querySelector('.carousel-control.next').addEventListener('click', () => {
    const nextIndex = (current + 1) % items.length;
    showSlide(nextIndex);
  });

  document.querySelector('.carousel-control.prev').addEventListener('click', () => {
    const prevIndex = (current - 1 + items.length) % items.length;
    showSlide(prevIndex);
  });

  indicators.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      showSlide(index);
    });
  });

  const navLinksList = document.querySelectorAll('.nav-links a');

navLinksList.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
  });
});

  