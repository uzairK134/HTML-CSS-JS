const advice = document.querySelector('#adviceId');
const content = document.querySelector('#contentId');
const btn = document.querySelector('#btn');


function getAdvice(){
    fetch('https://api.adviceslip.com/advice').then(response => {
    
    return response.json();
    console.log(response.json());
      
}).then(adviceData => {
    const num = adviceData.slip.id;
    const advicecontent = adviceData.slip.advice;

    advice.textContent = num;
    content.innerHTML = `<p>${advicecontent}</p>`;

}).catch(error => {
    console.log(error);
})

}

btn.addEventListener('click', function() {
    getAdvice();
})

window.onload = () => {
    getAdvice();
}