
const counters=document.querySelectorAll('.counter');

counters.forEach((counter)=>{
    counter.innerHTML=0;

    const updateCounter=()=>{
        const targetCount=+counter.getAttribute('data-target')
        const stCount=Number(counter.innerHTML);

        const incr=targetCount/100;

        if(stCount<targetCount){
            counter.innerHTML=`${Math.round(stCount+incr)}`;
            setTimeout(updateCounter,10);
        }else{
            counter.innerHTML=targetCount;
        }
    }

    updateCounter();
})



