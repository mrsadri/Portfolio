document.addEventListener('DOMContentLoaded', function () {
    const sliders = document.querySelectorAll('[data-slider="books"]');

    const updateControls = (track, prevBtn, nextBtn) => {
        const scrollLeft = track.scrollLeft;
        const maxScroll = track.scrollWidth - track.clientWidth;
        if (prevBtn) {
            prevBtn.disabled = scrollLeft <= 1;
        }
        if (nextBtn) {
            nextBtn.disabled = scrollLeft >= maxScroll - 1;
        }
    };

    sliders.forEach((slider) => {
        const track = slider.querySelector('.book-slider-track');
        const prevBtn = slider.querySelector('.book-slider-control.prev');
        const nextBtn = slider.querySelector('.book-slider-control.next');

        if (!track) return;

        const getScrollAmount = () => track.clientWidth * 0.8;

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                track.scrollBy({
                    left: -getScrollAmount(),
                    behavior: 'smooth'
                });
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                track.scrollBy({
                    left: getScrollAmount(),
                    behavior: 'smooth'
                });
            });
        }

        let scrollTimeout;
        track.addEventListener('scroll', () => {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                updateControls(track, prevBtn, nextBtn);
            }, 100);
        });

        window.addEventListener('resize', () => updateControls(track, prevBtn, nextBtn));
        updateControls(track, prevBtn, nextBtn);
    });
});

