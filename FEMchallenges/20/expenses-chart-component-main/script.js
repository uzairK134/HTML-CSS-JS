const monbar = document.getElementById("monbar");
const teubar = document.getElementById("teubar");
const wedbar = document.getElementById("wedbar");
const thubar = document.getElementById("thubar");
const fribar = document.getElementById("fribar");
const satbar = document.getElementById("satbar");
const sunbar = document.getElementById("sunbar");

var monamount = 15;
var teuamount = 32;
var wedamount = 52.36;
var thuamount = 31.07;
var friamount = 22;
var satamount = 45;
var sunamount = 28;

function getPercent(amount){
    return ((amount/75) * 100)
}

monbar.style.height = `${getPercent(monamount)}%`
teubar.style.height = `${getPercent(teuamount)}%`
wedbar.style.height = `${getPercent(wedamount)}%`
thubar.style.height = `${getPercent(thuamount)}%`
fribar.style.height = `${getPercent(friamount)}%`
satbar.style.height = `${getPercent(satamount)}%`
sunbar.style.height = `${getPercent(sunamount)}%`


const monamt = document.getElementById("monamt")
const teuamt = document.getElementById("teuamt")
const wedamt = document.getElementById("wedamt")
const thuamt = document.getElementById("thuamt")
const friamt = document.getElementById("friamt")
const satamt = document.getElementById("satamt")
const sunamt = document.getElementById("sunamt")

monamt.innerText = `${monamount}$`
teuamt.innerText = `${teuamount}$`
wedamt.innerText = `${wedamount}$`
thuamt.innerText = `${thuamount}$`
friamt.innerText = `${friamount}$`
satamt.innerText = `${satamount}$`
sunamt.innerText = `${sunamount}$`
