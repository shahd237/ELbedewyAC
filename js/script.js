



const counters=document.querySelectorAll(".counter");
counters.forEach(counter=>{
    const updateCounter=()=>{
        const target=+counter.getAttribute("data-target");
        const count=+counter.innerHTML;
        const inc=target/100;
        if(count<target){
            counter.innerHTML=Math.ceil(count+inc);
            setTimeout(updateCounter,20)
        }else{
            counter.innerHTML=target
        }
    }
    updateCounter()
})