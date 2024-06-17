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