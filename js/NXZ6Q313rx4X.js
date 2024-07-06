
let timeout;

const handleSubmit = (event) => {
  event.preventDefault();

  if (timeout) return;

  const formData = new FormData(event.target);
  console.log(event.target, formData)
  const formDataArr = [...formData.entries()];
  const reqData = {id: "a772065e-ea4a-4e7c-965a-2f8de95a0215", data: {}};
  for (let i = 0; i < formDataArr.length; i++) {
      const field = formDataArr[i];
      reqData.data[field[0]] = field[1];
  }
  fetch("https://api.usestyle.ai/api/v2/send-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(reqData)
  })
    .then(response => response.json())
    .then(response => {
      console.log(response);
      const notification = document.getElementById("snackbar");
      notification.classList.add("show");
      clearTimeout(timeout);
      timeout = setTimeout(() => notification.classList.remove("show"), 5000);
    })
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

const throttledScrollHandler = _.throttle(scrollHandler, 99);
window.addEventListener('scroll', throttledScrollHandler);
document.addEventListener('DOMContentLoaded', () => {scrollHandler();});
