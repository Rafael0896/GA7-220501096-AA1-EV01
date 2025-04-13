// Efecto de escritura dinámica en el título
const dynamicText = document.getElementById("dynamic-text");
const phrases = ["Desarrollador Full Stack", "Freelancer", "Apasionado por la tecnología"];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
  const currentPhrase = phrases[phraseIndex];

  if (!isDeleting && charIndex < currentPhrase.length) {
    dynamicText.textContent = `Hola, soy Rafael Álvarez, ${currentPhrase.substring(0, charIndex + 1)}`;
    charIndex++;
  } else if (isDeleting && charIndex > 0) {
    dynamicText.textContent = `Hola, soy Rafael Álvarez, ${currentPhrase.substring(0, charIndex - 1)}`;
    charIndex--;
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
  }

  setTimeout(typeWriter, isDeleting ? 50 : 100);
}

// Iniciar animación al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  typeWriter();

  // Efecto hover en tarjetas de proyecto
  const projectCards = document.querySelectorAll(".project-card");
  projectCards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      card.style.boxShadow = "0 8px 15px rgba(0, 0, 0, 0.2)";
    });
    card.addEventListener("mouseleave", () => {
      card.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
    });
  });
});
