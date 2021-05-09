var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

canvas.addEventListener("click", function (evt) {
    var mousePos = getMousePos(canvas, evt);
    // alert(mousePos.x + ',' + mousePos.y);
}, false);