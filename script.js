

let bodyElement = document.querySelector('body')
bodyElement.addEventListener('mousemove', function(event){
    let x = event.clientX;
    let y = event.clientY;

    let centerX = window.innerHeight / 2;
    let centerY = window.innerHeight / 2;
    let radianAngle = Math.atan2( y - centerY, x - centerX);
    let degreeAngle = radianAngle * (180/Math.PI);

    let cursor = document.getElementsByClassName("cursor");
    cursor[0].style.transform = `rotate(${degreeAngle}deg)`
    cursor[0].style.left = x + 'px';
    cursor[0].style.top = y + 'px';
})

