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

})

