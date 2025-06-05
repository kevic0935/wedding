function music(){
    let musiconoroff = document.getElementById('music-onoroff'),
    musicoffline = document.getElementById('music-off-line'),
    themusic = document.querySelector("audio");

    if (themusic.paused) {
        themusic.play();
        musicoffline.classList.add("playmusic");
        musiconoroff.style.display = "none";
    }
    else {
        themusic.pause();
        musicoffline.classList.remove("playmusic");
    }
}

function JumpTo(id) {
    var jumpto = document.getElementById(id);
    jumpto.scrollIntoView({ block: 'start' , behavior: 'smooth' });
}

//
function reveal(){
  var reveals = document.querySelectorAll(".dress-code>p,.countdown,.schedule,.map,.invite,.groom,.bride")
  for (var i = 0; i < reveals.length; i++){
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
      } else {
          reveals[i].classList.remove("active");
      }
  }
}
window.addEventListener("scroll",reveal)


//
var TheDay = new Date("Oct 8, 2043 12:00:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();
  var distance = TheDay - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("mins").innerHTML = minutes;
  document.getElementById("secs").innerHTML = seconds;


  document.getElementById("countdown").innerHTML = "頝嗪𣪧憍𡁶旨���� " + days + " 憭�<br>" + hours + " 撠𤩺� "
  + minutes + " ����� " + seconds + " 蝘�<br>霈𤘪�穃�睲�韏瑟�笔��嫃嚗�";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown-content").innerHTML = "IT'S TIME TO CELEBRATE !";
    document.getElementById("countdown").innerHTML = "IT'S TIME TO CELEBRATE !";
  }    

}, 1000);


function showgallery(id){
  document.getElementById(id).style.display = "block";
  document.getElementById("gallery").style.display = "block";
  document.getElementById("closebutton").style.display = "block";

  if ( document.getElementById('video').style.display == "block" ) {
    let musicoffline = document.getElementById('music-off-line'),
    themusic = document.querySelector("audio");
    
    themusic.pause();
    musicoffline.classList.remove("playmusic");
};
}

function closegallery(){
  document.getElementById("gallery").style.display = "none";
  document.getElementById("closebutton").style.display = "none";
  document.getElementById("photo-gallery").style.display = "none";
  document.getElementById("video").style.display = "none";

  const iframeVideos = document.querySelectorAll("iframe");
  if (iframeVideos.length > 0) {
    iframeVideos.forEach((iframe) => {
      if (iframe.contentWindow) {
        if (iframe.src.startsWith("https://player.vimeo.com/")) {
          iframe.contentWindow.postMessage('{"method":"pause"}', "*");
        }
      }
    });
  };
}


//form
function AttendFunction(id){
    let Form1 = document.getElementById(id),
    notAttend = Form1.querySelectorAll(".not-attend"),
    ATTEND = Form1["ATTEND"],
    ADULT = Form1["ADULT"],
    KID = Form1["KID"],
    VEGAN = Form1["VEGAN"];


    if ( ATTEND.value == "�枂撣�" || ATTEND.value == "" ){
        ADULT.value = "";
        KID.value = "";
        VEGAN.value = "";
    
        Form1.querySelector(".not-attend-checked").removeAttribute("checked","");
    
        notAttend.forEach(noreply => {
            noreply.style.display = "block";
        });
    } else {
        ADULT.value = "0";
        KID.value = "0";
        VEGAN.value = "0";
    
        Form1.querySelector(".not-attend-checked").setAttribute("checked","");
    
        const notAttend = Form1.querySelectorAll(".not-attend");
    
        notAttend.forEach(noreply => {
            noreply.style.display = "none";
        });
    };
}

function InvitationFunction(){
    let Form1 = document.forms['form1'],
    INVITATION = Form1["INVITATION"],
    ADDRESS = Form1["ADDRESS"];

    if ( INVITATION.value == "��閬�" || INVITATION.value == "" ){  
        ADDRESS.value = "";
        ADDRESS.disabled = false;
    } else {
        ADDRESS.value = "X";
        ADDRESS.disabled = true;
    };
}

