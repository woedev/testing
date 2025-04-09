const lastKnownVersion = "d2x-v11-beta3";

const canvas = document.getElementById("d2x-canvas");
const ctx = canvas.getContext("2d");

$(document).ready(function () {
    $.getJSON("https://api.github.com/repos/wiidev/d2x-cios/releases/latest").done(function (json) {
        document.body.innerHTML = document.body.innerHTML.replaceAll('d2x-currentversion-vWii', json.name + '-vWii');
        document.body.innerHTML = document.body.innerHTML.replaceAll('d2x-currentversion', json.name);
    }).fail(function () {
        document.body.innerHTML = document.body.innerHTML.replaceAll('d2x-currentversion-vWii', lastKnownVersion + '-vWii');
        document.body.innerHTML = document.body.innerHTML.replaceAll('d2x-currentversion', lastKnownVersion);
    })



    //const image = document.getElementById("d2x-image");

    const image = new Image(640, 480);
    image.onload = drawImageActualSize;
    image.src = "https://raw.githubusercontent.com/woedev/testing/refs/heads/master/docs/public/images/cios/d2x_v11_248.png";
});


function drawImageActualSize() {
    // Use the intrinsic size of image in CSS pixels for the canvas element
    canvas.width = this.naturalWidth;
    canvas.height = this.naturalHeight;
  
    ctx.drawImage(this, 0, 0);

    ctx.font = "16px Arial";
    ctx.fillStyle = "#D3D3D3";
    ctx.fillText("<d2x-v11-beta3>", 120, 133);
  }