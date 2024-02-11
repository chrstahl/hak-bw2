// Brush variables
var brushRadius = 100;
// var brushRadius = (bridge.width / 100) * 15;

// Generate Canvas's and Top layer images for each page
var page1 = document.getElementById("page1");
var page1_Canvas = page1.getContext('2d');

var page2 = document.getElementById('page2');
var page2_Canvas = page2.getContext('2d');

var page3 = document.getElementById('page3');
var page3_Canvas = page3.getContext('2d');

var page4 = document.getElementById('page4');
var page4_Canvas = page4.getContext('2d');

var page5 = document.getElementById('page5');
var page5_Canvas = page5.getContext('2d');

var page6 = document.getElementById('page6');
var page6_Canvas = page6.getContext('2d');

var page7 = document.getElementById('page7');
var page7_Canvas = page7.getContext('2d');

var page8 = document.getElementById('page8');
var page8_Canvas = page8.getContext('2d');

var page9 = document.getElementById('page9');
var page9_Canvas = page9.getContext('2d');

var page10 = document.getElementById('page10');
var page10_Canvas = page10.getContext('2d');

var page11 = document.getElementById('page11');
var page11_Canvas = page11.getContext('2d');

var page12 = document.getElementById('page12');
var page12_Canvas = page12.getContext('2d');

var page13 = document.getElementById('page13');
var page13_Canvas = page13.getContext('2d');

page1_img = new Image();
page1_img.src = "./public/img/l1.jpg";

page2_img = new Image();
page2_img.src = "./public/img/l2.jpg";

page3_img = new Image();
page3_img.src = "./public/img/l3.jpg";

page4_img = new Image();
page4_img.src = "./public/img/l4.jpg";

page5_img = new Image();
page5_img.src = "./public/img/l5.jpg";

page6_img = new Image();
page6_img.src = "./public/img/l6.jpg";

page7_img = new Image();
page7_img.src = "./public/img/l7.jpg";

page8_img = new Image();
page8_img.src = "./public/img/l8.jpg";

page9_img = new Image();
page9_img.src = "./public/img/l9.jpg";

page10_img = new Image();
page10_img.src = "./public/img/l10.jpg";

page11_img = new Image();
page11_img.src = "./public/img/l11.jpg";

page12_img = new Image();
page12_img.src = "./public/img/l12.jpg";

page13_img = new Image();
page13_img.src = "./public/img/l13.jpg";

// if (brushRadius < 50) { brushRadius = 50 }

// Load the top layer images
page1_img.onload = function(){  
	page1_Canvas.drawImage(page1_img, 0, 0, page1.width, page1.height);
}

page2_img.onload = function(){
    page2_Canvas.drawImage(page2_img, 0, 0, page2.width, page2.height);
}

page3_img.onload = function(){
    page3_Canvas.drawImage(page3_img, 0, 0, page3.width, page3.height);
}

page4_img.onload = function(){
    page4_Canvas.drawImage(page4_img, 0, 0, page4.width, page4.height);
}

page5_img.onload = function(){
    page5_Canvas.drawImage(page5_img, 0, 0, page5.width, page5.height);
}

page6_img.onload = function(){
    page6_Canvas.drawImage(page6_img, 0, 0, page6.width, page6.height);
}

page7_img.onload = function(){
    page7_Canvas.drawImage(page7_img, 0, 0, page7.width, page7.height);
}

page8_img.onload = function(){
    page8_Canvas.drawImage(page8_img, 0, 0, page8.width, page8.height);
}

page9_img.onload = function(){
    page9_Canvas.drawImage(page9_img, 0, 0, page9.width, page9.height);
}

page10_img.onload = function(){
    page10_Canvas.drawImage(page10_img, 0, 0, page10.width, page10.height);
}

page11_img.onload = function(){
    page11_Canvas.drawImage(page11_img, 0, 0, page11.width, page11.height);
}

page12_img.onload = function(){
    page12_Canvas.drawImage(page12_img, 0, 0, page12.width, page12.height);
}

