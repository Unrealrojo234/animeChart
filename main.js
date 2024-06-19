//animation 0
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
      console.log(entry)
      if (entry.isIntersecting){
        $(".btn-danger").addClass("animate__animated animate__heartBeat animate__repeat-2");
      }
      else{
        $(".btn-danger").removeClass("animate__animated animate__heartBeat animate__repeat-2");
      }
    })
  })
  
  const hiddenElement = document.querySelectorAll(".btn-danger");
  hiddenElement.forEach((el=>observer.observe(el)));

function openmsg() { 
  $(".msg-div").addClass("openmsg");
  $(".openmsg").addClass("animate__animated animate__bounceOutUp animate__slower");
  timeCount();
 }

function clearmsg() {
  $(".msg-div").removeClass("openmsg");
  $(".openmsg").removeClass("animate__animated animate__bounceOutUp");
  }

function timeCount(){
  setTimeout(clearmsg,2500)
}