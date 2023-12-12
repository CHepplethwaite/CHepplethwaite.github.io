
document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showSlide(index) {
      if (index < 0 || index >= slides.length) {
        return;
      }
      const offset = -index * 100;
      slides.forEach((slide) => {
        slide.style.transform = `translateX(${offset}%)`;
      });
      currentSlide = index;
    }

    function navigateSlide(event) {
      if (event.key === 'ArrowRight') {
        showSlide(currentSlide + 1);
      } else if (event.key === 'ArrowLeft') {
        showSlide(currentSlide - 1);
      }
    }

    document.addEventListener('keydown', navigateSlide);

    const links = document.querySelectorAll('.nav-link');
    links.forEach((link) => {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        const targetSlideId = this.getAttribute('href').substring(1);
        const targetSlide = document.getElementById(targetSlideId);
        const index = Array.from(slides).indexOf(targetSlide);
        showSlide(index);
      });
    });
  });