//DOM tree가 완성된 후 실행
// 개념을 이해해라 
// 돔 이 완성되고 난 뒤에 특정 위치를 지정해서 값을 넣거나 할 수 있다.

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOMContentLoaded ok");

    //버튼 생성 
    const bt3 = document.createElement("button");
    const bt3Txt = document.createTextNode("버튼3");

    bt3.setAttribute("id","bt3");
    bt3.appendChild(bt3Txt);


    bt3.appendChild(bt3Txt);
    //버튼추가하기
    document.querySelector("#btArea2").append(bt3);
    // 버튼 이벤트 달기
    bt3.addEventListener("click", ()=>{
        handleClick(3);
    });
    //버튼 생성
    const bt4 = document.createElement("button");
    const bt4Txt = document.createTextNode("버튼4");
    bt4.appendChild(bt4Txt);
    //버튼 추가하기
    document.querySelector("#btArea2").append(bt4);
    // 버튼 이벤트 달기
    bt4.addEventListener("click", ()=>{
        handleClick(4);
    });
});

// DOMContentLoaded는 콜백함수?
//콜백함수는 보통 위와 처럼 () => {} 를 사용 , 그냥함수 써도되긴한데 
//왜 쓰는지는 아직 모름 콜백함수의 열고 닫고 {} 









// function handleClick(n){
//     // 메세지 영역 가져오기 1 
// //    document.getElementById("msgArea").innerHTML ="안녕하세요";
//  // 메세지 영역 가져오기 2
// // document.querySelector("#msgArea").innerHTML = "<h2>버튼" + n + "이 눌러졌습니다. </h2>"
// document.querySelector("#msgArea").innerHTML = `버튼 ${n}이 눌러졌습니다.`

// }


/*
함수 작성 2 : 화살표 함수
상수, 변수 선언만 가능 자바 스크립트에서 
자바처럼 String, int 이런거 없음 


*/

const handleClick = (n) => {

    let msg;
    if (n == 1) msg = "<h2>안녕하세요.</h2>";
    else if (n==2) msg = "<h2>바바.</h2>";
    else if (n==3) msg = `<h2>버튼 ${n} </h2> `;
    else  msg = `<h2>으아아아 ${n} </h2> `;

    document.querySelector("#msgArea").innerHTML = msg;
}

