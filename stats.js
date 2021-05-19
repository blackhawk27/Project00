



let total_clicks = 0;
let balls_clicked = 0;
let AVG_click = Math.ceil(balls_clicked/total_clicks);



if (total_clicks = 0 ) {
    AVG_click = 0;

}

/*
else {
    AVG_click = Math.ceil(balls_clicked/total_clicks);

    return AVG_click;
}
*/


//Math.ceil(balls_clicked/total_clicks)


//Show Money funktioner
function showStats() {
    document.getElementById('total_click_counter').value = total_clicks;
    document.getElementById('balls_clicked_counter').value = balls_clicked;
    document.getElementById('AVG_click_counter').value = AVG_click;
}

//Ingame clocks
setInterval(showStats, 10)