function isFullyOutViewport(el, offset = 64) {
    const rect = el.getBoundingClientRect();
    return (
        (rect.bottom < -offset) ||
        (rect.top > ((window.innerHeight || document.documentElement.clientHeight) + offset))
    );
}


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
            elements[i].classList.add('in-view'); // Adds class if element is in view
        } else if (isFullyOutViewport(elements[i])) {
            elements[i].classList.remove('in-view'); // Removes class if element is out of view
        }
    }
}

const throttledScrollHandler = _.throttle(scrollHandler, 99); // Throttles the scroll handler
window.addEventListener('scroll', throttledScrollHandler); // Attaches scroll handler
document.addEventListener('DOMContentLoaded', () => {scrollHandler();}); // Initial call to scroll handler