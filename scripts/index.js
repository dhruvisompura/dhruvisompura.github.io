var commands = [
    'wget dhruvisompura.com',
    'curl dhruvisompura.com',
    'Dhruvi Sompura'
];
var commands_index = Math.floor(Math.random() * commands.length);
var txt = commands[commands_index];

var startDelay = 900; // delay typewriting effect start
var start = false;
var speed = 130; // speed in milliseconds
var i = 0; // index tracker for text

function type() {
    if (start === false) {
        start = true;
        setTimeout(type, startDelay);
    } else if (i < txt.length) {
        document.getElementsByClassName('terminal')[0].innerHTML += txt.charAt(
            i
        );
        i++;
        setTimeout(type, speed);
    }
}

type();
