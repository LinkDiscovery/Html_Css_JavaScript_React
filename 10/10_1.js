document.addEventListener("DOMContentLoaded", () => {
    const bt = document.querySelector("button");
    const numDisp = document.querySelector("#numDisp");

    let nums = []

    bt.addEventListener("click", () => {
        nums = []; // 배열 초기화 
        //nums.length = 0 > 배열 초기화 

        // 1~45까지 랜덤 수 생성 , 랜덤 수가 7개 만들어지고 중복되지 않게 
        while (nums.length < 7) {
            let n = Math.floor(Math.random() * 45) + 1
            if(!nums.includes(n)) nums.push(n)
        }

//방법 1
        // let tags = '';
        // nums.map((v, i)=>{
        //     tags = tags + `<span class = "sp${parseInt(v/10)}">${v}</span>`;
        //     if(i === 5)
        //         tags = tags + `<span class= i>+</span>`
//방법 2 

        nums =  nums.map((v)=>
        `<span class = "sp${parseInt(v/10)}">${v}</span>`)
        nums.splice(6,0,`<span>+</span>`)
        numDisp.innerHTML = nums.toString().replaceAll(',','') // 최종적으로 뿌리는 것 .
        
    })
   

});