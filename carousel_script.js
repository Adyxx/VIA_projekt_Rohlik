document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.carousel-container');

    carousels.forEach((carouselContainer) => {

        const track = carouselContainer.querySelector('.carousel-track');
        const leftArrow = carouselContainer.querySelector('.arrow.left');
        const rightArrow = carouselContainer.querySelector('.arrow.right');
        const cards = Array.from(carouselContainer.querySelectorAll('.card'));
        const cardWidth = cards[0].offsetWidth;
        const visibleCards = 6;

        let currentPosition = 0;

        const updateArrows = () => {
            leftArrow.disabled = currentPosition === 0;
            rightArrow.disabled = currentPosition >= cards.length - visibleCards;
        };

        rightArrow.addEventListener('click', () => {
            const maxPosition = cards.length - visibleCards;
            currentPosition = Math.min(currentPosition + 6, maxPosition);
            track.style.transform = `translateX(-${currentPosition * cardWidth}px)`;
            updateArrows();
        });

        leftArrow.addEventListener('click', () => {
            currentPosition = Math.max(currentPosition - 6, 0);
            track.style.transform = `translateX(-${currentPosition * cardWidth}px)`;
            updateArrows();
        });

        updateArrows();
    });
});
