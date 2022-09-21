const reset = document.getElementById('reset');

const tipSpan = document.getElementById('tip');
const totalSpan = document.getElementById('total');

const custom = document.getElementById('custom');
const people = document.getElementById('people');
document.getElementById("people").defaultValue = 1;

const tipbtn5 = document.getElementById('tipbtn5');
const tipbtn10 = document.getElementById('tipbtn10');
const tipbtn15 = document.getElementById('tipbtn15');
const tipbtn25 = document.getElementById('tipbtn25');
const tipbtn50 = document.getElementById('tipbtn50');

const error = document.getElementById('error');

const currBill = document.getElementById('totalamt');


custom.addEventListener("input", function (e) {

    if ((this.value > 0 || this.value < 100)){
        resetTipBtn();
        total(this.value)
    }
    
});

people.addEventListener('input', function (e) {
    if ((this.value) <= 0){
        error.innerText = "Can't be zero"
        people.style.border = "1px solid red";
    }
    else{
        error.innerText = ""
        this.style.border = "2px solid hsl(172, 67%, 45%)";

    }
});

currBill.addEventListener('input', function (e) {

    if (this.value >= 0){
        resetTipBtn();
        console.log(this.value);
    }

});




var ppl = (document.getElementById('people').value);

function total(percent){

    var bill =  parseFloat(document.getElementById('totalamt').value);

    if (percent == 5 && !(bill == 0 || isNaN(bill))){
        resetTipBtn();
        tipbtn5.style.backgroundColor="hsl(172, 100%, 40%)";
    }
    else if(percent == 10 && !(bill == 0 || isNaN(bill))){
        resetTipBtn();
        tipbtn10.style.backgroundColor="hsl(172, 100%, 40%)";
    }
    else if(percent == 15 && !(bill == 0 || isNaN(bill))){
        resetTipBtn();
        tipbtn15.style.backgroundColor="hsl(172, 100%, 40%)";
    }
    else if(percent == 25 && !(bill == 0 || isNaN(bill))){
        resetTipBtn();
        tipbtn25.style.backgroundColor="hsl(172, 100%, 40%)";
    }
    else if(percent == 50 && !(bill == 0 || isNaN(bill))){
        resetTipBtn();
        tipbtn50.style.backgroundColor="hsl(172, 100%, 40%)";
    }

    

    if (bill == 0 || isNaN(bill)){
        totalSpan.innerText = 0;
        tipSpan.innerText = 0;    
    }
    else{
        var tip = ((percent/100) * bill);
        var totalval = bill + tip;
        totalSpan.innerText = perHead(totalval).toFixed(2);
        tipSpan.innerText = perHead(tip).toFixed(2);
    }
}


function resetTipBtn(){
        tipbtn5.style.backgroundColor = "hsl(183, 100%, 15%)";
        tipbtn10.style.backgroundColor = "hsl(183, 100%, 15%)";
        tipbtn15.style.backgroundColor = "hsl(183, 100%, 15%)";
        tipbtn25.style.backgroundColor = "hsl(183, 100%, 15%)";
        tipbtn50.style.backgroundColor = "hsl(183, 100%, 15%)";
}


function perHead(total){
    var ppl = (document.getElementById('people').value);
    return (total / ppl);
}

function Reset(){

    var bill = (document.getElementById('totalamt').value) = 0;
    var ppl = (document.getElementById('people').value) = 1;
    resetTipBtn()
    tipSpan.innerText = 0;
    totalSpan.innerText = 0;
    

}