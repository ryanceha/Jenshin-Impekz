var counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 3) {
    counter = 1;
  }
}, 5000);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElementsL = document.querySelectorAll(".hidden-left");
const hiddenElementsR = document.querySelectorAll(".hidden-right");
hiddenElementsL.forEach((el) => observer.observe(el));
hiddenElementsR.forEach((el) => observer.observe(el));

const menu_btn = document.querySelector(".hamburger");
const mobile_menu = document.querySelector(".mobile-nav");

menu_btn.addEventListener("click", function () {
  // console.log("hamburger activated");
  menu_btn.classList.toggle("is-active");
  mobile_menu.classList.toggle("is-active");
});
const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  const select = dropdown.querySelector(".select");
  const menu = dropdown.querySelector(".menu");
  const options = dropdown.querySelectorAll(".menu li");
  const selected = dropdown.querySelector(".selected");

  select.addEventListener("click", () => {
    console.log("dropdown activated");
    select.classList.toggle("select-clicked");
    menu.classList.toggle("menu-open");
  });

  options.forEach((option) => {
    option.addEventListener("click", () => {
      selected.innerText = option.innerText;
      select.classList.remove("select-clicked");
      menu.classList.remove("menu-open");

      options.forEach((option) => {
        option.classList.remove("dragdown-active");
      });
      option.classList.add("dragdown-active");
    });
  });
});
