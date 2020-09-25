const ele = document.documentElement;
const title = document.getElementById("title");
const titleRect = title.getBoundingClientRect();
const titleX = titleRect.x + titleRect.width / 2,
    titleY = titleRect.y + titleRect.height / 2;
const titleLength = titleRect.x + titleRect.width;
const titleRatio = titleLength / window.innerWidth * 100;
const centreX = titleLength, centreY = window.innerHeight / 2;
ele.style.background = `conic-gradient(from -90deg at ${titleRatio}% 50%, 
    #bbbbbb, 
    #aaaaaa, 173deg, 
    #ffffff, 185deg, 
    #444444, 
    #000000)`;
title.style.textShadow = '10px 10px 3px #444444';
var degree = -90;
document.addEventListener('mousemove', (info) => {
    const b = info.clientX - centreX, a = info.clientY - centreY;
    if (b != 0) {
        if (b > 0) {
            degree = Math.atan(a / b) * 180 / Math.PI;
        }
        else {
            degree = Math.atan(a / -b) * 180 / Math.PI;
        }
    }
    ele.style.background = `conic-gradient(from -90deg at ${titleRatio}% 50%,
         #ffffff,1deg,
         #bbbbbb,2deg, 
         #aaaaaa, ${173 + degree}deg, 
         #ffffff, ${185 + degree}deg, 
         #777777,
         #555555,
         #222222,
         #000000)`;
    const shadow = {
        x: -Math.abs(scaleShadow(-b)),
        y: scaleShadow(-a)
    };
    title.style.textShadow = `${shadow.x}px ${shadow.y}px 3px #444444`;
})

function scaleShadow(coordinate) {
    return Math.sign(coordinate) * Math.log(Math.abs(coordinate));
}