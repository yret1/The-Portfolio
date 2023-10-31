

let bodyElement = document.querySelector('body')
bodyElement.addEventListener('mousemove', updatePos)

let x = 0;
let y = 0;

let prevX = 0;
let prevY = 0;


function updatePos(ev){
    
    
      prevX = x;
      prevY = y;

    x = ev.clientX
    y = ev.clientY

    let centerX = prevX;
    let centerY = prevY;
    let radianAngle = Math.atan2( y - centerY, x - centerX);
    let degreeAngle = radianAngle * (180/Math.PI);
    let degreeAngleCompensated = (degreeAngle + 90) % 360;

    let cursor = document.getElementsByClassName("cursor");
    cursor[0].style.transform = `rotate(${degreeAngleCompensated}deg)`
    cursor[0].style.left = x + 'px';
    cursor[0].style.top = y + 'px';
}

