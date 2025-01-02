let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

let TextslideIndex = 1;
showTextSlides(TextslideIndex);

function plusTextSlides(n) {
  showTextSlides((TextslideIndex += n));
}

// function currentTextSlide(n) {
//   showTextSlides((TextslideIndex = n));
// }

function showTextSlides(n) {
  let x;
  let Textslides = document.getElementsByClassName("myTextSlides");
  if (n > Textslides.length) {
    TextslideIndex = 1;
  }
  if (n < 1) {
    TextslideIndex = Textslides.length;
  }
  for (x = 0; x < Textslides.length; x++) {
    Textslides[x].style.display = "none";
  }
  Textslides[TextslideIndex - 1].style.display = "block";
}
