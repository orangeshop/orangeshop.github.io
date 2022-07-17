const clock = document.querySelector("#clock");



function clock_time()
{
    const date = new Date();
    const hour =  String(date.getHours()).padStart(2,"0");
    const minute =  String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");

    clock.innerText = `${hour}h : ${minute}m :${seconds}s`;

}


clock_time();
setInterval(clock_time, 1000);