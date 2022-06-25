 
 var countDownDate = new Date("Nov 25, 2021 18:0:00").getTime();

 var myfunc = setInterval(function() {

 var now = new Date().getTime();
 var timeleft = countDownDate - now;
     
 
 var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
 var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
 var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
 var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

 document.getElementById("days").innerHTML = days + "d "
 document.getElementById("hours").innerHTML = hours + "h " 
 document.getElementById("mins").innerHTML = minutes + "m " 
 document.getElementById("secs").innerHTML = seconds + "s " 
     

 if (timeleft < 0) {
     clearInterval(myfunc);
     var video = document.getElementById('videoContainer');
     video.classList.add('classvisible');
     video.setAttribute("src", 'https://player.vimeo.com/external/649979461.hd.mp4?s=e3c15b42943da03cbc15cb2656c5c7423e06247c&profile_id=175');
     
     document.getElementById("days").innerHTML = ""
     document.getElementById("hours").innerHTML = "" 
     document.getElementById("mins").innerHTML = ""
     document.getElementById("secs").innerHTML = ""
     document.getElementById("end").innerHTML = "TIME UP!!";
 }
 }, 1000);