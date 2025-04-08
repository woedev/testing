

$(document).ready(function () {
    GetLatestCiosRelease();
});

function GetLatestCiosRelease() {
    $.getJSON("https://apix.github.com/repos/wiidev/d2x-cios/releases/latest").done(function (json) {
        document.body.innerHTML = document.body.innerHTML.replaceAll('d2x-currentversion-vWii', json.name + '-vWii');
        document.body.innerHTML = document.body.innerHTML.replaceAll('d2x-currentversion', json.name);
    }).fail(function () {
        console.log("error!!!!!!!!!");
    })
}
