export function setupHoverMenu(element) {
  const setMenu = () => {
    let menuOptions = [];
    switch (element.text().replace(/\s/g, '')) {
      case "HOME":
        menuOptions.push("New Products",
          "Best Sellers",
          "Coming Soon"
        )
        break;

      case "SHOP":
        menuOptions.push("Pricing Table",
          "Our Gift Vouchers",
        )
        break;

      case "BLOG":
        menuOptions.push("About Us",
          "About Me",
          "What We Do",
          "Faqs", 
          "Our Team",
          "Contact Us",
        )
        break;

      case "PAGES":
        menuOptions.push("About Us",
          "About Me",
          "Pricing Table",
          "Our Gift Vouchers",
          "What We Do",
          "Faqs", 
          "Our Team",
          "Contact Us",
          "Error 404",
          "Under Construction",
          "Coming Soon"
        )
        break;
    }

    menuOptions.forEach((el) => 
    element.children('ul').append(/*html*/ `
      <li><a class="dropdown-item" href="#">${el}</a></li>
      `
    ));
  }

  setMenu()
}