const form = document.querySelector("#form");
const rangeNumber = form.querySelector("input");
const guessNumber = form.querySelector("#guessNumber");
const choose = form.querySelector(".choose");
const result = form.querySelector(".result");


function handleSubmitNumber(event){
    event.preventDefault();
    const answer = rangeNumber.value;
    const answer2 = guessNumber.value;

   
    if(0 < answer2 && answer2 <= answer){
        let machineNum = Math.floor(Math.random()*answer);
        choose.innerText = `You chose:${answer2},the machine chose:${machineNum}.`
        if(answer2 == machineNum){
            result.innerText = "you Won!";
        }else{
            result.innerText = "you lost!";
        }
    }else {
        console.log('no');
    }
}

form.addEventListener("submit",handleSubmitNumber);


