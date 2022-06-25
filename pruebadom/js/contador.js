 
 var countDownDate = new Date("Dec 22, 2021 18:00:00").getTime();

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
     var video = document.getElementById('videoContainer2');
     video.classList.add('classvisible');
     video.setAttribute("src", 'https://player.vimeo.com/external/659451580.m3u8?s=e5c6ae21bf4ab2536a0c648feb69f9c94e4ba52f&oauth2_token_id=1573774573');
     
     document.getElementById("days").innerHTML = ""
     document.getElementById("hours").innerHTML = "" 
     document.getElementById("mins").innerHTML = ""
     document.getElementById("secs").innerHTML = ""
     document.getElementById("end").innerHTML = "TIME UP!!";
 }
 }, 1000);