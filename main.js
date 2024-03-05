document.body.addEventListener("click", function () {
  console.log("clicked body");
});
document.addEventListener("click", function () {
  console.log("clicked document");
});
document.querySelector("button").addEventListener("click", function (e) {
  console.log("button");
  e.stopPropagation();
});
