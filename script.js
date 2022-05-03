sor("s2");
sor("s3");
sor("s4");
sor("s5");
sor("s6");
sor("s7");
sor("s8");

function imgShowcase (interval) {
    setTimeout(() => {
        sor("s1");
        sor("s2");
    }, interval);

    setTimeout(() => {
        sor("s2");
        sor("s3");
    }, interval*2);

    setTimeout(() => {
        sor("s3");
        sor("s4");
    }, interval*3);

    setTimeout(() => {
        sor("s4");
        sor("s5");
    }, interval*4);

    setTimeout(() => {
        sor("s5");
        sor("s6");
    }, interval*5);

    setTimeout(() => {
        sor("s6");
        sor("s7");
    }, interval*6);

    setTimeout(() => {
        sor("s7");
        sor("s8");
    }, interval*7);

    setTimeout(() => {
        sor("s8");
        sor("s1");
        imgShowcase(interval);
    }, interval*8);

}

function sor(TheDiv) {
    var xy = document.getElementById(TheDiv);
    if (xy.style.display === "none") {
      xy.style.display = "block";
    } else {
      xy.style.display = "none";
   }
}

var quotes = [
    "'Float like a butterfly, sting like a bee.'", 
    "'Don't count the days. Make the days count.'", 
    "'Impossible is temporary. Impossible is nothing.",
    "'If my mind can conceive it, if my heart can believe it--then I can achieve it.'",
    "'I am the greatest. I said that even before I knew I was.'",
    "'A man who has no imagination has no wings.'",
    "'It isn't the mountains ahead to climb that wear you out; it's the pebble in your shoe.'",
    "'It's not bragging if you can back it up.'",
    "'I should be a postage stamp. That's the only way I'll ever get licked.'",
    "'He who is not courageous enough to take risks will accomplish nothing in life.'",
    "'I shook up the world. Me!'"
]

var r = 0;
function randomQuote() {
    // tilfeldig tall 0-10 (lengde på quotes array)
    let x = Math.floor(Math.random() * (quotes.length));
    if (x == r) {
        randomQuote();
    } else {
        document.getElementById("rQuote").innerHTML = quotes[x];
        r = x;
    }
}


function sBar1 (n, div, span, effect, secSpan) {
    let ssB1 = document.getElementById(span);
    ssB1.innerHTML = Math.floor(n * 100);

    let sssB1 = document.getElementById(secSpan);
    sssB1.innerHTML = effect;
    
    let sB1 = document.getElementById(div);
    let x = (n*100) + "%";
    sB1.style.width = x;
    sB1.style.backgroundColor = "#990100";
}

function varibleStats () {
    let h = new Date().getHours();

    // years, newtons, beers, kmh, mb, brain, drunkness, happiness
    switch (h) {
        case 0:
            sBarCompresed(19, 30, 8, 2, 45, 60, 8, 80)
            break;
        case 1:
            sBarCompresed(19, 30, 5, 2, 40, 62, 6, 79)
            break;
        case 2:
            sBarCompresed(19, 30, 2, 2, 35, 63, 7, 78)
            break;
        case 3:
            sBarCompresed(19, 20, 2, 2, 30, 64, 5, 77)
            break;
        case 4:
            sBarCompresed(19, 20, 3, 3, 25, 67, 3, 78)
            break;
        case 5:
            sBarCompresed(19, 15, 3, 3, 20, 50, 1, 79)
            break;
        case 6:
            sBarCompresed(19, 30, 3, 4, 70, 66, 0, 80)
            break;
        case 7:
            sBarCompresed(19, 40, 4, 5, 60, 62, 0, 60)
            break;
        case 8:
            sBarCompresed(19, 60, 5, 6, 50, 68, 0, 66)
            break;
        case 9:
            sBarCompresed(19, 70, 5, 7, 40, 72, 0, 66)
            break;
        case 10:
            sBarCompresed(19, 70, 4, 8, 30, 80, 0, 89)
            break;
        case 11:
            sBarCompresed(19, 60, 4, 9, 85, 81, 0, 80)
            break;
        case 12:
            sBarCompresed(19, 70, 5, 10, 80, 85, 0, 87)
            break;
        case 13:
            sBarCompresed(19, 100, 5, 13, 70, 98, 1, 80)
            break;
        case 14:
            sBarCompresed(19, 100, 6, 13, 60, 96, 1, 81)
            break;
        case 15:
            sBarCompresed(19, 90, 10, 12, 50, 90, 0, 89)
            break;
        case 16:
            sBarCompresed(19, 80, 12, 11, 40, 89, 0, 90)
            break;
        case 17:
            sBarCompresed(19, 60, 16, 10, 30, 87, 1, 92)
            break;
        case 18:
            sBarCompresed(19, 80, 17, 8, 100, 86, 2, 94)
            break;
        case 19:
            sBarCompresed(19, 70, 16, 6, 90, 88, 3, 98)
            break;
        case 20:
            sBarCompresed(19, 60, 15, 6, 80, 89, 4, 95)
            break;
        case 21:
            sBarCompresed(19, 70, 14, 5, 70, 82, 6, 94)
            break;
        case 22:
            sBarCompresed(19, 40, 13, 5, 60, 75, 6, 97)
            break;
        case 23:
            sBarCompresed(19, 30, 10, 4, 50, 70, 7, 99)
            break;
    }
}

function sBarCompresed (years, newtons, beers, kmh, mb, brain, drunkness, happiness) {
    sBar1(years*0.01, "sB1", "ssB1", " (years)", "sssB1")
    sBar1(newtons*0.01, "sB2", "ssB2", " (newtons)", "sssB2")
    sBar1(beers*0.01, "sB3", "ssB3", " (beers)", "sssB3")
    sBar1(kmh*0.01, "sB4", "ssB4", " (km/h)", "sssB4")
    sBar1(mb*0.01, "sB5", "ssB5", " (manglende brødskiver)", "sssB5")
    sBar1(brain*0.01, "sB6", "ssB6", " (iq)", "sssB6")
    sBar1(drunkness*0.01, "sB7", "ssB7", " (shots)", "sssB7")
    sBar1(happiness*0.01, "sB8", "ssB8", " (😂)", "sssB8")
}

imgShowcase(1000);
randomQuote();
varibleStats();