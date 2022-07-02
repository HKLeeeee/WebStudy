const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const Hours = String(date.getHours()).padStart(2, "0");
    const Minutes = String(date.getMinutes()).padStart(2, "0");
    const Seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${Hours}:${Minutes}:${Seconds}`;
}

getClock();  // 브라우저 실행한 후 1초 지연없이 바로 보이게 하기 위해서
setInterval(getClock, 1000);
