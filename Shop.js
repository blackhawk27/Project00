let cookies = 100000;

let cookiebonus = 1;
let maxcookies = 5;


let cost1 = 20;
let cost2 = 20;
let cost3 = 20;
let cost4 = 20;

//Upgrade buttons
let u1Button = document.getElementById("u1Button");
u1Button.onclick = function() {
    if (cookies >= cost1) {
        cookies = cookies - cost1
        cost1 = cost1 + 5
        cookiebonus = cookiebonus + 2
    };
return (cookies, cost1, cookiebonus);
}

let u2Button = document.getElementById("u2Button");
u2Button.onclick = function() {
    if (cookies >= cost2) {
        cookies = cookies - cost2
        cost2 = cost2 + 5
        maxcookies = maxcookies + 2
    }
return [cookies, cost2, maxcookies]
}

let u3Button = document.getElementById("u3Button");
u3Button.onclick = function() {
    if (cookiespawntime > 100) {
        if (cookies >= cost3) {
            cookies = cookies - cost3
            cost3 = cost3 + 5
            cookiespawntime = cookiespawntime - 50
            
        }
    }
return [cookies, cost3, cookiespawntime]

}

let u4Button = document.getElementById("u4Button");
u4Button.onclick = function() {
    if (cookies >= cost4) {
        cookies = cookies - cost4
        cost4 = cost4 + 5
        autoBake= autoBake + 1
    }
return [cookies, cost4, autoBake]
}





//Show Money funktioner
function showMoney() {
    document.getElementById('cookiecount').value = cookies;
    document.getElementById('u1price').value = cost1;
    document.getElementById('u2price').value = cost2;
    document.getElementById('u3price').value = cost3;
    document.getElementById('u4price').value = cost4;
}

//Ingame clocks
setInterval(showMoney, 10)