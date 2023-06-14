"use strict;"


/* TODO:
- Dodaj walidacje do pól, które tego wymagają. 
- Powinna się uruchamiać po zatwiedzeniu formularza przyciskiem Wyślij (lub enter 😉).
- Walidacja powinna być prosta, po prostu sprawdź czy dane pola są uzupełnione.
- Ważne aby sprawdzić wszystkie potrzebne pola.
- Jeżeli jest przynajmniej jeden błąd, zablokuj wykonywanie kolejnych akcji (patrz pkt niżej).
- Po zatwierdzeniu formularza wyświetl alert oraz zadbaj o to, żeby strona się nie przeładowywała po jego wysłaniu.
- Zwróć też uwagę, że oprócz wyświetlenia wartości wyświetla się też zwrot grzecznościowy odpowiedni dla wybranej płci. Dobrze aby w Twoim formularzu też było pole o tym typie i miało wpływ na wynik
- Pola formularza: Imię, Nazwisko, Płeć, Login, Hasło, Data urodzenia, Przycisk wysyłający
*/

let hasEmptyFields;

const handleAlert = (formData) => {
  const zwrot = formData.get('gender') === 'female' ? 'Pani' : 'Pan';
  alert(`
    ${zwrot} ${formData.get('firstName')} ${formData.get('lastName')} urodzony ${formData.get('dob')} chce utworzyć konto o loginie ${formData.get('login')}
  `);
};

const handleChange = (e) => {
  hasEmptyFields = true;
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
    if (value === '' || value === undefined || value === null) {
      hasEmptyFields = true;
      const errorElement = document.createElement("div");
      errorElement.textContent = "Pole nie może być puste";
      errorElement.classList.add("alert");
      errorElement.id = `error-${key}`;
      const elementId = String(key);
      const adjacentElement = document.getElementById(elementId);
      adjacentElement.insertAdjacentElement("afterend", errorElement);
      return false;
    }
  }

  hasEmptyFields = false;
  return true;
};

const handleSubmit = (e) => {
  e.preventDefault();
  hasEmptyFields = true;
  const formData = new FormData(registerForm);
  document.querySelectorAll('.alert').forEach(element => element.remove());
  const isValidated = handleValidation(formData);

  if (!hasEmptyFields && isValidated) {
    handleAlert(formData);
  }
};

const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", handleSubmit);
const registerForm = document.getElementById('registerForm');
registerForm.addEventListener('input', handleChange);
