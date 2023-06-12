let box = document.getElementsByClassName("boxs");
let map = document.getElementsByClassName("map");
let cont = document.getElementsByClassName("container");
let cont2 = document.getElementsByClassName("container2");
cont2[0].className = "container2 inac_box";
console.log(box.length);
function clicked(x) {
  let y = x-1;
  let z = x+1;
  if(y < 0){
    y = map.length-1;
  }
  if(z > map.length-1){
    z = 0;
  }
  // for (let index = 0; index < box.length; index++) {
  //     // if(index == x)continue;
  //     box[index].className = "boxs inac_box";
  // }
  // console.log("click");
  cont[0].className = "container inac_box";
  cont2[0].className = "container2 container2";
  for (let index = 0; index < map.length; index++) {
    if (index != x) {
      map[index].className = "map moveto_left";
      // continue;
    }
  }
  map[x].className = "map active_from_left";
  map[z].className = "map moveto_right";
  map[y].className = "map moveto_left";
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

console.log(map.length);
function lclick(x) {
  if (x == 0) {
    map[0].className = "map inactive_to_right";
    map[1].className = "map moveto_left";
    map[2].className = "map moveto_left";
    map[3].className = "map moveto_left";
    map[3].className = "map active_from_left";
  } else if (x == 1) {
    map[1].className = "map inactive_to_right";
    map[0].className = "map active_from_left";
  } else if (x == 2) {
    map[2].className = "map inactive_to_right";
    map[1].className = "map active_from_left";
  } else if (x == 3) {
    map[3].className = "map inactive_to_right";
    map[2].className = "map active_from_left";
  }
}

function rclick(x) {
  if (x == 0) {
    map[0].className = "map inactive_to_left";
    map[1].className = "map active_from_left";
  } else if (x == 1) {
    map[1].className = "map inactive_to_left";
    map[2].className = "map active_from_right";
  } else if (x == 2) {
    map[2].className = "map inactive_to_left";
    map[3].className = "map active_from_right";
  } else if (x == 3) {
    map[3].className = "map inactive_to_left";
    map[0].className = "map moveto_right";
    map[1].className = "map moveto_right";
    map[2].className = "map moveto_right";
    map[3].className = "map moveto_right";
    map[0].className = "map active_from_right";
  }
}
function clickk(x){
  let y = x-1;
  let z = x+1;
  if(y < 0){
    y = map.length-1;
  }
  if(z > map.length-1){
    z = 0;
  }
  map[x].className = "map active_from_left";
  map[z].className = "map inactive_to_right";
  map[y].className = "map moveto_left";
}
function clickkk(x){
  let y = x-1;  

  let z = x+1;
  if(y < 0){
    y = map.length-1;
  }
  if(z > map.length-1){
    z = 0;
  }
  map[x].className = "map active_from_right";
  map[y].className = "map inactive_to_left";
  map[z].className = "map moveto_right";
}
