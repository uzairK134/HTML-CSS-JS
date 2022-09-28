const daily = document.getElementById('daily')
const weekly = document.getElementById('weekly')
const monthly = document.getElementById('monthly')


const Workhrs = document.getElementById("Workhrs")
const Playhrs = document.getElementById("Playhrs")
const Studyhrs = document.getElementById("Studyhrs")
const Exercisehrs = document.getElementById("Exercisehrs")
const Socialhrs = document.getElementById("Socialhrs")
const SelfCarehrs = document.getElementById("SelfCarehrs")

const WorkPrev = document.getElementById("WorkPrev")
const PlayPrev = document.getElementById("PlayPrev")
const StudyPrev = document.getElementById("StudyPrev")
const ExercisePrev = document.getElementById("ExercisePrev")
const SocialPrev = document.getElementById("SocialPrev")
const SelfCarePrev = document.getElementById("SelfCarePrev")

var daylog = [5,1,0,1,1,0]
var weeklog = [32,10,4,5,10,2]
var monthlog = [103,20,13,11,21,7]

var dayPrev = [7,2,1,1,3,1]
var weekPrev = [36,8,7,5,10,2]
var monthPrev = [128,29,19,18,23,11]





function resetfilter(){
    daily.style.color = "hsl(235, 45%, 61%)"
    weekly.style.color = "hsl(235, 45%, 61%)"
    monthly.style.color = "hsl(235, 45%, 61%)"
}

function setfilterDaily(){
    resetfilter()
    daily.style.color = "white"

    Workhrs.innerText = daylog[0]
    WorkPrev.innerText = dayPrev[0]

    Playhrs.innerText = daylog[1]
    PlayPrev.innerText = dayPrev[1]

    Studyhrs.innerText = daylog[2]
    StudyPrev.innerText = dayPrev[2]

    Exercisehrs.innerText = daylog[3]
    ExercisePrev.innerText = dayPrev[3]

    Socialhrs.innerText = daylog[4]
    SocialPrev.innerText = dayPrev[4]

    SelfCarehrs.innerText = daylog[5]
    SelfCarePrev.innerText = dayPrev[5]

}

function setfilterWeekly(){
    resetfilter()
    weekly.style.color = "white"

    Workhrs.innerText = weeklog[0]
    WorkPrev.innerText = weekPrev[0]

    Playhrs.innerText = weeklog[1]
    PlayPrev.innerText = weekPrev[1]

    Studyhrs.innerText = weeklog[2]
    StudyPrev.innerText = weekPrev[2]

    Exercisehrs.innerText = weeklog[3]
    ExercisePrev.innerText = weekPrev[3]

    Socialhrs.innerText = weeklog[4]
    SocialPrev.innerText = weekPrev[4]

    SelfCarehrs.innerText = weeklog[5]
    SelfCarePrev.innerText = weekPrev[5]
}

function setfilterMonthly(){
    resetfilter()
    monthly.style.color = "white"

    Workhrs.innerText = monthlog[0]
    WorkPrev.innerText = monthPrev[0]

    Playhrs.innerText = monthlog[1]
    PlayPrev.innerText = monthPrev[1]

    Studyhrs.innerText = monthlog[2]
    StudyPrev.innerText = monthPrev[2]

    Exercisehrs.innerText = monthlog[3]
    ExercisePrev.innerText = monthPrev[3]

    Socialhrs.innerText = monthlog[4]
    SocialPrev.innerText = monthPrev[4]

    SelfCarehrs.innerText = monthlog[5]
    SelfCarePrev.innerText = monthPrev[5]

}


window.onload = setfilterWeekly()