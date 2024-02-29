document.addEventListener('DOMContentLoaded', function () {
  const image = document.querySelector('.scroll-image');

  window.addEventListener('scroll', function() {
    let scrolledHeight = window.pageYOffset;
    const rate = scrolledHeight * 0.5; // conrad you can adjust this
    image.style.transform = `translate(-50%, -50%) translateY(${rate}px)`;
  });
});
