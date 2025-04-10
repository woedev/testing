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
        //resample_single(canvas, 618, 463, true);
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

function resample_single(canvas, width, height, resize_canvas) {
    var width_source = canvas.width;
    var height_source = canvas.height;
    width = Math.round(width);
    height = Math.round(height);

    var ratio_w = width_source / width;
    var ratio_h = height_source / height;
    var ratio_w_half = Math.ceil(ratio_w / 2);
    var ratio_h_half = Math.ceil(ratio_h / 2);

    var ctx = canvas.getContext("2d");
    var img = ctx.getImageData(0, 0, width_source, height_source);
    var img2 = ctx.createImageData(width, height);
    var data = img.data;
    var data2 = img2.data;

    for (var j = 0; j < height; j++) {
        for (var i = 0; i < width; i++) {
            var x2 = (i + j * width) * 4;
            var weight = 0;
            var weights = 0;
            var weights_alpha = 0;
            var gx_r = 0;
            var gx_g = 0;
            var gx_b = 0;
            var gx_a = 0;
            var center_y = (j + 0.5) * ratio_h;
            var yy_start = Math.floor(j * ratio_h);
            var yy_stop = Math.ceil((j + 1) * ratio_h);
            for (var yy = yy_start; yy < yy_stop; yy++) {
                var dy = Math.abs(center_y - (yy + 0.5)) / ratio_h_half;
                var center_x = (i + 0.5) * ratio_w;
                var w0 = dy * dy; //pre-calc part of w
                var xx_start = Math.floor(i * ratio_w);
                var xx_stop = Math.ceil((i + 1) * ratio_w);
                for (var xx = xx_start; xx < xx_stop; xx++) {
                    var dx = Math.abs(center_x - (xx + 0.5)) / ratio_w_half;
                    var w = Math.sqrt(w0 + dx * dx);
                    if (w >= 1) {
                        //pixel too far
                        continue;
                    }
                    //hermite filter
                    weight = 2 * w * w * w - 3 * w * w + 1;
                    var pos_x = 4 * (xx + yy * width_source);
                    //alpha
                    gx_a += weight * data[pos_x + 3];
                    weights_alpha += weight;
                    //colors
                    if (data[pos_x + 3] < 255)
                        weight = weight * data[pos_x + 3] / 250;
                    gx_r += weight * data[pos_x];
                    gx_g += weight * data[pos_x + 1];
                    gx_b += weight * data[pos_x + 2];
                    weights += weight;
                }
            }
            data2[x2] = gx_r / weights;
            data2[x2 + 1] = gx_g / weights;
            data2[x2 + 2] = gx_b / weights;
            data2[x2 + 3] = gx_a / weights_alpha;
        }
    }
    //clear and resize canvas
    if (resize_canvas === true) {
        canvas.width = width;
        canvas.height = height;
    } else {
        ctx.clearRect(0, 0, width_source, height_source);
    }

    //draw
    ctx.putImageData(img2, 0, 0);
}

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
