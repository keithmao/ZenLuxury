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
    const elements = document.querySelectorAll('.come-in');

    for (let i = 0; i < elements.length; i++) {
        if (isInViewport(elements[i])) {
            const rect = elements[i].getBoundingClientRect();
            elements[i].classList.add('in-view');
        } else if (isFullyOutViewport(elements[i])) {
            elements[i].classList.remove('in-view');
        }
    }
}

const throttledScrollHandler = throttle(scrollHandler, 99);
window.addEventListener('scroll', throttledScrollHandler);
document.addEventListener('DOMContentLoaded', () => {scrollHandler();});

