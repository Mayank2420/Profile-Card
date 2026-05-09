const phrases = [
  "learning to code...",
  "building cool things...",
  "one commit at a time...",
  "HTML + CSS + Python",
  "By Mayank Kashyap",
];

let phraseIndex = 0;  // current phrase
let charIndex = 0;    // current character
let isDeleting = false; // type kar raha hai ya delete kar raha hai

const typer = document.getElementById('typer');

function type() {
  const currentPhrase = phrases[phraseIndex];

  if (!isDeleting) {
    // Ek character add karo
    charIndex++;
    typer.textContent = currentPhrase.slice(0, charIndex);

    // Poora phrase type ho gaya
    if (charIndex === currentPhrase.length) {
      isDeleting = true;
      setTimeout(type, 1500); // 1.5 sec ruko phir delete karo
      return;
    }

  } else {
    // Ek character hatao
    charIndex--;
    typer.textContent = currentPhrase.slice(0, charIndex);

    // Sab delete ho gaya
    if (charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length; // next phrase
      setTimeout(type, 300);
      return;
    }
  }

  // Speed control
  setTimeout(type, isDeleting ? 45 : 75);
}

// Start karo
type();