// Brush variables
var brushRadius = 100;
// var brushRadius = (bridge.width / 100) * 15;

// Generate Canvas's and Top layer images for each page
var page1 = document.getElementById("page1");
var page1_Canvas = page1.getContext('2d');

var page2 = document.getElementById('page2');
var page2_Canvas = page2.getContext('2d');


page1_img = new Image();
page1_img.src = "./public/img/h1.jpg";

page2_img = new Image();
page2_img.src = "./public/img/h2.jpg";


// if (brushRadius < 50) { brushRadius = 50 }

// Load the top layer images
page1_img.onload = function(){  
	page1_Canvas.drawImage(page1_img, 0, 0, page1.width, page1.height);
}

page2_img.onload = function(){
    page2_Canvas.drawImage(page2_img, 0, 0, page2.width, page2.height);
    document.getElementById('cover').style.display = "block"
}

function detectLeftButton(event) {
    if ('buttons' in event) {
        return event.buttons === 1;
    } else if ('which' in event) {
        return event.which === 1;
    } else {
        return event.button === 1;
    }
}

function getBrushPos(xRef, yRef, elem) {
    var pRect = elem.getBoundingClientRect();
    return {
        x: Math.floor((xRef-pRect.left)/(pRect.right-pRect.left)*elem.width),
        y: Math.floor((yRef-pRect.top)/(pRect.bottom-pRect.top)*elem.height)
      };
}
      
function drawDot(mouseX,mouseY, elem){
    pCanv = elem.getContext('2d'),
	pCanv.beginPath();
    pCanv.arc(mouseX, mouseY, brushRadius, 0, 2*Math.PI, true);
    pCanv.fillStyle = '#000';
    pCanv.globalCompositeOperation = "destination-out";
    pCanv.fill();
}

page1.addEventListener("mousemove", function(e) {
	var brushPos = getBrushPos(e.clientX, e.clientY, page1);
  var leftBut = detectLeftButton(e);
  if (leftBut == 1) {
		drawDot(brushPos.x, brushPos.y, page1);
  }
}, false);

page1.addEventListener("touchmove", function(e) {
    e.preventDefault();
    var touch = e.targetTouches[0];
    if (touch) {
    var brushPos = getBrushPos(touch.pageX, touch.pageY, page1);
        drawDot(brushPos.x, brushPos.y, page1);
    }
}, false);

page2.addEventListener("mousemove", function(e) {
	var brushPos = getBrushPos(e.clientX, e.clientY, page2);
  var leftBut = detectLeftButton(e);
  if (leftBut == 1) {
		drawDot(brushPos.x, brushPos.y, page2);
  }
}, false);

page2.addEventListener("touchmove", function(e) {
    e.preventDefault();
    var touch = e.targetTouches[0];
    if (touch) {
    var brushPos = getBrushPos(touch.pageX, touch.pageY, page2);
        drawDot(brushPos.x, brushPos.y, page2);
    }
}, false);