var txt = 'Dhruvi Sompura';
var startDelay = 1000; // delay typewriting effect start
var start = false;
var speed = 130; // speed in milliseconds
var i = 0; // index tracker for text

function typeWriter() {
    if (start === false) {
        start = true;
        setTimeout(typeWriter, startDelay);
    } else if (i < txt.length) {
        document.getElementsByClassName('terminal')[0].innerHTML += txt.charAt(
            i
        );
        i++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter();
