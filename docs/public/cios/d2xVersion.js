const lastKnownVersion = "d2x-v11-beta3";

$(document).ready(function () {
    $.getJSON("https://api.github.com/repos/wiidev/d2x-cios/releases/latest").done(function (json) {
        document.body.innerHTML = document.body.innerHTML.replaceAll('d2x-currentversion-vWii', json.name + '-vWii');
        document.body.innerHTML = document.body.innerHTML.replaceAll('d2x-currentversion', json.name);
    }).fail(function () {
        document.body.innerHTML = document.body.innerHTML.replaceAll('d2x-currentversion-vWii', lastKnownVersion + '-vWii');
        document.body.innerHTML = document.body.innerHTML.replaceAll('d2x-currentversion', lastKnownVersion);
    })

/*
    const canvas = document.getElementById("d2x-canvas");
    const ctx = canvas.getContext("2d");
    const image = document.getElementById("d2x-image");
        
    canvas.width = image.naturalWidth;
    canvas.height = image.naturalHeight;
    ctx.drawImage(image, 0, 0);
    
    ctx.font = "16px DOSVGA";
    ctx.fillStyle = "#D3D3D3";
    ctx.fillText("<d2x-v11-beta3>", 120, 133);
*/

});

var c = document.getElementById("d2x-canvas");
var ctx = c.getContext("2d");
var img1 = new Image();
img1.onload = function () {
    ctx.drawImage(img1, 0, 0);
};
img1.src = 'https://raw.githubusercontent.com/woedev/testing/refs/heads/master/docs/public/images/cios/d2x_v11_248.png';
