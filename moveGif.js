document.addEventListener("click", function (event) {
    var gif = document.getElementById("gif");
    var newX = event.clientX;
    var newY = event.clientY;

    var rect = gif.getBoundingClientRect();
    var currentX =
        rect.left + document.documentElement.scrollLeft + gif.offsetWidth / 2;

    var turnDirection = newX < currentX ? "scaleX(1)" : "scaleX(-1)";

    gif.style.transform = `translate(${newX - gif.offsetWidth / 2}px, ${
        newY - gif.offsetHeight / 2
    }px) ${turnDirection}`;
});
