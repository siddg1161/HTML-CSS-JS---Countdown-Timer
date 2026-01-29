const endDate=new Date("2 Oct, 2029 20:00:19").getTime();
const startDate=new Date().getTime();

let x=setInterval(function updateTimer()
{
   const currentDate=new Date().getTime();

   const distanceCovered= currentDate-startDate;
   const distancePending=endDate-currentDate;

   //calculate days,mins,hrss,sec
   //1 day = 24 * 60 * 60 * 1000 ms
    const oneDayInMillis = (24*60*60*1000);
    const oneHourInMillis= (60*60*1000);
    const oneMinInMIllis = (60*1000);
    const oneSecondInMillis = (1000);

    const days= Math.floor(distancePending/(oneDayInMillis));
    const hrs = Math.floor((distancePending%(oneDayInMillis)/(oneHourInMillis)));
    const mins= Math.floor((distancePending%(oneHourInMillis))/(oneMinInMIllis));
    const secs= Math.floor((distancePending%(oneMinInMIllis))/(oneSecondInMillis));

    //populate in UI
    document.getElementById("days").innerHTML= days;
    document.getElementById("hours").innerHTML= hrs;
    document.getElementById("minutes").innerHTML= mins;
    document.getElementById("seconds").innerHTML= secs;

    //calculate width % for progress bar
    const totalDistnace=endDate-startDate;
    const percentageDistance=(distanceCovered/totalDistnace)*100;

    //set width in progress bar
    document.getElementById("progress-bar").style.width= percentageDistance + "%";

    if(distancePending <0)
    {
        clearInterval(x);
        document.getElementById("countdown").innerHTML="EXPIRED";
        document.getElementsByClassName("progress-bar").style.width="100%";
        
    }
    
}
,1000);