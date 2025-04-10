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

(async function () {
    async function loadFonts() {
        const font = new FontFace("DOSVGA", "url(cios/LessPerfectDOSVGA.woff)", {
            style: "normal",
            weight: "normal",
        });
        try {
            await font.load();
            document.fonts.add(font);

            loadImage("d2x_v11_248");
            loadImage("d2x_v11_249");
            loadImage("d2x_v11_250");
            loadImage("d2x_v11_251");
        } catch (e) {
            console.error('Failed to load custom font');
        }
    }
    await loadFonts();
})();


function loadImage(imageID) {
    const canvas = document.getElementById(imageID);
    const ctx = canvas.getContext("2d");
    canvas.width = 640;
    canvas.height = 480;

    let image = new Image();
    image.onload = () => {
        ctx.drawImage(image, 0, 0);
        ctx.font = "16px DOSVGA";
        ctx.fillStyle = "#D3D3D3";
        ctx.fillText("<" + "d2x-v11-beta3" + ">", 120, 133);
        sharpen(ctx, 640, 480, 0.1);
    };
    image.src = 'images/cios/' + canvas.id + '.png';
}


/*
function loadImage(imageID) {
    const ratio = window.devicePixelRatio || 1;
    const canvas = document.getElementById(imageID);
    const ctx = canvas.getContext("2d");

    canvas.width = 640 * ratio;
    canvas.height = 480 * ratio;
    //canvas.style.width = "640px";
    canvas.style.height = "480px";

    let image = new Image();
    image.onload = () => {
        ctx.scale(ratio, ratio);
        ctx.drawImage(image, 0, 0);
        ctx.font = "16px DOSVGA";
        ctx.fillStyle = "#D3D3D3";
        ctx.fillText("<" + "d2x-v11-beta3" + ">", 120, 133);
    };
    image.src = 'images/cios/' + canvas.id + '.png';
}
*/

function sharpen(ctx, w, h, mix) {

    var weights = [0, -1, 0, -1, 5, -1, 0, -1, 0],
        katet = Math.round(Math.sqrt(weights.length)),
        half = (katet * 0.5) | 0,
        dstData = ctx.createImageData(w, h),
        dstBuff = dstData.data,
        srcBuff = ctx.getImageData(0, 0, w, h).data,
        y = h;

    while (y--) {

        x = w;

        while (x--) {

            var sy = y,
                sx = x,
                dstOff = (y * w + x) * 4,
                r = 0, g = 0, b = 0, a = 0;

            for (var cy = 0; cy < katet; cy++) {
                for (var cx = 0; cx < katet; cx++) {

                    var scy = sy + cy - half;
                    var scx = sx + cx - half;

                    if (scy >= 0 && scy < h && scx >= 0 && scx < w) {

                        var srcOff = (scy * w + scx) * 4;
                        var wt = weights[cy * katet + cx];

                        r += srcBuff[srcOff] * wt;
                        g += srcBuff[srcOff + 1] * wt;
                        b += srcBuff[srcOff + 2] * wt;
                        a += srcBuff[srcOff + 3] * wt;
                    }
                }
            }

            dstBuff[dstOff] = r * mix + srcBuff[dstOff] * (1 - mix);
            dstBuff[dstOff + 1] = g * mix + srcBuff[dstOff + 1] * (1 - mix);
            dstBuff[dstOff + 2] = b * mix + srcBuff[dstOff + 2] * (1 - mix)
            dstBuff[dstOff + 3] = srcBuff[dstOff + 3];
        }
    }

    ctx.putImageData(dstData, 0, 0);
}
