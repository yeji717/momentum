// const title = document.getElementById("title");
// console.dir(title);

// const section = document.querySelectorAll('.wrap>section');

// for (var i = 0; i < section.length; i++) {
//     section[i].addEventListener("mousewheel", function (e) {
//             console.log(e);
//             console.log(this);
//             if(e.wheelDelta < 0){
//                 // window.scrollTo = this.nextElementSibling.offsetTop;
//                 console.log(this.nextElementSibling.offsetTop);
//                 window.scrollTo({top:this.nextElementSibling.offsetTop, behavior:"smooth"});
//                 // window.scrollTop = this.nextElementSibling.offset().top;
//             } else if (e.wheelDelta > 0) {
//                 window.scrollTo({top:this.previousElementSibling.offsetTop,behavior:"smooth"});
//             } 
            
//     });
//     if(i >= section.length){
//         break;
//     }
// }

// const index = document.querySelector('h1');

// function handleTitleClick(){
//     const currentColor = index.style.color;
//     let newColor;
//     if(currentColor === "pink"){
//         newColor = "tomato";
//     }else{
//         newColor = "pink";
//     }
//     index.style.color = newColor;
// }
// index.addEventListener("click",handleTitleClick);

// let back = document.querySelector('body');
// const yellow = "yellow";
// const blue = "blue";
// const pink = "pink";

// function resizing(){
//     const width = window.innerWidth;
//     if(width <= 800){
//         back.classList.remove(pink);
//         back.classList.add(blue);
       
//     }else if (800<= width && width <= 1200) {
//         back.classList.remove(blue);
//         back.classList.add(pink);

//     }else if (1200 < width){
//         back.classList.remove(pink);
//         back.classList.add(yellow);
    
//     }
    
// }

// window.addEventListener("resize", resizing);


    // section[section.length].addEventListener("wheel", function (e) {

    //     console.log(e);
    //     console.log(this.nextElementSibling);
    // });

const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function handleLoginBtn(event){
    event.preventDefault();
    const name = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME); 
    localStorage.setItem(USERNAME_KEY,name);
    paintGreetings();
}

function handleLinkClick(event){
    event.preventDefault();
    console.log(event);
    alert("clicked!");
}

function paintGreetings(){
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}


// loginForm.addEventListener("submit",handleLoginBtn);
// link.addEventListener("click",handleLinkClick);

const saveUsername = localStorage.getItem(USERNAME_KEY);

if(saveUsername === null){
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",handleLoginBtn);
}else{
    paintGreetings();
    // show the greetings
}