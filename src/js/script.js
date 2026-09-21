import "../scss/style.scss";

import { initCalc } from "./components/calc";
import { initForms } from "./components/forms";
import { initMenu } from "./components/menu";
import { initModal, openModal } from "./components/modal";
import { initTabs } from "./components/tabs";
import { initTimer } from "./components/timer";
import { initSlider } from "./components/slider";

window.addEventListener("DOMContentLoaded", () => {
  const modalTimerId = setTimeout(
    () => openModal(".modal", modalTimerId),
    300000,
  );

  initCalc();
  initModal("[data-modal]", ".modal", modalTimerId);
  initForms("form", modalTimerId);
  initMenu();
  initTimer(".timer", "2026-10-11");
  initTabs(
    ".tabheader__item",
    ".tabcontent",
    ".tabheader__items",
    "tabheader__item_active",
  );
  initSlider({
    container: ".offer__slider",
    nextArrow: ".offer__slider-next",
    prevArrow: ".offer__slider-prev",
    slide: ".offer__slide",
    totalCounter: "#total",
    currentCounter: "#current",
    wrapper: ".offer__slider-wrapper",
    field: ".offer__slider-inner",
  });
});
