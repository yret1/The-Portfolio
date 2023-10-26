let bodyElement = document.querySelector('body')
bodyElement.addEventListener('mousemove', getMousePosition, false)


var xDirection = "";
var yDirection = "";

var oldX ="";
var oldY ="";



function getMousePosition(xy){

    if(oldX < xy.pageX){
        xDirection = "right;"
    }else{
        xDirection ="left";
    }

    if(oldY < xy.pageY){
        yDirection = "down";
    }else{
        yDirection = "up";
    }

    oldX = xy.pageX
    oldY = xy.pageY
    return[xDirection,yDirection]
}

console.log(getMousePosition())
