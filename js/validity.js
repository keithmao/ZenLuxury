document.getElementById('your-number').addEventListener('input', function (event) {
  if (this.validity.patternMismatch) {
    this.setCustomValidity("Please enter your country code and phone number.");
  } else {
    this.setCustomValidity(""); // Reset the message if input is valid
  }
});