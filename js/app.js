(function(){

    let logInForm = document.querySelector('.login_form');
    let logInInput = logInForm.querySelector('.login_form input');
    let welcomeHEl = document.querySelector('.welcome');
    let savedName = localStorage.getItem('name');
    console.log(savedName);

    function logInSubmit(e){
        e.preventDefault();
        const userName = logInInput.value;
        logInForm.classList.add('none')
        welcomeHEl.innerText = `안녕하세요! ${userName}님`;
        welcomeHEl.classList.remove('none');
        localStorage.setItem("name",userName);
        
    }

    if(savedName == null){
        logInForm.classList.remove('none');
        logInForm.addEventListener('submit',logInSubmit);
    }else{
        welcomeHEl.classList.remove('none');
        welcomeHEl.innerText = `안녕하세요! ${savedName}님`;
    }





})();