page13_img.onload = function(){
    page13_Canvas.drawImage(page13_img, 0, 0, page13.width, page13.height);
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

page3.addEventListener("mousemove", function(e) {
	var brushPos = getBrushPos(e.clientX, e.clientY, page3);
  var leftBut = detectLeftButton(e);
  if (leftBut == 1) {
		drawDot(brushPos.x, brushPos.y, page3);
  }
}, false);

page3.addEventListener("touchmove", function(e) {
    e.preventDefault();
    var touch = e.targetTouches[0];
    if (touch) {
    var brushPos = getBrushPos(touch.pageX, touch.pageY, page3);
        drawDot(brushPos.x, brushPos.y, page3);
    }
}, false);

page4.addEventListener("mousemove", function(e) {
	var brushPos = getBrushPos(e.clientX, e.clientY, page4);
  var leftBut = detectLeftButton(e);
  if (leftBut == 1) {
		drawDot(brushPos.x, brushPos.y, page4);
  }
}, false);

page4.addEventListener("touchmove", function(e) {
    e.preventDefault();
    var touch = e.targetTouches[0];
    if (touch) {
    var brushPos = getBrushPos(touch.pageX, touch.pageY, page4);
        drawDot(brushPos.x, brushPos.y, page4);
    }
}, false);

page5.addEventListener("mousemove", function(e) {
	var brushPos = getBrushPos(e.clientX, e.clientY, page5);
  var leftBut = detectLeftButton(e);
  if (leftBut == 1) {
		drawDot(brushPos.x, brushPos.y, page5);
  }
}, false);

page5.addEventListener("touchmove", function(e) {
    e.preventDefault();
    var touch = e.targetTouches[0];
    if (touch) {
    var brushPos = getBrushPos(touch.pageX, touch.pageY, page5);
        drawDot(brushPos.x, brushPos.y, page5);
    }
}, false);

page6.addEventListener("mousemove", function(e) {
	var brushPos = getBrushPos(e.clientX, e.clientY, page6);
  var leftBut = detectLeftButton(e);
  if (leftBut == 1) {
		drawDot(brushPos.x, brushPos.y, page6);
  }
}, false);

page6.addEventListener("touchmove", function(e) {
    e.preventDefault();
    var touch = e.targetTouches[0];
    if (touch) {
    var brushPos = getBrushPos(touch.pageX, touch.pageY, page6);
        drawDot(brushPos.x, brushPos.y, page6);
    }
}, false);

page7.addEventListener("mousemove", function(e) {
	var brushPos = getBrushPos(e.clientX, e.clientY, page7);
  var leftBut = detectLeftButton(e);
  if (leftBut == 1) {
		drawDot(brushPos.x, brushPos.y, page7);
  }
}, false);

page7.addEventListener("touchmove", function(e) {
    e.preventDefault();
    var touch = e.targetTouches[0];
    if (touch) {
    var brushPos = getBrushPos(touch.pageX, touch.pageY, page7);
        drawDot(brushPos.x, brushPos.y, page7);
    }
}, false);

page8.addEventListener("mousemove", function(e) {
	var brushPos = getBrushPos(e.clientX, e.clientY, page8);
  var leftBut = detectLeftButton(e);
  if (leftBut == 1) {
		drawDot(brushPos.x, brushPos.y, page8);
  }
}, false);

page8.addEventListener("touchmove", function(e) {
    e.preventDefault();
    var touch = e.targetTouches[0];
    if (touch) {
    var brushPos = getBrushPos(touch.pageX, touch.pageY, page8);
        drawDot(brushPos.x, brushPos.y, page8);
    }
}, false);

page9.addEventListener("mousemove", function(e) {
	var brushPos = getBrushPos(e.clientX, e.clientY, page9);
  var leftBut = detectLeftButton(e);
  if (leftBut == 1) {
		drawDot(brushPos.x, brushPos.y, page9);
  }
}, false);

page9.addEventListener("touchmove", function(e) {
    e.preventDefault();
    var touch = e.targetTouches[0];
    if (touch) {
    var brushPos = getBrushPos(touch.pageX, touch.pageY, page9);
        drawDot(brushPos.x, brushPos.y, page9);
    }
}, false);

page10.addEventListener("mousemove", function(e) {
	var brushPos = getBrushPos(e.clientX, e.clientY, page10);
  var leftBut = detectLeftButton(e);
  if (leftBut == 1) {
		drawDot(brushPos.x, brushPos.y, page10);
  }
}, false);

page10.addEventListener("touchmove", function(e) {
    e.preventDefault();
    var touch = e.targetTouches[0];
    if (touch) {
    var brushPos = getBrushPos(touch.pageX, touch.pageY, page10);
        drawDot(brushPos.x, brushPos.y, page10);
    }
}, false);

page11.addEventListener("mousemove", function(e) {
	var brushPos = getBrushPos(e.clientX, e.clientY, page11);
  var leftBut = detectLeftButton(e);
  if (leftBut == 1) {
		drawDot(brushPos.x, brushPos.y, page11);
  }
}, false);

page11.addEventListener("touchmove", function(e) {
    e.preventDefault();
    var touch = e.targetTouches[0];
    if (touch) {
    var brushPos = getBrushPos(touch.pageX, touch.pageY, page11);
        drawDot(brushPos.x, brushPos.y, page11);
    }
}, false);

page12.addEventListener("mousemove", function(e) {
	var brushPos = getBrushPos(e.clientX, e.clientY, page12);
  var leftBut = detectLeftButton(e);
  if (leftBut == 1) {
		drawDot(brushPos.x, brushPos.y, page12);
  }
}, false);

page12.addEventListener("touchmove", function(e) {
    e.preventDefault();
    var touch = e.targetTouches[0];
    if (touch) {
    var brushPos = getBrushPos(touch.pageX, touch.pageY, page12);
        drawDot(brushPos.x, brushPos.y, page12);
    }
}, false);

page13.addEventListener("mousemove", function(e) {
	var brushPos = getBrushPos(e.clientX, e.clientY, page13);
  var leftBut = detectLeftButton(e);
  if (leftBut == 1) {
		drawDot(brushPos.x, brushPos.y, page13);
  }
}, false);

page13.addEventListener("touchmove", function(e) {
    e.preventDefault();
    var touch = e.targetTouches[0];
    if (touch) {
    var brushPos = getBrushPos(touch.pageX, touch.pageY, page13);
        drawDot(brushPos.x, brushPos.y, page13);
    }
}, false);