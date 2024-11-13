function animateCounter(id, start, end, duration) {
    let counterElement = document.getElementById(id);
    let startTime = null;

    function countUp(timestamp) {
        if (!startTime) startTime = timestamp;
        let progress = timestamp - startTime;
        let currentValue = Math.min(Math.floor(progress / duration * (end - start) + start), end);
        counterElement.innerText = currentValue;

        if (currentValue < end) {
            requestAnimationFrame(countUp);
        }
    }

    requestAnimationFrame(countUp);
}

function initCounters() {
    let countersAnimated = false;

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !countersAnimated) {
                animateCounter('usersCounter', 0, 5000, 2000); 
                animateCounter('activeUsersCounter', 0, 1200, 2000); 
                animateCounter('donorsCounter', 0, 800, 2000); 
                animateCounter('donationsCounter', 0, 2500, 2000);
                countersAnimated = true;
                observer.disconnect();
            }
        });
    }, { threshold: 0.5 });

    const counterSection = document.getElementById('counterSection');
    observer.observe(counterSection);
}

window.onload = function () {
    initCounters();
};