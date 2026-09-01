window.addEventListener("DOMContentLoaded", () => {
  class MenuCard {
    constructor(
      title,
      img,
      alt,
      descr,
      price,
      parentSelector = ".menu__field .container",
    ) {
      this.title = title;
      this.img = img;
      this.alt = alt;
      this.descr = descr;
      this.price = price;
      this.parent = document.querySelector(parentSelector);
      this.transfer = 44;
      this.changeToUAH();
    }
    changeToUAH() {
      this.price = this.price * this.transfer;
    }

    render() {
      const element = document.createElement("div");
      element.classList.add("menu__item");

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
      "/src/img/tabs/vegy.jpg",
      "vegy",
      "Меню «Фітнес» — це новий підхід до приготування страв: більше свіжих овочів та фруктів. Продукт для активних і здорових людей. Це абсолютно новий продукт за оптимальною ціною та високої якості!",
      9,
    ).render(),
    second: new MenuCard(
      "Меню ʼПреміумʼ",
      "/src/img/tabs/elite.jpg",
      "elite",
      "У меню «Преміум» ми використовуємо не лише гарний дизайн упаковки, а й якісне приготування страв. Червона риба, морепродукти, фрукти — ресторанне меню без відвідування ресторану!",
      10,
    ).render(),
    third: new MenuCard(
      "Меню 'Постне'",
      "/src/img/tabs/post.jpg",
      "post",
      "Меню «Постне» — це ретельний підбір інгредієнтів: повна відсутність продуктів тваринного походження, молоко з мигдалю, вівса, кокоса або гречки, оптимальна кількість білків завдяки тофу та імпортним вегетаріанським стейкам.",
      13,
    ).render(),
  };
});
