var cookies = 0

var cookiebonus = 1
var maxcookies = 5
var cookiespawntime = 5000

var cost1 = 20
var cost2 = 20
var cost3 = 20

//Upgrade buttons
var u1Button = document.getElementById("u1Button");
u1Button.onclick = function() {
    if (cookies >= cost1) {
        cookies = cookies - cost1
        cost1 = cost1 + 5
        cookiebonus = cookiebonus + 2
    }
return [cookies, cost1, cookiebonus]
}

var u2Button = document.getElementById("u2Button");
u2Button.onclick = function() {
    if (cookies >= cost2) {
        cookies = cookies - cost2
        cost2 = cost2 + 5
        maxcookies = maxcookies + 2
    }
return [cookies, cost2, maxcookies]
}

var u3Button = document.getElementById("u3Button");
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


//Show Money funktioner
function showMoney() {
    document.getElementById('cookiecount').value = cookies;
    document.getElementById('u1price').value = cost1;
    document.getElementById('u2price').value = cost2;
    document.getElementById('u3price').value = cost3;
}

//Ingame clocks
setInterval(showMoney, 10)