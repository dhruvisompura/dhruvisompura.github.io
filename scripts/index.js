// typewriter text contents
var commands = [
    'wget dhruvisompura.com',
    'curl dhruvisompura.com',
    'Dhruvi Sompura'
];

var helpText = 'press enter';

// selecting random text content to display
var commandIndex = Math.floor(Math.random() * commands.length);
var commandText = commands[commandIndex];

// speed in milliseconds
var startDelay = 1000; // wait before starting type writer effect
var speedWait = 10000; // wait between command and help text
var speedForward = 130; // typing speed
var speedBackspace = 130; // backspace speed

// values to keep track of numbers letter typed, when to backspace, etc
var i = 0; // index tracker for text
var start = false; // typing delay tracker
var backspace = false;
var displayHelpText = false;

function type() {
    // Determine if typing delay has been completed
    if (!start) {
        start = true;
        setTimeout(type, startDelay);
        // completed start delay
    } else {
        // determine if animation should be backspace or typing
        if (!backspace) {
            // determine if command or help text should be displayed
            if (!displayHelpText) {
                txt = commandText;
            }
            // display help text
            else {
                txt = helpText;
            }

            // if full string hasbe't been fully typed out, continue typing
            if (i < txt.length) {
                document.getElementsByClassName(
                    'terminal'
                )[0].innerHTML += txt.charAt(i);
                i++;
                setTimeout(type, speedForward);
            } else if (i == txt.length && !displayHelpText) {
                backspace = true;
                setTimeout(type, speedWait);
            }
        }
        // if backspacing is enabled
        else {
            // if there is still text, keep backspacing
            if (
                document.getElementsByClassName('terminal')[0].innerHTML
                    .length > 0
            ) {
                document.getElementsByClassName(
                    'terminal'
                )[0].innerHTML = document
                    .getElementsByClassName('terminal')[0]
                    .innerHTML.substring(
                        0,
                        document.getElementsByClassName('terminal')[0].innerHTML
                            .length - 1
                    );
                setTimeout(type, speedBackspace);
            }
            // If text has been removed
            else {
                displayHelpText = true;
                backspace = false;
                i = 0;
                setTimeout(type, startDelay);
            }
        }
    }
}

type();
