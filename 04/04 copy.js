document.addEventListener("DOMContentLoaded",()=>{
//버튼 가져오기
    const bt1 = document.querySelector("#bt1");

    //버튼 이벤트 달기 

    bt1.addEventListener("click", ()=>{
        handleClick();

    })

const handleClick = () => {
    console.log("click")
}

})