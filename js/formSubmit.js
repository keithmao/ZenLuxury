var form = document.getElementById("my-form");
var timeout; // Declare the timeout variable

async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("my-form-status");
    var data = new FormData(form); // Use 'form' directly instead of 'event.target'

    try {
        const response = await fetch(form.action, {
            method: form.method || 'POST', // Default to POST if form.method is not set
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const result = await response.json();
        console.log(result);
        const notification = document.getElementById("snackbar");
        notification.classList.add("show");
		form.reset();


        clearTimeout(timeout);
        timeout = setTimeout(() => notification.classList.remove("show"), 15000);

    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        // Optionally update the status element with an error message
        status.textContent = 'Submission failed. Please try again.';
    }
}

window.addEventListener("DOMContentLoaded", () => {
  for (const form of document.forms) {
    form.addEventListener("submit", handleSubmit); // Attaches submit handler to each form
  }
});