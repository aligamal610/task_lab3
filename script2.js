//login form and remember me 

document.addEventListener("DOMContentLoaded", () => {
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const rememberMe = document.getElementById("rememberMe");
  const loginForm = document.getElementById("loginForm");
  const welcomeMsg = document.getElementById("welcomeMsg");
  const clearBtn = document.getElementById("clearBtn");

  
  if (localStorage.getItem("email")) {
    emailInput.value = localStorage.getItem("email");
    welcomeMsg.textContent = `Welcome back, ${localStorage.getItem("email")}!`;
    rememberMe.checked = true;
  }

 
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault(); 

    if (rememberMe.checked) {
      localStorage.setItem("email", emailInput.value);
      
      localStorage.setItem("password", passwordInput.value);

      welcomeMsg.textContent = `Welcome back, ${emailInput.value}!`;
    } else {
      localStorage.removeItem("email");
      localStorage.removeItem("password");
      welcomeMsg.textContent = "";
    }

    alert("Login successful ✅");
  });

 
  clearBtn.addEventListener("click", () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    emailInput.value = "";
    passwordInput.value = "";
    rememberMe.checked = false;
    welcomeMsg.textContent = "";
    alert("Remember Me data cleared ❌");
  });
});
