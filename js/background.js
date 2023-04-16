(function(){

    let wrapEl = document.querySelector('.wrap');
    let bgImages = ["453748_105900_5553.jpg","10042231_3.jpg","2019091080166_0.jpg"];
    let img = document.createElement('img');

    let nowImg = bgImages[Math.floor(Math.random() * bgImages.length)];

    img.src = `img/${nowImg}`;

    wrapEl.style.background = `url(img/${nowImg}) no-repeat center / cover `

    // Math.random()
    // => 0~1까지의 랜덤한 숫자를 제공
    // => 우리가 필요한 숫자는 0과 1뿐만이 아니기 떄문에
    // 랜덤한 숫자에 배열의 길이만큼을 곱해줌
    
    // 곱한 결과, 소수점 뒤의 자리가 같이 계산되기때문에 
    // 소수점 뒷자리를 버리는 Math.floor를 활용하여 정수형으로 반환


})();//end