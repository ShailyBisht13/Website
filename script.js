const carousel = document.getElementById("carousel");
const scrollAmount = 320;
document.querySelector(".left").onclick = () => {
  carousel.scrollBy({ left: -scrollAmount, behaviour: "smooth" });
};
document.querySelector(".right").onclick = () => {
  carousel.scrollBy({ left: -scrollAmount, behaviour: "smooth" });
};
const loginBtn = document.getElementById("loginBtn");
  const loginBox = document.getElementById("loginBox");

  loginBtn.addEventListener("click", () => {
    loginBox.style.display = loginBox.style.display === "block" ? "none" : "block";
  });

  function continueWithMail() {
    alert("Continue with Email clicked!");
    // You can redirect or show a login form here
  }