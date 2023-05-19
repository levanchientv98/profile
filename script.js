// Check Email and output information
const buttonSave = document.getElementById("save");
const buttonCancel = document.getElementById("cancel");
const formEmail = document.getElementById("your-email");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const address = document.getElementById("address");
const contact = document.getElementById("contact-number");
const city = document.getElementById("city-id");

const errorEmpty = document.getElementById("error");

// Check token if !token return login.html
if (!localStorage.getItem("token")) {
  window.location.href = "login.html";
}

const checkEmail = () => {
  const emptyError = "";
  const text = email.value;
  const regExp =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (text.match(regExp)) {
    console.log(text);
    // document.getElementById("icon-tick").style.display = "inline";
    document.getElementById("field-icon").src = "./img/icons8-tick.svg";
  } else {
    document.getElementById("field-icon").src = "./img/icons8-cancel.svg";
  }
  return true;
};

const cancelFunction = () => {
  document.getElementById("form-profile").reset();
};

const slideBarOpen = () => {
  document.getElementsByClassName("flex-container1")[0].style.display = "flex";
};

const slideBarClose = () => {
  document.getElementsByClassName("flex-container1")[0].style.display = "none";
};

const menuSettings = document.querySelectorAll(".text-style");
menuSettings.forEach((menuSetting) => {
  menuSetting.addEventListener("click", function () {
    menuSettings.forEach((title) => title.classList.remove("clicked"));
    // Add 'clicker' class to the menu menu title
    this.classList.add("clicked");
  });
});

const saveFunction = () => {
  const inputs = [firstName, lastName, email, address, contact, city];

  inputs.forEach((input) => {
    if (input.value === "" || input.value == null) {
      input.style.borderColor = "#ff0000";
    } else {
      input.style.borderColor = "";
    }
  });
};

// get first name and avatar from localStorage in class name
let firstName1 = localStorage.getItem("firstName");
const showName = document.getElementById("information");
showName.innerHTML = firstName1;
let avatar = localStorage.getItem("image");
const showAvatar = document.getElementById("image-id");
showAvatar.src = avatar;

// log out
const logOut = () => {
  localStorage.clear();
  location.reload();
};
