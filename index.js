// const button = document.querySelector(".submit");
const input = document.querySelector(".input");
const errMessage = document.querySelector(".errMessage");
const form = document.querySelector(".signUpCard__formPart__form");
const signUpCard = document.querySelector(".signUpCard");
const successCard = document.querySelector(".containerForResponsive");
const span = document.querySelector("span");

let userEmail = "";

const validateEmail = () => {
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  userEmail = input.value.trim();

  if (userEmail.trim() === "") {
    errMessage.innerText = "Please enter your email";
    input.classList.add("wrongEmail");
    return false;
  }
  const isValid = emailRegex.test(userEmail);
  if (!isValid) {
    errMessage.innerText = "Valid email required";
    input.classList.add("wrongEmail");
    return false;
  }

  return true;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (validateEmail()) {
    signUpCard.style.display = "none";
    successCard.style.display = "block";
    span.innerText = userEmail;
  }
});
