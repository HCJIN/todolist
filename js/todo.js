(function(){
    let toDoForm = document.querySelector('.todo_form');
    let toDoInput = toDoForm.querySelector('input');
    let toDoList = document.querySelector('.todo_list'); 
    //1.요소 셀렉
    let toDos = [];
    // toDos = 저장할 리스트
    // 저장할 리스트들을 배열로 만들거라서 [] 선언


    toDoForm.addEventListener('submit',toDoSubmit);


    function addToDo(toDoNew){
        let li = document.createElement('li');
        let span = document.createElement('span');
        let btn = document.createElement('button');

        li.id = toDoNew.id;
        li.appendChild(span);
        li.appendChild(btn);

        span.innerText = "🚌 "+toDoNew.text;
        btn.innerText = "X";

        toDoList.appendChild(li);

        btn.addEventListener('click', deleteToDo);
    }


    function deleteToDo(e){
        let deleteToDoList = e.target.parentNode;

        // console.log("이거 지워주세요",deleteToDoList.id)

        deleteToDoList.remove();
        // ----------------단순 html에서만 li 삭제


        toDos = toDos.filter((toDos)=>toDos.id !== parseInt(deleteToDoList.id))
        // 로컬스토리지에서 지울때
        /*
        
            filter는 조건에 만족하는 새로운 배열을 필요할때 사용함
        
            [필터에서 남기려고 하는 조건]
            toDos.id !== deleteToDoList.id
            로컬스토리지에 있는 id와 li에 붙어있는 id가 일치하지 않는다

            [우리가 지우고싶은 조건]
            로컬스토리지에 있는 id와 li에 붙어있는 id가 일치하는 경우에만 
            로컬스토리지에서 지울거다! 
        
        */

        /*
        
            let arr = [1,2,3,4]

            ler newArr = arr.filter(item => item > 2);

            console.log(newArr);
            // [3,4]

            console.log(arr);
            // [1,2,3,4]

            =filter

        */

        saveToDos();
        // 삭제한 내용을 업데이트 하기 위해서 savedToDos 함수 호출
    }

    // toDos의 배열에 담긴 내용을 로컬스토리지에 저장하는 역할
    function saveToDos(){
        localStorage.setItem('toDos',JSON.stringify(toDos));
        //toDos = 단순 string
    }


    function toDoSubmit(e){
        e.preventDefault();
        // 폼태그 기본 동작 방지

        const toDoNew = toDoInput.value;
        //toDoInput의 현재 value를 toDoNew라는 상수에 대입
   
        toDoInput.value = "";
        //toDoInput에 적힌 값 비움

        const ToDoObj = {
            text:toDoNew,
            id:Date.now(),
        }

        toDos.push(ToDoObj);
        //toDos라는 배열에 input value값 넣음
        // ["퇴근하기"]

        addToDo(ToDoObj);
        saveToDos();
    }
    

    


    const savedToDos = localStorage.getItem("toDos");
    // string

    if(savedToDos !== null){
        let parsedToDos = JSON.parse(savedToDos);
        // array

        toDos = parsedToDos;
        // 로컬스토리지가 빈값이 아니라면 위에 선언한 전역배열 toDos에 
        // 배열로 변경한 parsedToDos 넣어줌

        parsedToDos.forEach(addToDo);
        /*

            parsedToDos = 로컬스토리지에 저장된 toDos의 value값을 담음

            현재, parsedToDos에 담긴 내용은 단순 string

            위의 string을 배열로 바꾸고싶다 

            -----------------------------------------------------------

            만약, 저장된 값이 빈값이 아니라면 
            parsedToDos(string)를 array로 바꿔줌 / JSON.parse(savedToDos);

            배열에 접근하기 위해서는 반복문을 실행해야함 
            반복문을 간단하게 실행하게끔 도와주는것이 forEach

            배열로 변경된 parsedToDos에 있는 각 아이템들에게 모두 
            addToDo라고하는 함수를 실행시킴

            addToDo함수는 ul안에 li를 생성해주는 역할
        
        */
    }

    
})();//end