let form = document.querySelector("form");
  let userData = JSON.parse(localStorage.getItem("userData")) || [];
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    let data = {
      name: form.name.value,
      email: form.email.value,
      password: form.password.value,
    };

    if (checkEmails(data.email) === true) {
      userData.push(data);
      localStorage.setItem("userData", JSON.stringify(userData));
      alert("User Credential Registered Successful");
      window.location.href = "login.html";
    } else {
      alert("Account Already Exists");
    }
  });

  function checkEmails(email) {
    let filtered = userData.filter(function (el) {
      return email === el.email;
    });
    if (filtered.length > 0) {
      return false;
    } else {
      return true;
    }
  }


  // .............................................................
  var myInput = document.getElementById("password");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  
  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}