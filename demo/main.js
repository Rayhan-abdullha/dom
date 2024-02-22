// console.log(window);
// window.alert('coder')

// console.log(document.getElementById("div-id").innerHTML);
// console.log(document.getElementById("div-id").innerText);
// console.log(document.getElementById("div-id").textContent);

// window.addEventListener("resize", () => {
//   console.log(window.innerWidth);
// });

const divWidth = document.getElementById("div-id");
divWidth.style.color = "red";

// html collections
let listItem = document.getElementsByClassName("list-item");

// convert html collection to array
listItem = Array.from(listItem);
listItem.forEach((item) => {
  item.style.color = "green";
});

let listItem1 = document.querySelectorAll(".list-item1");

listItem1.forEach((item) => (item.style.color = "tomato"));
