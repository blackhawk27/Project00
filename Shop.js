let cookies = 100000;
let totalCookies = 0;
let spentCookies = 0;

let cookiebonus = 1;
let maxcookies = 5;


let cost1 = 20;
let cost2 = 20;
let cost3 = 20;
let cost4 = 20;

let level_1 = 0;
let level_2 = 0;
let level_3 = 0;
let level_4 = 0;


//Upgrade buttons
let u1Button = document.getElementById("u1Button");
u1Button.onclick = function() {
    if (cookies >= cost1) {
        cookies = cookies - cost1
        spentCookies = spentCookies + cost1
        cost1 = Math.ceil((cost1 + 5) * 1.01)
        cookiebonus = cookiebonus + 5
        level_1++
    };
return (cookies, cost1, cookiebonus, level_1, spentCookies);
}

let u2Button = document.getElementById("u2Button");
u2Button.onclick = function() {
    if (cookies >= cost2) {
        cookies = cookies - cost2
        spentCookies = spentCookies + cost2
        cost2 = Math.ceil((cost2 + 5)* 1.02)
        maxcookies = maxcookies + 2
        level_2++
    }
return (cookies, cost2, maxcookies, level_2, spentCookies)
}

let u3Button = document.getElementById("u3Button");
u3Button.onclick = function() {
    if (cookiespawntime > 100) {
        if (cookies >= cost3) {
            cookies = cookies - cost3
            spentCookies = spentCookies + cost3
            cost3 = Math.ceil((cost3 + 5) * 1.01)
            cookiespawntime = cookiespawntime - 50
            level_3++
        }
    }
return (cookies, cost3, cookiespawntime, level_3, spentCookies)

}

let u4Button = document.getElementById("u4Button");
u4Button.onclick = function() {
    if (cookies >= cost4) {
        cookies = cookies - cost4
        spentCookies = spentCookies + cost4
        cost4 = Math.ceil((cost4 + 5) * 1.01)
        autoBake= autoBake + 25
        level_4++
    }
return (cookies, cost4, autoBake, level_4, spentCookies)
}





//Show Money funktioner
function showMoney() {
    document.getElementById('cookiecount').value = cookies;
    document.getElementById('u1price').value = cost1;
    document.getElementById('u2price').value = cost2;
    document.getElementById('u3price').value = cost3;
    document.getElementById('u4price').value = cost4;
    document.getElementById('lvl_counter1').value = level_1;
    document.getElementById('lvl_counter2').value = level_2;
    document.getElementById('lvl_counter3').value = level_3;
    document.getElementById('lvl_counter4').value = level_4;
    document.getElementById('total_cookies_counter').value = totalCookies;
    document.getElementById('spent_cookies_counter').value = spentCookies;
}

//Ingame clocks
setInterval(showMoney, 10)