const userName = document.getElementById("username-field");
const password = document.getElementById("password-field");

const login = () => {
  fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: userName.value,
      password: password.value,
      // expiresInMins: 60, // optional
    }),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        alert("invalid username or password");
      }
    })
    .then((data) => {
      localStorage.setItem("token", data.token);
      localStorage.setItem("token", data.firstName);
      console.log("Login successful");
      window.location.href = "./index.html";
    })
    .catch((error) => {
      console.error("Login failed", error);
    });
};

const iconEyes = document.getElementById("field-icon");

const showHidePassword = () => {
  const currentType = password.getAttribute("type");
  password.setAttribute(
    "type",
    currentType === "password" ? "text" : "password"
  );
  if (currentType === "password") {
    iconEyes.src = "./img/show.png";
  } else if (currentType === "text") {
    iconEyes.src = "./img/hide.png";
  }
};
