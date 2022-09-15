document.getElementById("buttonOpen").addEventListener('click', function(){
    document.querySelector(".share").style.display = 'flex';
    document.getElementById("buttonClose").style.display = 'inline-block';
    document.getElementById("buttonOpen").style.display = 'none';
});

function reset(){
    document.querySelector(".share").style.display = 'none';
    document.querySelector(".buttonOpen").style.display = 'inline-block';
    document.querySelector(".buttonClose").style.display = 'none';
}

document.getElementById("buttonClose").addEventListener('click', reset);
document.getElementById("buttonCloseMobile").addEventListener('click', reset);