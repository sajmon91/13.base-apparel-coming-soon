const error_img = document.querySelector('#error');
const submit_btn = document.querySelector('#submit');
const warning_message = document.querySelector('#error-description')
const email = document.querySelector('#email')
const contactForm = document.querySelector('form');


contactForm.addEventListener('submit', (e) => {
  e.preventDefault()
  let userEmail = email.value;
  const emailRegex = /^[a-zA-Z0-9.]+@[a-zA-Z0-9]+\.[a-zA-Z]+(\.[a-zA-Z]+)?$/;
  if(emailRegex.test(userEmail)) {
    error_img.classList.add('hide');
    warning_message.classList.add('hide');
      email.value = '';
      email.blur();
  }
  else{
    error_img.classList.remove('hide');
    warning_message.classList.remove('hide');
  }
});

