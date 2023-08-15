function rotator () {
const rotators = document.querySelectorAll('.rotator');

rotators.forEach((rotator) => {
    const rotatorsEl = rotator.querySelectorAll(".rotator__case");
    const rotatorActive = rotator.querySelector('.rotator__case_active');

    const rotatorIndex = Array.from(rotatorsEl).indexOf(rotatorActive);

    const newIndex = (rotatorIndex + 1) % rotatorsEl.length;
    const newEl = rotatorsEl[newIndex];

    rotatorActive.classList.remove('rotator__case_active');

    newEl.classList.add('rotator__case_active');
});


}

setInterval(rotator, 1000);