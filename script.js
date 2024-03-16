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

let originalTitles = [];

function updateProductTitles() {
    const productTitles = document.querySelectorAll('.product h2');

    if (originalTitles.length === 0) {
        productTitles.forEach((title) => {
            originalTitles.push(title.innerHTML);
        });
    }

    if (window.innerWidth <= 768) {

        productTitles.forEach((title) => {
            title.innerHTML = 'Organic Skinny High <br/> Waist Raw Hem Jeans';
        });
    } else {
        productTitles.forEach((title, index) => {
            title.innerHTML = originalTitles[index];
        });
    }
}

window.addEventListener('load', updateProductTitles);
window.addEventListener('resize', updateProductTitles);



