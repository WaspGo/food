export { openModal, closeModal };

function openModal(modalSelector, modalTimerId) {
  const modalWin = document.querySelector(modalSelector);
  modalWin.classList.add("show");
  modalWin.classList.remove("hide");
  document.body.style.overflow = "hidden";

  if (modalTimerId) {
    clearInterval(modalTimerId);
  }
}
function closeModal(modalSelector) {
  const modalWin = document.querySelector(modalSelector);
  modalWin.classList.remove("show");
  modalWin.classList.add("hide");
  document.body.style.overflow = "";
}

export function initModal(triggerSelector, modalSelector, modalTimerId) {
  const modalTrigger = document.querySelectorAll(triggerSelector),
    modalWin = document.querySelector(modalSelector);

  modalTrigger.forEach((btn) => {
    btn.addEventListener("click", () => openModal(modalSelector, modalTimerId));
  });

  modalWin.addEventListener("click", (e) => {
    if (e.target === modalWin || e.target.getAttribute("data-close") == "") {
      closeModal(modalSelector);
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && modalWin.classList.contains("show")) {
      closeModal(modalSelector);
    }
  });

  function showModalByScroll() {
    if (
      window.pageYOffset + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight
    ) {
      openModal(modalSelector, modalTimerId);
      window.removeEventListener("scroll", showModalByScroll);
    }
  }

  window.addEventListener("scroll", showModalByScroll);
}