function submitform1(){
    let Form1 = document.getElementById('form1'),
    NAME = Form1["NAME"].value,
    ATTEND = Form1["ATTEND"].value,
    ADULT = Form1["ADULT"].value,
    KID = Form1["KID"].value,
    VEGAN = Form1["VEGAN"].value,
    INVITATION = Form1["INVITATION"].value,
    ADDRESS = Form1["ADDRESS"].value,
    MESSAGE = Form1["MESSAGE"].value;

    if( NAME === "" ){
        document.getElementById('Name').scrollIntoView({ block: 'center' , behavior: 'smooth' });
        alert('隢见‵撖怠�枏��');
    } else if( ADULT === "" ){
        document.getElementById('Adult').scrollIntoView({ block: 'center' , behavior: 'smooth' });
        alert('隢见�䂿�𥪜之鈭箔犖�彍');
    } else if( KID === "" ){
        document.getElementById('Kid').scrollIntoView({ block: 'center' , behavior: 'smooth' });
        alert('隢见�䂿�𥪜�誩酋鈭箸彍');
    } else if( VEGAN === "" ){
        document.getElementById('Vegan').scrollIntoView({ block: 'center' , behavior: 'smooth' });
        alert('隢见�𤩺糓�炏��厩�𣳇�罸�瘙�');
    } else if( INVITATION === "" ){
        document.getElementById('Invitation').scrollIntoView({ block: 'center' , behavior: 'smooth' });
        alert('隢见�𤩺糓�炏��閬�蝝蹱𧋦��𨅯��');
    } else if( ADDRESS === "" ){
        document.getElementById('Address').scrollIntoView({ block: 'center' , behavior: 'smooth' });
        alert('隢讠�嗘�见�𨅯�𡝗𤣰隞嗅𧑐��');
    } else{
        function addZero(i) {
            if (i < 10) {i = "0" + i}
            return i;
        }
        
        const today = new Date(),
        year = today.getFullYear(),
        month = today.getMonth()+1,
        day = today.getDate(),
        h = addZero(today.getHours()),
        m = addZero(today.getMinutes()),
        s = addZero(today.getSeconds()),
        time = h + ":" + m + ":" + s,
        SUBMITTIME = year+"/"+month+"/"+day+" "+time;

        document.getElementById('loading').style.display = "block";

        $.ajax({
          type: "get",
          url: "https://script.google.com/macros/s/AKfycbyRhOhzsldgnkywX-MUiStXyRWgTNgUgK8zy0mQJnGfg8UUlcwrvYvOWo0ZIcRSevQPEQ/exec",
          data: {
            "SUBMITTIME": SUBMITTIME, 
            "NAME": NAME, 
            "ATTEND": ATTEND, 
            "ADULT": ADULT, 
            "KID": KID,
            "VEGAN": VEGAN,
            "INVITATION": INVITATION,
            "ADDRESS": ADDRESS,
            "MESSAGE": MESSAGE,
          },
          dataType: "JSON",
          success: function(response){
            if (response.success) {
              submitform();
            } else {
              alert("�喲���㺭撣賂�諹�见�滩岫銝�甈�");
            }
          },
          error: function(xhr, status){
            var errorMsg = xhr.status;
            if(errorMsg === 0){
                alert('�㺭撣賂�隢见�滩岫銝�甈�');
            } else{
                alert (xhr.status + ':' +xhr.statusText);
            }
          },
          complete: function(){
            document.getElementById('loading').style.display = "none";
          }
        });
    }
}  



function submitform(){
    const submitsuccess = document.getElementById('submit-success');
    submitsuccess.style.display = "flex";
}

function submitok(){
    window.location.reload();
}

const scrollrightelement = document.querySelector(".photo-box");
scrollrightelement.addEventListener("mouseover", triggerwheel);
function triggerwheel(){
    const scrollContainer = document.querySelector(".photo-box");

    if( scrollContainer.scrollWidth > scrollContainer.offsetWidth ){
        scrollContainer.addEventListener("wheel", (evt) => {
            evt.preventDefault();
            scrollContainer.scrollLeft += evt.deltaY;
        });
    }
}
解釋