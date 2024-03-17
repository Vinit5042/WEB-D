let btn=document.querySelectorAll("button");
let tL =document.querySelector("#timeLine");
dur=tL.innerText=" 17 march 2024 10:51 AM ";
let clock =function(){
    const end = new Date(dur) ;
    const now = new Date();
    const dif = end - now;  // time in msec
    if(dif<0) return;
    let  time1 = dif / 1000 ; //time in sec
    //convert into days
    let days = time1 / 86400;
    // convert into hours
    let time2 = (days - Math.floor(days));
     let hrs = time2 * 24;
     // convert into minutes
     let time3 = hrs-Math.floor(hrs);
     let mins =time3 * 60;
     // convert into secs
    let time4 = mins-Math.floor(mins);
    let secs = time4 * 60;
    for(btns of btn){
        btn[0].innerText= Math.floor(days);
        btn[1].innerText=Math.floor(hrs);
        btn[2].innerText=Math.floor(mins);
        btn[3].innerText=Math.floor(secs);
    }

}
    setInterval(()=>{
     clock()}, 1000
    );