let currentNumber = 0

function decrement() {
    currentNumber--
    attCurrentNumber()
}

function increment() {
    currentNumber++
    attCurrentNumber()
    
}

function reset() {
    currentNumber = 0
    attCurrentNumber()
}

function attCurrentNumber(){
    const numUser = document.getElementById("currentNumber")
    numUser.innerText = currentNumber
    if (currentNumber > 0){
        numUser.classList.add('positive')
        numUser.classList.remove('negative')
    }else if (currentNumber < 0){
        numUser.classList.add('negative')
        numUser.classList.remove('positive')
    }else if (currentNumber == 0){
        numUser.classList.remove('positive')
        numUser.classList.remove('negative')
    }
}



attCurrentNumber()
