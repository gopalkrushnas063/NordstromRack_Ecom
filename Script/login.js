let form = document.querySelector("form");
  let userData = JSON.parse(localStorage.getItem("userData")) || [];
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    let data = {
      email: form.email.value,
      password: form.password.value,
    };
    if (checkSignin(data.email, data.password) === true) {
      window.location.href = "index.html";
      localStorage.setItem("signin", JSON.stringify(data));
      alert("Sign In Successful");
    } else {
      alert("Wrong Username Or Password");
    }
  });

  function checkSignin(email, password) {
    let filter = userData.filter(function (el) {
        console.log(el)
      return el.email === email && el.password === password;
    });
    if (filter.length > 0) {
      return true;
    } else {
      return false;
    }
  }


  function viewPassword()
  {
    var passwordInput = document.getElementById('password');
    var passStatus = document.getElementById('pass-status');
   
    if (passwordInput.type == 'password'){
      passwordInput.type='text';
      passStatus.className='fa fa-eye-slash';
      
    }
    else{
      passwordInput.type='password';
      passStatus.className='fa fa-eye';
    }
  }