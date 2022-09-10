const submitButton = document.getElementById("subBtnId");

const cont1 = document.getElementById("cont1");
const cont2 = document.getElementById("cont2");
const ratingvar = document.getElementById("rating");

var rating = 0;



const rate1 = document.getElementById("rate1");
const rate2 = document.getElementById("rate2");
const rate3 = document.getElementById("rate3");
const rate4 = document.getElementById("rate4");
const rate5 = document.getElementById("rate5");

submitButton.addEventListener("click", function(e){
    if (rating != 0){
        cont1.style.display = "none";
        cont2.style.display = "grid";
        ratingvar.innerText = rating;
    }
    
});

rate1.addEventListener("click", function(e){
    rate1.style.background = "hsl(212, 15%, 25%)"
    rate2.style.background = "hsl(212, 15%, 25%)"
    rate3.style.background = "hsl(212, 15%, 25%)"
    rate4.style.background = "hsl(212, 15%, 25%)"
    rate5.style.background = "hsl(212, 15%, 25%)"
    e.target.style.background = "rgba(255,255,255, 0.75)";
    rating = 1;
});
rate2.addEventListener("click", function(e){
    rate1.style.background = "hsl(212, 15%, 25%)"
    rate2.style.background = "hsl(212, 15%, 25%)"
    rate3.style.background = "hsl(212, 15%, 25%)"
    rate4.style.background = "hsl(212, 15%, 25%)"
    rate5.style.background = "hsl(212, 15%, 25%)"
    e.target.style.background = "rgba(255,255,255, 0.75)";
    rating = 2;
});
rate3.addEventListener("click", function(e){
    rate1.style.background = "hsl(212, 15%, 25%)"
    rate2.style.background = "hsl(212, 15%, 25%)"
    rate3.style.background = "hsl(212, 15%, 25%)"
    rate4.style.background = "hsl(212, 15%, 25%)"
    rate5.style.background = "hsl(212, 15%, 25%)"
    e.target.style.background = "rgba(255,255,255, 0.75)";
    rating = 3;
});
rate4.addEventListener("click", function(e){
    rate1.style.background = "hsl(212, 15%, 25%)"
    rate2.style.background = "hsl(212, 15%, 25%)"
    rate3.style.background = "hsl(212, 15%, 25%)"
    rate4.style.background = "hsl(212, 15%, 25%)"
    rate5.style.background = "hsl(212, 15%, 25%)"
    e.target.style.background = "rgba(255,255,255, 0.75)";
    rating = 4;
});
rate5.addEventListener("click", function(e){
    rate1.style.background = "hsl(212, 15%, 25%)"
    rate2.style.background = "hsl(212, 15%, 25%)"
    rate3.style.background = "hsl(212, 15%, 25%)"
    rate4.style.background = "hsl(212, 15%, 25%)"
    rate5.style.background = "hsl(212, 15%, 25%)"
    e.target.style.background = "rgba(255,255,255, 0.75)";
    rating = 5;
});



