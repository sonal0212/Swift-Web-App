const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

document.querySelector(".btn").onclick = function () {
  var password = document.querySelector(".password").value,
    confirmPassword = document.querySelector(".confirm-password").value;

  if (password == "") {
    alert("Field cannot be empty.");
  } else if (password != confirmPassword) {
    alert("Password didn't matched. Try Again!");
    return false;
  } else {
    alert("Acount Created!");
  }
  return true;
};
