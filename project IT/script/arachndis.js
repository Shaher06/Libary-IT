document.addEventListener('DOMContentLoaded', () => {
    const learnMoreButtons = document.querySelectorAll('.btn');
    const arachnidCards = document.querySelectorAll('.arachnids-card');
    const header = document.querySelector('header');
  
    learnMoreButtons.forEach(button => {
      button.addEventListener('click', (event) => {
        event.preventDefault();
  
        const card = button.closest('.arachnids-card');
        card.classList.toggle('highlighted');
  
        let messageElement = card.querySelector('.user-message');  
        if (!messageElement) {
          messageElement = document.createElement('p');
          messageElement.classList.add('user-message');
          card.appendChild(messageElement); 
        }
  
        messageElement.textContent = 'Learn More clicked!';
      });
    });
  
    arachnidCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.classList.add('hovered');
      });
      card.addEventListener('mouseleave', () => {
        card.classList.remove('hovered');
      });
    });
  
    header.addEventListener('click', () => {
      header.classList.toggle('header-clicked');
    });
  });