const button = document.querySelector("button");

addClickEventListener(button, function () {
  console.log("clicked");
});

function addClickEventListener(element, callback) {
  element.addEventListener("click", callback);
}

setTimeout(() => {
  console.log("inside");
  setTimeout(() => {
    console.log("inside 2");
    setTimeout(() => {
      console.log("inside 3");
    }, 0);
  }, 1000);
}, 1000);
