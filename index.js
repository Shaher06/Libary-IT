let molluskInfo = {
    snail: "Snails have spiral shells and move slowly.",
    clam: "Clams have two shells and live in sand.",
    squid: "Squids are fast swimmers with tentacles.",
    octopus: "Octopuses are smart animals that can change color."
  };
  
  function showInfo(button, type) {
    let infoText = molluskInfo[type];
  
    // نخفي كل المعلومات السابقة
    let allInfo = document.querySelectorAll(".info-text");
    allInfo.forEach(p => p.textContent = "");
  
    // نعرض المعلومة تحت الزر اللي اتضغط عليه
    let parent = button.parentElement;
    let infoParagraph = parent.querySelector(".info-text");
  
    if (infoParagraph && infoText) {
      infoParagraph.textContent = infoText;
    }
  }