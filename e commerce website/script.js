document.addEventListener("DOMContentLoaded", function () {
    let firstRadio = document.getElementById("first");
    let secondRadio = document.getElementById("second");
    let slider = document.querySelector(".photo-section");

    function switchSlide() {
        if (firstRadio.checked) {
            slider.style.transform = "translateX(0%)";
        } else {
            slider.style.transform = "translateX(-50%)";
        }
    }

    // Automatically switch slides every 3 seconds
    setInterval(() => {
        if (firstRadio.checked) {
            secondRadio.checked = true;
        } else {
            firstRadio.checked = true;
        }
        switchSlide();
    }, 6000);

    // Add event listeners to radio buttons
    firstRadio.addEventListener("change", switchSlide);
    secondRadio.addEventListener("change", switchSlide);
});

document.querySelector(".nav .search a").addEventListener("click", function(event) {
    event.preventDefault(); // Stops the anchor from scrolling the page
});
document.querySelector(".pro-wish-bag .profile a").addEventListener("click", function(event) {
    event.preventDefault(); // Stops the anchor from scrolling the page
});
