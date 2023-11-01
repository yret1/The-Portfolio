

let bodyElement = document.querySelector('body')
bodyElement.addEventListener('mousemove', updatePos)

let x = 0;
let y = 0;

let prevX = 0;
let prevY = 0;


function updatePos(ev){


    let dx = x - prevX;
    let dy = y - prevY;
    let distance = Math.sqrt(dx * dx + dy * dy);  
    
    if(distance > 20){
    
        prevX = x;
        prevY = y;
    }

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


let rocket = document.getElementById("rocket")
let buttonSub = document.getElementById("submitKnapp")


buttonSub.addEventListener("click", rocketLaunch)



function rocketLaunch(){

    rocket.save()

    rocket.style.translate = "0 -1500px";


    setTimeout(() => {
        document.getElementById('emailForm').submit();
      }, 3000);



}


