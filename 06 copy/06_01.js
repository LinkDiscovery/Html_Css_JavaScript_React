document.addEventListener("DOMContentLoaded", ()=>{
    const imgs = document.querySelectorAll("section img");
    const bts = document.querySelectorAll("section button");

    for(let bt of bts){
        bt.addEventListener("click", ()=>{
            console.log(bt.innerHTML.slice(-1));
            const n = parseInt(bt.innerHTML.slice(-1));
            const nc = Math.floor(Math.random() * 6) + 1; 

            imgs[0].setAttribute("src", `./img/${nc}.png`);
            imgs[1].setAttribute("src", `./img/${n}.png`);
            
            if (n == nc) {
                document.querySelector("#msg").innerHTML = "맞음";
            }
            else {
                document.querySelector("#msg").innerHTML = "틀림";
            }
        });
    }

});

