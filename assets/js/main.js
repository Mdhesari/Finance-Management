const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", enterSignUp);

signInButton.addEventListener("click", enterSignIn);

function sign_up() {
  document.getElementById("form_sign").style.cssText = "display:none";
}

function enterSignUp() {
  container.classList.add("right-panel-active");
  document.getElementById("sign_up_btn").style.cssText="display:none";
}

function enterSignIn() {
  container.classList.remove("right-panel-active");
  document.getElementById("sign_up_btn").style.cssText="display:block";
}
