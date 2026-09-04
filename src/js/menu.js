import vegyImage from "../img/tabs/vegy.jpg";
import eliteImage from "../img/tabs/elite.jpg";
import postImage from "../img/tabs/post.jpg";

window.addEventListener("DOMContentLoaded", () => {
  class MenuCard {
    constructor(
      title,
      img,
      alt,
      descr,
      price,
      parentSelector = ".menu__field .container",
      ...classes
    ) {
      this.title = title;
      this.img = img;
      this.alt = alt;
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

  const data = {
    first: new MenuCard(
      "Меню 'Фітнеc'",
      vegyImage,
      "vegy",
      "Меню «Фітнес» — це новий підхід до приготування страв: більше свіжих овочів та фруктів. Продукт для активних і здорових людей. Це абсолютно новий продукт за оптимальною ціною та високої якості!",
      9,
      undefined,
      "menu__item",
    ).render(),
    second: new MenuCard(
      "Меню ʼПреміумʼ",
      eliteImage,
      "elite",
      "У меню «Преміум» ми використовуємо не лише гарний дизайн упаковки, а й якісне приготування страв. Червона риба, морепродукти, фрукти — ресторанне меню без відвідування ресторану!",
      10,
      undefined,
      "menu__item",
    ).render(),
    third: new MenuCard(
      "Меню 'Постне'",
      postImage,
      "post",
      "Меню «Постне» — це ретельний підбір інгредієнтів: повна відсутність продуктів тваринного походження, молоко з мигдалю, вівса, кокоса або гречки, оптимальна кількість білків завдяки тофу та імпортним вегетаріанським стейкам.",
      13,
      undefined,
      "menu__item",
    ).render(),
  };
});
