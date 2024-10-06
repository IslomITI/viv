function observeJobCards() {
  const jobCards = document.querySelectorAll('.job-card-new');
  jobCards.forEach((jobCard) => {
    const buttonPrimary = jobCard.querySelector('.button-primary');
    if (buttonPrimary && !jobCard.querySelector('.job-info-row')) {
      buttonPrimary.style.backgroundColor = 'lightgreen';
    } else {
      buttonPrimary.style.backgroundColor = 'lightcoral';
    }
  });
}

const observer = new MutationObserver(observeJobCards);
observer.observe(document.body, {
  childList: true,
  subtree: true
});