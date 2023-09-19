import { 
  chevronDownIcon, 
  searchIcon, 
  heartIcon, 
  cartIcon, 
  closeIcon
} from '../../../modules/style_applier/get_icons.js' 
import './header_navigation.css'

export default /*html*/ `
  <nav class="navbar navbar-expand-lg navbar-light fixed-top shadow-sm">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="../../../public/assets/images/logo.png" alt="" width="60" height="40" class="d-inline-block align-text-top">
      </a>
      <button class="navbar-toggler navbar-toggler-right collapsed navbar-dark bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        <span class="close">${closeIcon}</span>
      </button>
      <div class="collapse navbar-collapse" id="navbarScroll">
        <ul class="navbar-nav me-auto ms-lg-5" style="--bs-scroll-height: 100px;">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">HOME ${chevronDownIcon}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">SHOP ${chevronDownIcon}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">BLOG ${chevronDownIcon}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">PAGES ${chevronDownIcon}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">CONTACT US</a>
          </li>
        </ul>
        <ul class="navbar-nav me-5 mx-auto" style="--bs-scroll-height: 100px;">
            <li class="nav-item me-3">
              <a class="nav-link" href="#">LOGIN / REGISTER</a>
          </li>
          <li class="nav-item">
              <a class="nav-link" href="#">${searchIcon}</a>
          </li>
          <li class="nav-item">
              <a class="nav-link" href="#">${heartIcon}</a>
          </li>
          <li class="nav-item">
              <a class="nav-link" href="#">${cartIcon}</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
`