const clock = document.querySelector("h2#clock");

function sayHello() {
    console.log("hello");
}

function getClock() {
    const date = new Date();
    let hours = String(date.getHours()).padStart(2,"0");
    let minute = String(date.getMinutes()).padStart(2,"0");
    let seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText= `${hours}:${minute}:${seconds}`
   
}

getClock();
setInterval(getClock, 1000);


// setTimeout(sayHello, 2000);

// setInterval(sayHello, 2000);