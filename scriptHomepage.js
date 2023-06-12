var counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 3) {
    counter = 1;
  }
}, 5000);

console.log("halo");
function slideske(n) {
  let i = n;
  document.getElementById("radio" + n).checked = true;
  console.log("slideske : " + n);
}
const menu_btn = document.querySelector(".hamburger");
const mobile_menu = document.querySelector(".mobile-nav");

menu_btn.addEventListener("click", function () {
  console.log("hamburger activated");
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

//belum jadi
let archonactive = document.querySelectorAll(".thearchon");
let archonbg = document.querySelectorAll(".archonbg");

archonactive[0].addEventListener("mouseover", function () {
  let archonbg = document.getElementsByClassName("archonbg");
  console.log(archonbg[0]);
  archonbg[0].style.opacity = "0";
});

archonactive[0].addEventListener("mouseout", function () {
  console.log("hovered");
  archonbg[0].style.opacity = "1";
});

archonactive[1].addEventListener("mouseover", function () {
  let archonbg = document.getElementsByClassName("archonbg");
  console.log(archonbg[1]);
  archonbg[1].style.opacity = "0";
});

archonactive[1].addEventListener("mouseout", function () {
  console.log("hovered");
  archonbg[1].style.opacity = "1";
});

archonactive[2].addEventListener("mouseover", function () {
  let archonbg = document.getElementsByClassName("archonbg");
  console.log(archonbg[2]);
  archonbg[2].style.opacity = "0";
});

archonactive[2].addEventListener("mouseout", function () {
  console.log("hovered");
  archonbg[2].style.opacity = "1";
});

archonactive[3].addEventListener("mouseover", function () {
  let archonbg = document.getElementsByClassName("archonbg");
  console.log(archonbg[3]);
  archonbg[3].style.opacity = "0";
});

archonactive[3].addEventListener("mouseout", function () {
  console.log("hovered");
  archonbg[3].style.opacity = "1";
});
