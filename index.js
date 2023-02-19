setInterval(diplayclock, 500);
  function diplayclock(){
    var time = new Date();
    var hrs = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    let deadline = new Date("february 15, 2023 12:00:00");
    let today = new Date();
    var en = "AM";
    let fine = 5000;
    if (today > deadline){
        alert("The registration deadline has passed. A fine of N" + fine + " must be paid before you can indicate interest, please pay into this account number zenith 00234576893.");
    } else {  let deadlineMessage = "expired on " + deadline.toDateString();
    document.getElementById("time").innerHTML = deadlineMessage;
  }
    if(hrs > 12){
        en = 'pm';
    }
    if(hrs > 12){
        hrs == hrs - 12;
    }
    if(hrs == 0){
        hrs == 12;
    }
   if(hrs < 10){
    hrs == '0' + hrs;
   }
   if(min < 10){
    hrs == '0' + min;
   }
   if(sec < 10){
    hrs == '0' + sec;
   }
    document.getElementById('time').innerHTML = hrs + ":" + min + ":" + sec + "" + en;
  };