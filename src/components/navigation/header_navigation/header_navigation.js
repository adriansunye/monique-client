import {
  searchIcon,
  heartIcon,
  cartIcon,
  closeIcon
} from '#modules/style_applier/get_icons.js'
import './header_navigation.css'
import logo from '#assets/images/logo.png'

export default /*html*/ `
  <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="${logo}" alt="" width="60" height="40" class="d-inline-block align-text-top">
      </a>
      <button class="navbar-toggler navbar-toggler-right collapsed navbar-dark bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        <span class="close">${closeIcon}</span>
      </button>
      <div class="collapse navbar-collapse" id="navbarScroll">
        <ul class="navbar-nav me-auto ms-lg-5" style="--bs-scroll-height: 100px;">
          <li id="home-nav-item" class="nav-item dropdown hover-menu"></li>
          <hr class="d-block d-lg-none">
          <li id="shop-nav-item" class="nav-item dropdown hover-menu"></li>
          <hr class="d-block d-lg-none">
          <li id="blog-nav-item" class="nav-item dropdown hover-menu"></li>
          <hr class="d-block d-lg-none">
          <li id="pages-nav-item" class="nav-item dropdown hover-menu"></li>
          <hr class="d-block d-lg-none">
          <li class="nav-item">
            <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">CONTACT US</a>
          </li>
          <hr class="d-block d-lg-none">
          <li class="nav-item">
            <div class="social-links d-lg-none d-flex flex-row justify-content-start align-items-center gap-3 mt-3"></div>
          </li>
        </ul>
        <ul class="navbar-nav me-5 mx-auto d-none d-lg-flex" style="--bs-scroll-height: 100px;">
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