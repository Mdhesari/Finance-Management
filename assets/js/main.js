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
  // document.getElementById("sign_up_btn").style.cssText="display:none";
  // document.getElementById("sign-in-btn").style.cssText="display:block";
}

function enterSignIn() {
  container.classList.remove("right-panel-active");
  // document.getElementById("sign_up_btn").style.cssText="display:block";
  // document.getElementById("sign-in-btn").style.cssText="display:none";
}

function enterSignUpOrSignIn() {
  container.classList.toggle("right-panel-active");

  let data = {
    text: "Does not have any account?"
  };

  const is_sign_in = container.classList.contains("right-panel-active");

  if (is_sign_in) {

    data.text = "Already have an account?"
  }
  let register_action = document.getElementById("register-action");

  register_action.innerHTML = data.text;
}
