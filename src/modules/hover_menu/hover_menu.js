export function setupHoverMenu(element) {
    let menu = false
    const setMenu = (state) => {
      element.innerHTML = state ? `menu is showing` : "menu is not showing"
    }
    element.addEventListener('mouseover', () => setMenu(!menu))
    element.addEventListener('mouseout', () => setMenu(menu))
    setMenu(menu)
  }