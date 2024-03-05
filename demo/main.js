const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
  item.addEventListener("click", () => {
    let count = parseInt(item.dataset.clicks);
    item.dataset.clicks = count + 1;
    item.innerText = count;
  });
});

// form
function todos() {
  const input = document.querySelector("input");
  const todos = document.querySelector(".todos");
  const form = document.querySelector("#form-input-id");
  const submit = document.querySelector("#submit");
  const dispalay = document.querySelector("#add-todos");

  // input margin
  todos.style.marginTop = "20px";
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const value = input.value;
    const p = document.createElement("p");
    p.innerText = value;
    dispalay.appendChild(p);
    input.value = "";
    submit.innerHTML = "send";
    p.classList.add("test");
    p.style.color = "red";
    p.style.cursor = "pointer";

    const items = document.querySelectorAll(".test");
    console.log(items);
    items.forEach((li) => {
      li.addEventListener("click", function () {
        li.remove();
      });
    });
  });
}
todos();
