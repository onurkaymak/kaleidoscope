function kaleidoscope(min, max) {
    function rgb(min, max) {
        const r = Math.floor(Math.random() * (max - min) + min).toString();
        const g = Math.floor(Math.random() * (max - min) + min).toString();
        const b = Math.floor(Math.random() * (max - min) + min).toString();

        return r.concat(',', g, ',', b);
    }
    const rgbColor = rgb(min, max);

    return rgbColor;
};


document.body.addEventListener("mouseover", function () {
    const fullRGB = kaleidoscope(0, 255);
    document.body.style.backgroundColor = `rgb(${fullRGB})`;

})

