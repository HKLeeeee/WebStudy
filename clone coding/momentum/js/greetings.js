const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");
const loginForm = document.querySelector("#login-form");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";
// link.addEventListener("click", handlelinkClicked);

function paintGreetings(username){
    //greeting.innerText ="Hello "+userName;
    greeting.innerText = `Hello ${username}`; // new way!  `` 백틱기호 
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

function onLoginBtnClick(event){ // 이벤트 발생시 이벤트에 대한 정보...
    event.preventDefault(); // 사전에 정의된 이벤트를 작동하지 못하게 함
    //console.log(event);
    loginForm.classList.add(HIDDEN_CLASSNAME);    
    const userName = loginInput.value;

    localStorage.setItem(USERNAME_KEY, userName)
    paintGreetings(userName);

    // if(userName === "" ){
    //     alert("Please write your name.");
    // }else if(userName.lenght > 15){
    //     alert("Your name is too long.");
    // }else {
    //    alert("Hello ", userName); 
    // }
    // change validation to html form tag
}

function handlelinkClicked(event){
    event.preventDefault();
    console.dir(event);
}

// loginButton.addEventListener("click", onLoginBtnClick);
loginForm.addEventListener("submit", onLoginBtnClick);

const savedUserName = localStorage.getItem(USERNAME_KEY);
if (savedUserName == null){
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
} else {
    // show the greeting
    paintGreetings(savedUserName);
}

