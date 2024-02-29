# smooth-scrolling-for-conrad
A little script I made for my friend Conrad so an image will move upon scrolling.

## Usage

Just add `<script>` tags around it. You'll be fine. Like this: 

```bash
<script>document.addEventListener('DOMContentLoaded', function () {
  const image = document.querySelector('.scroll-image');

  window.addEventListener('scroll', function() {
    let scrolledHeight = window.pageYOffset;
    const rate = scrolledHeight * 0.5; // you can adjust this conrad
    image.style.transform = `translate(-50%, -50%) translateY(${rate}px)`;
  });
});
</script>
