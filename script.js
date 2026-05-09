const phrases = [
  "learning to code...",
  "building cool things...",
  "one commit at a time...",
  "HTML + CSS + Python",
  "By Mayank Kashyap",
];

let phraseIndex = 0;  
let charIndex = 0;    
let isDeleting = false; 

const typer = document.getElementById('typer');

function type() {
  const currentPhrase = phrases[phraseIndex];

  if (!isDeleting) {
    
    charIndex++;
    typer.textContent = currentPhrase.slice(0, charIndex);

 
    if (charIndex === currentPhrase.length) {
      isDeleting = true;
      setTimeout(type, 1500); 
      return;
    }

  } else {
  
    charIndex--;
    typer.textContent = currentPhrase.slice(0, charIndex);

    
    if (charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length; 
      setTimeout(type, 300);
      return;
    }
  }

  
  setTimeout(type, isDeleting ? 45 : 75);
}


type();
