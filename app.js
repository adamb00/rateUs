const starBtn = document.querySelector('.star');
const submitBtn = document.querySelector('.submit');
const buttons = document.querySelectorAll('.buttons button');
const container = document.querySelector('.container');
const thankBuddy = document.querySelector('.thankBuddy');
const svgElem = document.querySelector('.svgElement');
let buttonId;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    button.disabled = false;
    button.classList.toggle('active');
    button.style.backgroundColor = 'hsla(25, 97%, 53%, 0.9)';
    buttons.forEach(button => (button.disabled = true));
    buttonId = button.id;
  });
});

submitBtn.addEventListener('click', () => {
  container.style.display = 'none';
  svgElem.style.visibility = 'visible';
  thankBuddy.style.visibility = 'visible';
  thankBuddy.innerHTML = `
  <div class="youSelected">
    You selected ${buttonId} out of 5
  </div>
  <div class="thankyou">
    <h2>Thank you!</h2>
    <p class="thank">
      We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!
    </p>
  </div>
  `;
});
