'use strict';

let hasEmptyFields = false;

const handleAlert = (formData) => {
  const zwrot = formData.get('gender') === 'female' ? 'Pani' : 'Pan';
  alert(`
    ${zwrot} ${formData.get('firstName')} ${formData.get('lastName')} urodzony ${formData.get('dob')} chce utworzyć konto o loginie ${formData.get('login')}
  `);
};

const handleChange = (e) => {
  const id = `error-${e.target.id}`;
  const errorElement = document.getElementById(id);
  if (errorElement) {
    errorElement.remove();
  }
  const formData = new FormData(registerForm);
  handleValidation(formData);
};

const handleValidation = (formData) => {
  hasEmptyFields = false;

  for (let [key, value] of formData) {
    if (value.trim() === '') {
      hasEmptyFields = true;
      const id = `error-${key}`;
      const errorElement = document.getElementById(id);
      if (!errorElement) {
        const adjacentElement = document.getElementById(key);
        const errorDiv = document.createElement('div');
        errorDiv.textContent = 'Pole nie może być puste';
        errorDiv.classList.add('alert');
        errorDiv.id = id;
        adjacentElement.parentNode.insertBefore(errorDiv, adjacentElement.nextSibling);
      }
    } else {
      const id = `error-${key}`;
      const errorElement = document.getElementById(id);
      if (errorElement) {
        errorElement.remove();
      }
    }
  }
};

const handleSubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(registerForm);
  document.querySelectorAll('.alert').forEach((element) => element.remove());
  handleValidation(formData);
  
  if (!hasEmptyFields) {
    handleAlert(formData);
  }
};

const submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', handleSubmit);
const registerForm = document.getElementById('registerForm');
registerForm.addEventListener('input', handleChange);
