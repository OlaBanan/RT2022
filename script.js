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


function sBar1 (n, div, span, effect) {
    let ssB1 = document.getElementById(span);
    ssB1.innerHTML = Math.floor(n * 100) + effect;
    
    let sB1 = document.getElementById(div);
    let x = (n*100) + "%";
    sB1.style.width = x;
    sB1.style.backgroundColor = "#990100";
}


sBar1(0.19, "sB1", "ssB1", " years")
sBar1(0.16, "sB2", "ssB2", " beers")
sBar1(0.08, "sB3", "ssB3", " beers")
sBar1(0.54, "sB4", "ssB4", " m/s")
sBar1(0.07, "sB5", "ssB5", " h")
sBar1(0.89, "sB6", "ssB6", " iq")
sBar1(0.2, "sB7", "ssB7", " %")
sBar1(0.99, "sB8", "ssB8", " 😂")


imgShowcase(1000);
randomQuote();