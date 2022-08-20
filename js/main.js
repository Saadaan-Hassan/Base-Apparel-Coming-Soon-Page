const btn = document.getElementById("submit");
const user_email = document.getElementById("user-email");
const message = document.querySelector(".error-message");

btn.addEventListener("click", (email) => {
  email.preventDefault();
  const emailVal = user_email.value;

  if (validateEmail(emailVal)) {
    message.style.visibility = "hidden";
    return true;
  } else {
    console.log("Invalid email address!");
    message.style.visibility = "visible";
    return false;
  }
});

function validateEmail(email) {
  const regexText =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return regexText.test(String(email).toLowerCase());
}
