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

const audio = document.getElementById("myAudio");

audio.volume = 1;
audio.play();

// Function to fade out the audio
function fadeOutAudio(audio, duration) {
  const fadeOutInterval = 100; // Interval in ms (milliseconds)
  const fadeOutStep = 0.1 / (duration / fadeOutInterval); // How much to decrease the volume each interval

  let currentVolume = audio.volume;
  console.log(audio.volume);

  const fadeOut = setInterval(() => {
    if (currentVolume > 0) {
      currentVolume -= fadeOutStep;
      audio.volume = Math.max(currentVolume, 0); // Prevent going below 0
    } else {
      clearInterval(fadeOut); // Stop once the volume reaches 0
      audio.pause(); // Optionally stop the audio after fading out
      console.log("music stop");
    }
  }, fadeOutInterval);
}

// Call the fade out function after 5 seconds (5000 ms)
setTimeout(() => fadeOutAudio(audio, 10000), 15000); // Fade out after 5 seconds, over 2 seconds
