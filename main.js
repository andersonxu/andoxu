// get Component
const ele = document.documentElement;
const title = document.getElementById("title");
const subtitleDiv=document.getElementById("subtitleDiv");
// get title attributes
const titleRect = title.getBoundingClientRect();
console.log(titleRect);
const titleX = titleRect.x + titleRect.width / 2,
    titleY = titleRect.y + titleRect.height / 2;
const titleLength = titleRect.right;
const titleRatio = titleLength / window.innerWidth * 100;
const centreX = titleLength, centreY = window.innerHeight / 2;

subtitleDiv.style.width=`${(titleRect.x+titleRect.width)*0.85}px`;

// initiate background colour
ele.style.background = `conic-gradient(from 1.75turn at ${titleRatio}% 50%, 
    #bbbbbb, 
    #aaaaaa, 128deg, 
    #ffffff, 140deg, 
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
    ele.style.background = `conic-gradient(from 1.75turn at ${titleRatio}% 50%,
         #bbbbbb, 
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