let num1 = 0
document.getElementById("guest-score").textContent = num1
document.getElementById("home-score").textContent = num1
let HomeScore = document.getElementById("home-score")
let GuestScore = document.getElementById("guest-score")
let scorehome = num1;
let scoreguest = num1;

function homeadd1() {
    scorehome += 1
    HomeScore.textContent = scorehome
}

function homeadd2() {
    scorehome += 2
    HomeScore.textContent = scorehome
}

function homeadd3() {
    scorehome += 3
    HomeScore.textContent = scorehome
}

function guestadd1() {
    scoreguest += 1
    GuestScore.textContent = scoreguest
}

function guestadd2() {
    scoreguest += 2
    GuestScore.textContent = scoreguest
}

function guestadd3() {
    scoreguest += 3
    GuestScore.textContent = scoreguest
}
