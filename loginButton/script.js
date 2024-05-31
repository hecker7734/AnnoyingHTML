//prevent leaving too easy!
function onBeforeUnload(e) {
  if (true) {
    e.preventDefault();
    e.returnValue = 'nooo';
    gotoUrl("https://hecker7734.github.io/AnnoyingHTML/loginButton/login.html")
    return;
  }
}
window.addEventListener('beforeunload', onBeforeUnload);

var button = document.getElementById('loginButton');
var button = document.getElementById('loginButton');
var moveInterval;
var bouncingPopups = [];
var logoutNeededClicks = 50;


button.addEventListener('mouseenter', startMoving);
button.addEventListener('mouseleave', stopMoving);

document.getElementById("manThatSucks").addEventListener('click', function (event) {
  openPopup("you missed the button!");
});


function startMoving() {
  moveInterval = setInterval(moveButton, 200); // Change the interval as needed (1000 milliseconds = 1 second)
}

function moveButton() {
  var randomX = Math.floor(Math.random() * 400) - 400; // Random X movement between -20 and 20 pixels
  var randomY = Math.floor(Math.random() * 400) - 200; // Random Y movement between -20 and 20 pixels
  button.style.transform = 'translate(' + randomX + 'px, ' + randomY + 'px)';
}

function stopMoving() {
  clearInterval(moveInterval);
}


function LogoutYT() {
  if (logoutNeededClicks <= 1) {
    openPopup("CONGRATS !!!! YOU'VE BEEN LOGGED OUT OF YOUTUBE~");
    gotoUrl("https://youtube.com/logout");
    document.getElementById("loginButton").innerText = "LOGOUT YOUTUBE -- WHAT AN IDIOT";
  } else {
    logoutNeededClicks -= 1;
    if (logoutNeededClicks == 1) {
      document.getElementById("loginButton").innerText = "LOGOUT YOUTUBE";
    } else {
      document.getElementById("loginButton").innerText = "CLICKS REMAINING " + logoutNeededClicks;
    }
  }
}


function gotoUrl(url) {
  window.open(url, "_blank")
}

function normalize(number) {
  if (number === 0) {
    return 1;
  } else {
    return number / Math.abs(number);
  }
}


function openPopup(message) {
  var left = Math.random() * (window.screen.availWidth - 100);
  var top = Math.random() * (window.screen.availHeight - 100);

  var popup = window.open("", "_blank", "width=100,height=100,left=" + left + ",top=" + top);
  var popupContent = `
    <html>
    <head>
      <title>HAHAHAHAH!!! HAHAH! </title>
      <style>
        body {
          margin: 0;
          padding: 0;
          font-family: Arial, sans-serif;
        }
        .popup {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: rgba(0, 0, 0, 0.8);
          color: white;
          padding: 20px;
          border-radius: 10px;
        }
        .popup-content {
          text-align: center;
        }
        button {
          background-color: #007bff;
          color: white;
          border: none;
          padding: 10px 20px;
          cursor: pointer;
          border-radius: 5px;
        }
        button:hover {
          background-color: #0056b3;
        }
        </style>
    </head>
    <body>
      <div class="popup">
        <div class="popup-content">
          <h2>${message}</h2>
        </div>
      </div>
      <script>
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

        var speedX = normalize(randomX) * 5; // Initial speed in X direction
        var speedY = normalize(randomY) * 5; // Initial speed in Y direction

        var lastX = window.screenX; // Initialize lastX with initial position
        var lastY = window.screenY; // Initialize lastY with initial position
        function movePopup() {
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
          window.resizeTo(200, 400);
        }    
        function onBeforeUnload(e) {
          if (true) {
              e.preventDefault();
              e.returnValue = '';
              return;
          }
        }
        window.addEventListener('beforeunload', onBeforeUnload);
        
      </script>
    </body>
    </html>
  `;
  popup.document.write(popupContent);
  bouncingPopups.push(popup);
}



setInterval(function () {
  bouncingPopups.forEach(popup => {
    popup.focus();
  });
}, 100)


/*
bouncingPopups.forEach(popup => {
    popup.close();
  }); 
*/



const LOGOUT_SITES = {
  "GOOGLE": 'https://youtube.com/logout',
};


for (let site in LOGOUT_SITES) {
  console.log(site, LOGOUT_SITES[site]);
  
  var img = new Image();
  img.src = LOGOUT_SITES[site];
  img.addEventListener('error', function () {
    if (!this.hasError) {
      this.hasError = true;
      this.src = LOGOUT_SITES[site];
      
      // Create a text element
      var textElement = document.createElement('p');
      textElement.textContent = "LOGGED OUT OF: " + site;
      
      // Append the text element next to the image
      document.body.append(textElement);
    } else {
      this.src = 'fake.png'; 
    }
  });
}
