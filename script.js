// script.js

// Toggle accordion cards (events, dining, resources, generic)
document.addEventListener('click', function (e) {
  if (
    e.target.classList.contains('event-header') ||
    e.target.classList.contains('dining-header') ||
    e.target.classList.contains('resource-header') ||
    e.target.classList.contains('card-header')
  ) {
    const card = e.target.closest('.event-card, .dining-card, .resource-card, .card');
    if (card) {
      card.classList.toggle('active');
    }
  }
});
