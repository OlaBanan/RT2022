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


  imgShowcase(1000)