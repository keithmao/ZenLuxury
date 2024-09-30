const scriptURL = 'https://script.google.com/macros/s/AKfycbzw5dbzQQPw7f04qm8tujUw3pGDeYZp6Qt8uI_8EYnH2l9RYt2eu1dGVmMzwXhxFDsL/exec'
const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})