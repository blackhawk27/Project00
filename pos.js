
function getMousePos(canvas, evt) {
    let rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

canvas.addEventListener("click", function (evt) {
    let mousePos = getMousePos(canvas, evt);
    Cookie.remove(mousePos);
    total_clicks++;
    //alert(mousePos.x + ',' + mousePos.y);
    AVG_click = Math.round((balls_clicked/total_clicks)*100) /100;
}, false);