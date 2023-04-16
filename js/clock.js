(function(){

    let spanEl = document.querySelector('.clock span');

    function getTime(){
        const date = new Date();

        const hours = String(date.getHours()).padStart(2,"0");
        const minutes = String(date.getMinutes()).padStart(2,"0");
        const second = String(date.getSeconds()).padStart(2,"0");
        // console.log(hours,minutes,second)

        spanEl.innerText = `${hours}:${minutes}:${second}`;
    }
    getTime();


    setInterval(getTime,1000);

    /*
    
        setTimeOut, setInterval
    
        setTimeOut(실행함수,ms);
        => 일정 시간 이후 한번만 실행되는 함수

        setInterval(실행함수,ms)
        => 일정 시간 마다 실행되는 함수

        padStart 
        => padding start

        padStart(만들고싶은 문자열 길이, "앞에붙힐 문자");
        padStart(2,"0");

    */



})();//end