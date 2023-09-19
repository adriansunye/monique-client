export function setupHoverMenu(element) {
    let menu = false
    const setMenu = (state) => {
      element.html(state ? `menu is showing` : "menu is not showing")
    }
    element.mouseenter( () => setMenu(!menu))
    element.mouseleave( () => setMenu(menu))
    setMenu(menu)
  }