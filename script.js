const noButton = document.getElementById('no-button');
const buttonsArea = document.querySelector('.buttons-area');

noButton.addEventListener('touchstart', () => {
    const areaWidth = buttonsArea.clientWidth;
    const areaHeight = buttonsArea.clientHeight;

    const newX = Math.random() * (areaWidth - noButton.offsetWidth);
    const newY = Math.random() * (areaHeight - noButton.offsetHeight);

    noButton.style.left = `${newX}px`;
    noButton.style.top = `${newY}px`;
});
