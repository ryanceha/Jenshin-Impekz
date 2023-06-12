// const genchar = document.getElementById('genchar');
// var peak = true;
// setInterval(function(){
//     if (peak){
//         genchar.style.transform = "rotate(-360deg)";
//         peak = false;
//     }
//     else if (!peak){
//         genchar.style.transform = "rotate(360deg)";
//         peak = true;
//     }
// }, 10);



let charIndex = [1, 1, 1, 1];
let charId = ["each-char1", "each-char2", "each-char3", "each-char4"];

currentSlides(1, 0);
currentSlides(1, 1);
currentSlides(1, 2);
currentSlides(1, 3);

function nextSlide(x, y) {
  currentSlides((charIndex[y] += x), y);
}

function showSlides(x, y) {
  currentSlides((charIndex[y] = x), y);
}

function currentSlides(x, y) {
  console.log("showSlides : " + x);
  let i = 0;
  let z = document.getElementsByClassName(charId[y]);
//   let quote = document.getElementsByClassName("" + charId[y]+" quote");
//   let id = document.getElementsByClassName(""+charId[y]+" characters");
//   let exp = document.getElementsByClassName(""+charId[y]+" char_exp");
//   let mobile = document.getElementsByClassName(""+charId[y]+" char-mobile");
//   let char = document.getElementsByClassName(""+charId[y]+" char-img");
//   let element = document.getElementsByClassName(""+charId[y]+" logo_elemen");
//   let card = document.getElementsByClassName(""+charId[y]+" card_monstadt");
//   var string = "" + charId[y]+" quote";
  // console.log(z.length);
  // console.log(charId[y]);
//   console.log(card.length);
//   console.log(char.length);

  
//   console.log(exp.length);

  if (x > z.length) {
    charIndex[y] = 1;
  }
  if (x < 1) {
    charIndex[y] = z.length;
  }
  for (i = 0; i < z.length; i++) {
    z[i].style.display = "none";
  }
  console.log("Sekarang lagi di...");
  console.log(z[charIndex[y] - 1]);
  z[charIndex[y] - 1].style.display = "flex";
}

const menu_btn = document.querySelector(".hamburger");
const mobile_menu = document.querySelector(".mobile-nav");

menu_btn.addEventListener("click", function () {
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

function glow(n) {
  let op = n;
  let select = document.getElementsByClassName("char_city");
  for (i = 0; i < select.length; i++) {
    select[i].className = "char_city";
  }
  // console.log(n);
  // console.log(select.length);
  // console.log(op - 1);
  select[op - 1].className = "char_city glow";
}

//function that shows scrolling
const scroller = document.querySelector("#content");

scroller.addEventListener("scroll", (event) => {
  let sb = document.querySelector(".char_sidebar");
  // console.log(scroller.scrollTop);
  let heights = scroller.clientHeight;
  // console.log(heights*3);
  // console.log(sb.length);
  // sb.style.transition = "all 0.5s ease-in-out";
  if (scroller.scrollTop <= heights) {
    glow(1);
  } else if (scroller.scrollTop <= heights * 2) {
    glow(2);
  } else if (scroller.scrollTop <= heights * 3) {
    glow(3);
  } else if (scroller.scrollTop <= heights * 4) {
    glow(4);
  }
  if (scroller.scrollTop >= heights * 3.5) {
    sb.style.transform = "translateX(-100%)";
  } else {
    sb.style.transform = "translateX(0%)";
  }
});
