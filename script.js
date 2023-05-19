// Check Email and output information
const buttonSave = document.getElementById("save");
const buttonCancel = document.getElementById("cancel");
const formEmail = document.getElementById("your-email");
const email = document.getElementById("email");
const errorEmpty = document.getElementById("error");

const checkEmail = () => {
  const emptyError = "";
  const text = email.value;
  const regExp =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (text.match(regExp)) {
    console.log(text);
    // document.getElementById("icon-tick").style.display = "inline";
    document.getElementById("icon-tick").src = "./img/icons8-tick.svg";
  } else {
    document.getElementById("icon-tick").src = "./img/icons8-cancel.svg";
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

const selectFunction = () => {
  document.getElementById("selectID").style.color = "#1C1C1C";
};

const menuSettings = document.querySelectorAll(".menu-setting");
menuSettings.forEach((menuSetting) => {
  menuSetting.addEventListener("click", function () {
    menuSettings.forEach((title) => title.classList.remove("clicked"));
    // Add 'clicker' class to the menu menu title
    this.classList.add("clicked");
  });
});
