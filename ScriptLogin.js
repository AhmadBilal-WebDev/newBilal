const submitButton = document.getElementById("btn");

const userEmail = document.getElementById("email");
const errMesEmail = document.getElementById("emailSpan1");
const errImgEmail = document.getElementById("emailSpan2");
const emailLabel = document.getElementById("emailLable");

const userPassword = document.getElementById("Password");
const errMesPassword = document.getElementById("passwordSpan1");
const errImgPassword = document.getElementById("passwordSpan2");
const passwordLabel = document.getElementById("passwordLabel");

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  funEmail();
  funPassword();
});

function funName() {
  if (userName.value === "") {
    errMes.innerHTML = "Please Enter Name";
    myLable.style.color = "red";
    userName.style.borderColor = "red";
    errImg.innerHTML =
      "<img id='wrongeImg' src='https://cdn-icons-png.flaticon.com/128/1828/1828666.png'>";
    return false;
  } else {
    errImg.innerHTML =
      "<img id='corectImg' src='https://cdn-icons-png.flaticon.com/128/14035/14035695.png'>";
  }
  errMes.innerHTML = "";
  userName.style.borderColor = "white";
  myLable.style.color = "white";
}

function funEmail() {
  const valideteEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!valideteEmail.test(userEmail.value)) {
    errMesEmail.innerHTML = "Pleace Enter Email";
    userEmail.style.borderColor = "red";
    emailLabel.style.color = "red";
    errImgEmail.innerHTML =
      "<img id='wrongeImg' src='https://cdn-icons-png.flaticon.com/128/1828/1828666.png'>";
    return false;
  } else {
    errImgEmail.innerHTML =
      "<img id='corectImg' src='https://cdn-icons-png.flaticon.com/128/14035/14035695.png'>";
  }
  errMesEmail.innerHTML = "";
  userEmail.style.borderColor = "white";
  emailLabel.style.color = "white";
}

function funPassword() {
  const validatePassword = /^.{8}$/;
  if (!validatePassword.test(userPassword.value)) {
    userPassword.style.borderColor = "red";
    passwordLabel.style.color = "red";
    errImgPassword.innerHTML =
      "<img id='wrongeImg' src='https://cdn-icons-png.flaticon.com/128/1828/1828666.png'>";
    errMesPassword.innerHTML = "Please Enter Password 8 Character";
    return false;
  } else {
    errImgPassword.innerHTML =
      "<img id='corectImg' src='https://cdn-icons-png.flaticon.com/128/14035/14035695.png'>";
  }
  errMesPassword.innerHTML = "";
  userPassword.style.borderColor = "white";
  passwordLabel.style.color = "white";
}
