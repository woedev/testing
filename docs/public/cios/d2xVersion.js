/*
$(document).ready(function () {
    $.getJSON("https://api.github.com/repos/wiidev/d2x-cios/releases/latest").done(function (json) {
        document.body.innerHTML = document.body.innerHTML.replaceAll('d2x-currentversion-vWii', json.name + '-vWii');
        document.body.innerHTML = document.body.innerHTML.replaceAll('d2x-currentversion', json.name);
    }).fail(function () {
        const lastKnownVersion = "d2x-v11-beta3";
        document.body.innerHTML = document.body.innerHTML.replaceAll('d2x-currentversion-vWii', lastKnownVersion + '-vWii');
        document.body.innerHTML = document.body.innerHTML.replaceAll('d2x-currentversion', lastKnownVersion);
    })
});
*/

(function () {
    loadImage("d2x_v11_248");
    loadImage("d2x_v11_249");
    loadImage("d2x_v11_250");
    loadImage("d2x_v11_251");
})();


function loadImage(imageID) {
    const canvas = document.getElementById(imageID);
    const ctx = canvas.getContext("2d");

    let image = new Image();
    image.onload = () => {
        canvas.width = 640;
        canvas.height = 480;
        ctx.drawImage(image, 0, 0);
        ctx.font = "16px DOSVGA";
        ctx.fillStyle = "#D3D3D3";
        ctx.globalCompositeOperation = 'destination-out';
        ctx.fillStyle = "black";
        ctx.fillText("<" + "d2x-v11-beta3" + ">", 120, 133);
    };
    image.src = 'images/cios/' + canvas.id + '.png';
}