import { getResource } from "../api/api";

export function initMenu() {
  class MenuCard {
    constructor(
      img,
      altimg,
      title,
      descr,
      price,
      parentSelector = ".menu__field .container",
      ...classes
    ) {
      this.title = title;
      this.img = img;
      this.alt = altimg;
      this.descr = descr;
      this.price = price;
      this.classes = classes;
      this.parent = document.querySelector(parentSelector);
      this.transfer = 44;
      this.changeToUAH();
    }
    changeToUAH() {
      this.price = this.price * this.transfer;
    }

    render() {
      const element = document.createElement("div");
      if (this.classes.length === 0) {
        this.element = "menu__item";
        element.classList.add(this.element);
      } else {
        this.classes.forEach((className) => element.classList.add(className));
      }

      element.innerHTML = `
            <img src=${this.img} alt="${this.alt}">
            <h3 class="menu__item-subtitle">${this.title}"</h3>
            <div class="menu__item-descr">
          ${this.descr}
            </div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
              <div class="menu__item-cost">Ціна:</div>
              <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
            </div>
          `;

      this.parent.append(element);
    }
  }

  getResource("http://localhost:3000/menu").then((data) => {
    data.forEach(({ img, altimg, title, descr, price }) => {
      new MenuCard(
        img,
        altimg,
        title,
        descr,
        price,
        undefined,
        "menu__item",
      ).render();
    });
  });

  // getResource("http://localhost:3000/menu").then((data) => createCard(data));

  // function createCard(data) {
  //   data.forEach(({ img, altimg, title, descr, price }) => {
  //     const element = document.createElement("div");

  //     element.classList.add("menu__item");
  //     element.innerHTML = `<img src=${img} alt="${altimg}">
  //           <h3 class="menu__item-subtitle">${title}"</h3>
  //           <div class="menu__item-descr">
  //         ${descr}
  //           </div>
  //           <div class="menu__item-divider"></div>
  //           <div class="menu__item-price">
  //             <div class="menu__item-cost">Ціна:</div>
  //             <div class="menu__item-total"><span>${price}</span> грн/день</div>
  //           </div>
  // `;

  //     document.querySelector(".menu .container").append(element);
  //   });
  // }
}
