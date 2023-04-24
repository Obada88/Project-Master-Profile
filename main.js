
// Click Bars 

let bars =document.getElementById("bars");

bars.onclick=function(){
    bars.classList.toggle('fa-xmark')
}

// Enter Message input


let Submit= document.getElementById("Submit");
let InputValue= document.getElementById("InputValue");
let Email= document.getElementById("Email");
let MessageComment= document.getElementById("MessageComment");
let send_message=document.querySelector(".send-message")

function checkInput() {
    let input= document.querySelector(".form-control").value;
    if (input === "") {
        InputValue.classList.add("erro");
        Email.classList.add("erro") ;
        MessageComment.classList.add("erro") ;
        setInterval(() => {
            send_message.style.display="none"
          }, 0);
        

    } else {
        InputValue.classList.remove("erro");
        Email.classList.remove("erro") ;
        MessageComment.classList.remove("erro") ;

       }
       SendEmail();

    //    clear input
       clear();

          

  }
  

  function clear(){
    InputValue.value="";
    Email.value="";
    MessageComment.value="";
    // Done Send This Message
    send_message.style.display="block"
    setInterval(() => {
      send_message.style.display="none"
    }, 5000);

  }

  // Send Email
  function SendEmail(){
    let prams={
        from_name: document.getElementById("InputValue").value,
        email_id:document.getElementById("Email").value,
        message:document.getElementById("MessageComment").value

    }
    emailjs.send("service_7ez14y8","template_f8t9z54",prams).then(
        res=>{
            document.getElementById("InputValue").value="";
            document.getElementById("Email").value="";
            document.getElementById("MessageComment").value="";
            console.log(res)

        }
    )
  }

 // Get the button element
let  scrollTopBtn = document.getElementById("scroll-top-btn");

// Add a scroll event listener to the window
window.addEventListener("scroll", function() {
  // If the user has scrolled down more than 1000 pixels, show the button

  (window.pageYOffset > 1000) ? scrollTopBtn.style.display = "block" : scrollTopBtn.style.display = "none";

});

// Function to scroll to the top of the page
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


// Make Scroll Reaval 

const sr= ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:2500,
    delay:400,
    // reset:true, Animation
})

sr.reveal(`.box-contetn-home, .icon-fowlls, .container-contact, .footer`)
sr.reveal(`.img-home`,{origin:'bottom'})
sr.reveal(`.box-content-skills, .box-margin-project`,{interval:100})
