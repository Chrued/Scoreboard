let scoreHome = document.getElementById ("score-home")

let Home = 0

function incrementHome1() {
    console.log("button plus1 clicked")
    Home += 1
    scoreHome.innerText = Home
}

function incrementHome2() {
    console.log("button plus2 clicked")
    Home += 2
    scoreHome.innerText = Home
}

function incrementHome3() {
    console.log("button plus3 clicked")
    Home += 3
    scoreHome.innerText = Home
}


let scoreGuest = document.getElementById ("score-guest")
let Guest = 0

function incrementGuest1() {
    console.log("button plus1 clicked")
    Guest += 1
    scoreGuest.innerText = Guest
}

function incrementGuest2() {
    console.log("button plus2 clicked")
    Guest += 2
    scoreGuest.innerText = Guest
}

function incrementGuest3() {
    console.log("button plus3 clicked")
    Guest += 3
    scoreGuest.innerText = Guest
}
