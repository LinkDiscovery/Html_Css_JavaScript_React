document.addEventListener("DOMContentLoaded", () => {
    const sel1Button = document.querySelector("#sel1");
    const sel2Input = document.querySelector("#sel2");
    const upDownImg = document.querySelector("img");
    const msg = document.querySelector("msg");

    // input focus
    sel2Input.focus();

    // 랜덤수 생성 변수

    let n; // updefinded 변수 
    let flag = false;

    // 버튼의 클릭이벤트 달기 
    sel1Button.addEventListener("click", (e) => {
        //랜덤 수 생성 
        e.preventDefault(); // form 으로 묶었을 때 , 초기화 안되도록 이벤트를 없애는 것
        if (flag == false) {  // if(!flag) 와 같다. 
            n = Math.floor(Math.random() * 100) + 1; //1~100까지
            console.log("n=", n);
            flag = true;

            //입력초기화
            sel2Input.style.display = "inline";
            sel2Input.value = "";
            sel2Input.focus();
            sel1Button.innerHTML = "확인";
        }

        //input 박스 내용 가져오기 
        if (sel2Input.value == '') {
            document.querySelector("#msg").innerHTML = "<span>숫자를 입력하세요</span>" //같은 알림 메세지 인데 div에 표시
            // alert("숫자를 입력하세요.") // 숫자 안넣고 확인 눌렀을 때 알림 메세지 
            sel2Input.focus();
            return;
        }

        //숫자비교 
        if( n== parseInt(sel2Input.value )) { // input box는 무조건 text문자이므로 숫자랑 비교하려면 
                                              // text를 parseInt를 써서 인수화 시켜야한다.
                                            // 2개까지는 괜찮은데 3개부터는 타입을 비교한다.
            upDownImg.setAttribute("src","./img/good.png")
            sel2Input.style.display = "none"
            sel1Button.innerHTML = "재시작"
            flag = false;
        }
        else if ( n > sel2Input.value){
            upDownImg.setAttribute("src","./img/up.png")
        }else { 
            upDownImg.setAttribute("src","./img/down.png")
        }


    });

})