document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
  
   
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
  
   
    if (name === "" || email === "" || message === "") {
      document.getElementById("response").textContent = "Please fill in all fields.";
      return;
    }
  
  
    setTimeout(function() {
      document.getElementById("response").textContent = "Message sent!";
    }, 1000);
  });