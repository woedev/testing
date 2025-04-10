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
    const canvas = document.getElementById("d2x_v11_248");
    const ctx = canvas.getContext("2d");

    let image = new Image();
    image.onload = () => {
        ctx.drawImage(image, 0, 0);
        ctx.font = "16px DOSVGA";
        ctx.fillStyle = "#D3D3D3";
        ctx.fillText("<" + "d2x-v11-beta3" + ">", 120, 133);
    };
    //image.src = 'images/cios/d2x_v11_248.png';
    image.src = 'images/cios/' + canvas.id + '.png';
})();
