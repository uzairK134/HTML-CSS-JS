const fill = document.getElementById('fill')

var max = 1000
var val = 815

var spaceleft = max - val

const spacerem = document.getElementById('rect')
const spacediv = document.getElementById('notice')


function setprogress(val, max){
    fill.style.width = `${(val / max) * 100}%`
    document.getElementById('space').innerText = `${val}`
    document.getElementById('max').innerText = `${max} GB`

}


function displayleft(x){
    if (x === 1){
        spacediv.style.display = "block"
    }
    else{
        spacediv.style.display = "none"
    }
}


window.onload = function(){
    setprogress(val, max);
    spacerem.innerText = `${spaceleft} GB`

}