const lastKnownVersion = "d2x-v11-beta3";

$(document).ready(function () {
    $.getJSON("https://api.github.com/repos/wiidev/d2x-cios/releases/latest").done(function (json) {
        document.body.innerHTML = document.body.innerHTML.replaceAll('d2x-currentversion-vWii', json.name + '-vWii');
        document.body.innerHTML = document.body.innerHTML.replaceAll('d2x-currentversion', json.name);
    }).fail(function () {
        document.body.innerHTML = document.body.innerHTML.replaceAll('d2x-currentversion-vWii', lastKnownVersion + '-vWii');
        document.body.innerHTML = document.body.innerHTML.replaceAll('d2x-currentversion', lastKnownVersion);
    })
});


const font = new FontFace("DOSVGA", 'url(./cios/LessPerfectDOSVGA.woff) format("woff")', {
    style: "normal",
    weight: "normal",
});

font.load().then(function (font) {
    document.fonts.add(font);

    const canvas = document.getElementById("d2x-canvas");
    const ctx = canvas.getContext("2d");
    const image = document.getElementById("d2x-image");

    canvas.width = image.naturalWidth;
    canvas.height = image.naturalHeight;
    ctx.drawImage(image, 0, 0);

    ctx.font = "16px DOSVGA";
    ctx.fillStyle = "#D3D3D3";
    ctx.fillText("<d2x-v11-beta3>", 120, 133);
});