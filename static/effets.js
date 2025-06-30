document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for fade animations
    const fadeObserverOptions = {
        root: null,
        threshold: 0.1,
        rootMargin: '0px'
    };

    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                try {
                    entry.target.style.animationPlayState = 'running';
                    fadeObserver.unobserve(entry.target);
                } catch (error) {
                    console.error('Error in fade animation:', error);
                }
            }
        });
    }, fadeObserverOptions);

    // Apply fade observer to elements
    const fadeElements = document.querySelectorAll('.fade-in, .fade-in-up, .fade-in-left, .fade-in-right');
    fadeElements.forEach(element => {
        try {
            element.style.animationPlayState = 'paused';
            fadeObserver.observe(element);
        } catch (error) {
            console.error('Error setting up fade element:', error);
        }
    });
       });