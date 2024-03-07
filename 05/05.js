const handleClick = () => { 
    const bts = document.querySelectorAll(".c1") ;
    const btsNum = [1,1,1];

        // for of => 파이썬의 for in // 교수님이 추천함 
        for(let bt of bts) {
            const n = Math.floor(Math.random() * 6) + 1;
            bt.setAttribute("src", `./img/${n}.png`);
        }

        
    //for of 
    // for(let [idx,bt] of bts.entries()){
    //     const n = Math.floor(Math.random() * 6) + 1;
    //     bt.setAttribute("src", `./img/${n}.png`);
    //     btsNum[idx] = n;

    //     console.log(btsNum);
    // }





    // bts.forEach((bt) => {
    //   const n = Math.floor(Math.random() * 6) + 1;
    //   bt.setAttribute("src", `./img/${n}.png`);
      
    //   console.log("click", n)
    // });
   
  }