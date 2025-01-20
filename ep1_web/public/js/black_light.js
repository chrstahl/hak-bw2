// Brush variables
var brushRadius = 100;
// var brushRadius = (bridge.width / 100) * 15;
var page_count = document.currentScript.attributes.page_count.value;
var page_width = document.currentScript.attributes.page_w.value;
var page_height = document.currentScript.attributes.page_h.value;
var img_prefix = document.currentScript.attributes.img_pre.value;


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

function load_image(i){
    var page_canvas = document.createElement("canvas");
    page_canvas.style = "display: block; margin: 0 auto; background-image: linear-gradient( rgba(64,8,152,.4), rgba(64,8,152,.4) ), url('./public/img/"
    + img_prefix + i + ".jpg');" +
	"background-size: 100%; width: auto; height: auto; cursor: crosshair; cursor: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/circular-cursor.png) 53 53, crosshair;"
    page_canvas.width = page_width;
    page_canvas.height = page_height;
    

    var page_figure = document.createElement("figure");
    page_figure.id = "docContainer";


    var ctx = page_canvas.getContext("2d");

    var page_img = new Image();
    page_img.src = "./public/img/" + img_prefix + i + ".jpg";

    page_img.onload = function(){  
        ctx.drawImage(page_img, 0, 0, page_canvas.width, page_canvas.height);
    }
    page_canvas.id = "page" + i;
    page_figure.appendChild(page_canvas);
    document.getElementById('cover').appendChild(page_figure);
    
    page_canvas.addEventListener("mousemove", function(e) {
        var brushPos = getBrushPos(e.clientX, e.clientY, page_canvas);
      var leftBut = detectLeftButton(e);
      if (leftBut == 1) {
            drawDot(brushPos.x, brushPos.y, page_canvas);
      }
    }, false);
    
    page_canvas.addEventListener("touchmove", function(e) {
        e.preventDefault();
        var touch = e.targetTouches[0];
        if (touch) {
        var brushPos = getBrushPos(touch.pageX, touch.pageY, page_canvas);
            drawDot(brushPos.x, brushPos.y, page_canvas);
        }
    }, false);

    if(i = page_count){
        document.getElementById('cover').style.display = "block";
    }

}

for(var i = 1; i <= page_count; i++){
    load_image(i);
}