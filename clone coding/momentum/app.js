const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");
const loginForm = document.querySelector("#login-form");

function onLoginBtnClick(event){ // 이벤트 발생시 이벤트에 대한 정보...
    event.preventDefault(); // 사전에 정의된 이벤트를 작동하지 못하게 함
    console.log(event);
    const userName = loginInput.value;
    console.log(userName); 

    // if(userName === "" ){
    //     alert("Please write your name.");
    // }else if(userName.lenght > 15){
    //     alert("Your name is too long.");
    // }else {
    //    alert("Hello ", userName); 
    // }
    // change validation to html
}

// loginButton.addEventListener("click", onLoginBtnClick);
loginForm.addEventListener("submit", onLoginBtnClick);
