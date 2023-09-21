import {
    chevronDownIcon,
    chevronRightIcon,
} from '#modules/style_applier/get_icons.js'

export function setupNavigationItems (element) {
    
    const setNavigationItems = () => {
        let htmlText = element[0].id.substring(0, element[0].id.indexOf("-"));
        element.append(/*html*/ `
        <div class="d-flex justify-content-between">
            <a class="nav-link" role="button" data-bs-toggle="dropdown" aria-expanded="false" href="#">${htmlText.toUpperCase()} 
                <span class="d-none d-lg-inline-block">${chevronDownIcon}</span>
            </a>
            <button class="btn btn-dark d-block d-lg-none my-1">
                <span class="closed-icon">${chevronRightIcon}</span>
                <span class="opened-icon">${chevronDownIcon}</span>
            </button>
        </div>
        <ul class="dropdown-menu border-0"></ul>      
    `
    )
    }

    setNavigationItems()
}