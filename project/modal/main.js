function main() {
  const openModal = document.querySelector("#modal-btn");
  const closeModal = document.querySelector("#close-modal-btn");
  const modal = document.querySelector("#modal");

  openModal.addEventListener("click", function () {
    modal.style.display = "block";
    modal.style.transform = "translate(110%)";
  });

  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
    modal.style.transform = "translate(-110%)";
  });
}
main();
