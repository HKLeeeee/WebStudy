// alert('hi');
// // console.log()

// const a = 5; // const 상수
// const b = 2;  // 변수명은 camel case
// let myName = 'heeee';
// // 옛날에는 var만 있었음. var은 업데이트 가능함.
// // const와 let이 새로 생긴 것!
// // always const, sometimes let, never var

// console.log(a * b);

// console.log('Hello ' + myName);
// myName = 'Heekyoung'
// //  b = 3 => error 
// console.log('Hello ' + myName);


////// Array ///////
// const daysOfWeek = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat']
// // [1, 2, 'hello', false, null, undefined, 'nico']
// console.log(daysOfWeek[5])

// daysOfWeek.push('sun')
// console.log(daysOfWeek)

// console.log(daysOfWeek.pop())




// ///// Function /////
// function hi(name) {
//     console.log('Hi '+name);
// }

// hi('hk');
// hi('nico');

// ////// Object ///////////
// const player = {
//     name : 'nico',
//     points : 10,
//     fat : true,
//     sayHello : function(otherPersonName) {
//         console.log('Hello! '+otherPersonName);
//         console.log('I\'m '+this.name);
//     }
// };
// console.log(player);
// player.lastname = 'potato';
// console.log(player);

// player.sayHello('Heeeee');

/// ctrl + D ---- / ctrl + shift + L (all)
// const calculator = {
//     plus : function(a,b){
//         return a+b;
//     },
//     minus : function(a,b){
//         return a-b;
//     },
//     times : function(a,b) {
//         return a*b;
//     },
//     divide : function(a,b){
//         return a/b;
//     },
//     power : function(a,b){
//         return a**b;
//     }
// }

// const a = 1;
// const b = 5;
// console.log(calculator.plus(a,b));


////// Conditionals ///////////
// const age = parseInt(prompt('How old are you?'));
// console.log(typeof age);

// if(isNaN(age) || age < 0){
//     console.log('Please write a real positive number');
// } else if(age < 18){
//     console.log('You are too young.');
// } else if (age >=18 && age <= 70){ 
//     console.log('You can drink')
// } else if (age > 70) {
//     console.log('You should not drink');
// }
function handleClickEx() {
    alert('Button was clicked');
}

function handleTitleClick() {
    alert('Title was clicked');
}

function handleMouseEnter() {
    console.log('mouse is here!');
}
function handleMouseLeave() {
    console.log('mouse is gone!');
}

window.onload = function() {
    const why = document.getElementById("header");
    // same as doument.querySelector("#header");
    console.dir(why);
    why.addEventListener("click", handleTitleClick);
    // same as why.onclick = handleTitleClick;
    why.addEventListener('mouseenter', handleMouseEnter);
    // .removeEventListener
    why.addEventListener('mouseleave', handleMouseLeave)
    const tt = document.getElementsByTagName('title');
    console.log(tt);
    console.dir(tt);

    const qSelector = document.querySelector(".hello h2"); // 첫번째 요소 하나만 가져옴
    // 모든 요소를 가져오려면 querySelecctorAll
    console.log(qSelector);
    qSelector.style.color = 'red';

}

console.log('외 않되?');


function handleWindowResize() {
    document.body.style.backgroundColor = 'tomato';
}
function handleWindowCopy(){
    alert('Copier!')
}
function handleWindowOnline(){
    alert('All Good')
}

function handleWindowOffline(){
    alert('Oops')
}

window.addEventListener('resize', handleWindowResize);
window.addEventListener('copy', handleWindowCopy);
window.addEventListener('online', handleWindowOnline);
window.addEventListener('offline', handleWindowOffline);