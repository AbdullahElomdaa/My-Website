const words = ["Frontend Developer","Backend Developer ", "Wep Designer", "Freelancer", "IT Student"];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const textSpan = document.querySelector(".multiple-text");

  function typeEffect() {
    const currentWord = words[wordIndex];
    
    if (!isDeleting) {
      textSpan.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
      if (charIndex === currentWord.length) {
        setTimeout(() => (isDeleting = true), 1500);
      }
    } else {
      textSpan.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
      }
    }

    setTimeout(typeEffect, isDeleting ? 60 : 100);
  }

  typeEffect();

