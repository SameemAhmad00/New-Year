const qs = (query) => {return document.querySelector(query)};
const time_hand=()=>{
    var timeleft = Math.round((new Date(2024,11,31,23,59,59) - new Date())/1000)


    var leftarray = [timeleft%60,timeleft/60%60,timeleft/60/60%24,timeleft/60/60/24%365.25]

    leftarray = leftarray.map(unit=>Math.floor(unit));

    qs(".days").innerHTML=leftarray[3].toString().padStart(2,'0');
qs(".hrs").innerHTML=leftarray[2].toString().padStart(2,'0');
qs(".mins").innerHTML=leftarray[1].toString().padStart(2,'0');
qs(".segs").innerHTML=leftarray[0].toString().padStart(2,'0');
    if(leftarray[0]<=0 && leftarray[1]<=0 && leftarray[2]<=0 && leftarray[3]<=0)
    {
        qs(".days").innerHTML="00";
        qs(".hrs").innerHTML="00";
        qs(".mins").innerHTML="00";
        qs(".segs").innerHTML="00";
        
        qs(".larger").innerHTML="Happy New Year!";
        qs(".text").innerHTML="The countdown is over! I hope this year is much better than the last 😊";
        return;
    }
    setTimeout(time_hand,1000);
}
window.onload=()=>{
    time_hand();
}