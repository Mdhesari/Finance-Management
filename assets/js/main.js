jQuery(document).ready(function ($) {
	clicksEvent();

	function clicksEvent() {
		$("income-btn").on("click", function () {
			$("this").toggleClass("active");
		});
		$("expense-btn").on("click", function () {
			$("this").toggleClass("active");
		});
	}
});
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

function sign_up() {
	document.getElementById("form_sign").style.cssText = "display:none";
}