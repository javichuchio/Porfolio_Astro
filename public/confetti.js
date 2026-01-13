

import confetti from 'canvas-confetti';


document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('confetti-button');
  if (button) {
    button.addEventListener('click', () => {
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 }
      });
    });
  }
});