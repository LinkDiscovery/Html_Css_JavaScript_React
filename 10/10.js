document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector("#sel1");

    button.addEventListener("click", () => {


        let arr = [0,0,0,0,0,0,0];
        let flag = false;
        
        for (let item of arr) {
            if (flag == false) {  // if(!flag) 와 같다. 
                n = Math.floor(Math.random() * 46) + 1; //1~100까지
                console.log("n=", n);
                flag = true;
            }
            arr.push(item);
        }

    })
})

