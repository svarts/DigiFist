document.addEventListener("DOMContentLoaded", function () {
    const colorsData = {
        "colors-1": ["#99C3CC", "#CC9999", "#CB99CC", "#A6CC99"],
        "colors-2": ["#99C3CC", "#CC9999", "#CB99CC", "#A6CC99"],
        "colors-3": ["#99C3CC", "#CC9999", "#CB99CC", "#A6CC99"],
    };

    for (let key in colorsData) {
        const colorContainer = document.getElementById(key);
        if (colorContainer) {
            let firstColor = true;
            colorsData[key].forEach((color) => {
                const colorSpan = document.createElement("span");
                colorSpan.classList.add("color");
                colorSpan.style.backgroundColor = color;
                colorSpan.addEventListener("click", function () {
                    document
                        .querySelectorAll(`#${key} .color`)
                        .forEach((c) => c.classList.remove("selected"));

                    this.classList.add("selected");
                });
                colorContainer.appendChild(colorSpan);

                if (firstColor) {
                    colorSpan.classList.add("selected");
                    firstColor = false;
                }
            });
        }
    }
});
