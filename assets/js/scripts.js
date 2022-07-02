let currentNumber = 0

function decrement() {
    currentNumber--
    console.log(currentNumber)
    attCurrentNumber()
}

function increment() {
    currentNumber++
    console.log(currentNumber)
    attCurrentNumber()
}

function reset() {
    currentNumber = 0
    console.log(currentNumber)
    attCurrentNumber()
}

function attCurrentNumber(){
    const numUser = document.getElementById("currentNumber")
    numUser.innerText = currentNumber
    console.log(numUser)
}

attCurrentNumber()