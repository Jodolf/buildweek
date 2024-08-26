document.addEventListener('DOMContentLoaded', () => {
    // Recupera il punteggio dal localStorage
    const punteggio = localStorage.getItem('punteggio');
  
    // Trova l'elemento dove visualizzare il punteggio
    const finalScoreElement = document.getElementById('finalScore');
    if (finalScoreElement) {
      finalScoreElement.innerHTML = `Il tuo punteggio è: ${punteggio}`;
    }
  });
  
  