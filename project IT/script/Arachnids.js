document.addEventListener('DOMContentLoaded', () => {
    const learnMoreButtons = document.querySelectorAll('.btn');
    const arachnidCards = document.querySelectorAll('.arachnids-card');
    const header = document.querySelector('header');
  
    learnMoreButtons.forEach(button => {
      button.addEventListener('click', (event) => {
        event.preventDefault();
  
      
        const card = button.closest('.arachnids-card');
        card.classList.toggle('highlighted');
  
        console.log('Learn More clicked!', card);
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
      header.classList.toggle('header-clicked')
    });
  });