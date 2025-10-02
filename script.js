
// Filter featured items by category
const categoryButtons = document.querySelectorAll('.category-btn');
const productCards = document.querySelectorAll('.product-card');

categoryButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    categoryButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const category = btn.getAttribute('data-category');

    productCards.forEach(card => {
      if(category === 'all' || card.getAttribute('data-category') === category) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Subscription form
const form = document.getElementById('subscription-form');
const messageEl = document.getElementById('subscription-message');

form.addEventListener('submit', event => {
  event.preventDefault();
  const emailInput = document.getElementById('email');
  const email = emailInput.value.trim();

  if(email) {
    messageEl.style.color = 'green';
    messageEl.textContent = 'Thank you for subscribing! Check your inbox for a 10% discount coupon.';
    emailInput.value = '';
  } else {
    messageEl.style.color = '#a72e1b';
    messageEl.textContent = 'Please enter a valid email address.';
  }
});
