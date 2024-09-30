const scriptURL = 'https://script.google.com/macros/s/AKfycbzw5dbzQQPw7f04qm8tujUw3pGDeYZp6Qt8uI_8EYnH2l9RYt2eu1dGVmMzwXhxFDsL/exec';
let timeout;

const handleSubmit = (event) => {
    // Prevent the default form submission
    event.preventDefault();
	const form = document.forms['contact-form'];
	const formData = new FormData(form);

	formData.append('your-company', 'Zen'); // First field
	formData.append('recipient', 'zenluxurymassage@gmail.com'); // Second field
	
    const submitButton = document.getElementById('submitButton');
    submitButton.disabled = true;

    try {
        fetch(scriptURL, {
                method: 'POST',
                body: formData,
            })
            .then(response => response.json())
            .then(response => {
                // Handle successful form submission
                console.log(response);
                const notification = document.getElementById("snackbar");
                notification.classList.add("show");
                clearTimeout(timeout);
                timeout = setTimeout(() => {
                    notification.classList.remove("show");
                    location.reload(); // Reload the page after showing the notification
                }, 5000);
            })
            .catch(error => console.error('Error!', error.message));

    } catch (error) {
        console.error('Error in handling form submission!', error.message);
        const notification = document.getElementById("snackbar");
        notification.textContent = 'Submission failed. Please try again.';
        notification.classList.add("show");

        // Hide the notification after 15 seconds and optionally reload the page
	submitButton.disabled = false;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            notification.classList.remove("show");
            location.reload(); // Optionally reload the page
        }, 15000);
    }
}


function isFullyOutViewport(el, offset = 64) {
    const rect = el.getBoundingClientRect();
    return (
        (rect.bottom < -offset) ||
        (rect.top > ((window.innerHeight || document.documentElement.clientHeight) + offset))
    );
}

window.addEventListener("DOMContentLoaded", () => {
  for (const form of document.forms) {
    form.addEventListener("submit", handleSubmit);
  }
})

function isInViewport(el, offset = 64) {
    const rect = el.getBoundingClientRect();
    return (
        (rect.bottom >= offset && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)) ||
        (rect.top >= 0 && rect.top <= ((window.innerHeight || document.documentElement.clientHeight) - offset))
    );
}

function scrollHandler() {
    const elements = document.querySelectorAll('.tapp-section-content');

    for (let i = 0; i < elements.length; i++) {
        if (isInViewport(elements[i])) {
            const rect = elements[i].getBoundingClientRect();
            elements[i].classList.add('in-view');
        } else if (isFullyOutViewport(elements[i])) {
            elements[i].classList.remove('in-view');
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {scrollHandler();});

