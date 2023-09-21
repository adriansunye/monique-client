import product from '#assets/images/product.png'
import baby from '#assets/images/baby.png'
import weigth from '#assets/images/weight.png'
import productVideo from '#assets/images/product-video.png'
import { playButtonIcon } from '#modules/style_applier/get_icons'

import './product_section.css'

export default /*html*/ `
<div class="container-fluid mt-5 p-5">
    <div class="d-flex flex-column flex-xl-row justify-content-around ">
        <div class="d-flex flex-column-reverse flex-md-row  align-items-md-center">
            <div class="titles-container d-flex flex-column gap-3">
                <h4 class="text-muted highlight-font" id="productName"></h4>
                <h1 class="highlight-font" id="productDescription"></h1>
                <h6 id="productDescriptionDetail"></h6>
                <div class="d-flex flex-row justify-content-start gap-5">
                    <div class="d-flex flex-column">
                        <h6>Price</h6>            
                        <h4 classs="highlight-font" id="productPrice"></h4>
                    </div>
                    <div class="d-flex flex-column">
                        <h6>Color</h6>
                        <div class="d-flex flex-row" id="productColors"></div>
                    </div>
                </div>
                <div class="d-flex flex-row justify-content-start gap-3">
                    <button type="button" class="btn-md btn-dark p-2 me-2 border-1 hover-filter">ADD TO CART</button>
                    <button type="button" class="btn-md btn-light p-2 border border-secondary hover-filter">VIEW DETAILS</button>
                </div>
            </div>
            <div class="d-flex justify-content-center pb-2">
                <img class="productImage" src="${product}">
			</div>
        </div>
        <div class="d-flex flex-column gap-3 mt-5">
            <h4 class="highlight-font">Safety Certified</h4>
            <div class="d-flex flex-column flex-md-row flex-lg-row flex-xl-column justify-content-between gap-5">
                <div class="d-flex flex-column flex-xl-row gap-3">
                    <div class="d-flex flex-row gap-2">
                        <img class="baby" src="${baby}">
                        <div class="d-flex flex-column mt-2">
                            <h6 class="highlight-color">Age Group</h6>
                            <h4 class="highlight-font" id="productAgeGroup"></h4>
                        </div>
                    </div>
                    <div class="d-flex flex-row justify-content-start gap-2">
                        <img class="weigth" src="${weigth}">
                        <div class="d-flex flex-column mt-2">
                            <h6 class="highlight-color">Weigth Capacity</h6>
                            <h4 class="highlight-font" id="productMaxWeigth"></h4>
                        </div>
                    </div>
                </div>
                <div class="d-flex flex-column justify-content-around gap-2 gap-xl-4 highlight-font" id="productInformation"></div>
                <div class="d-flex justify-content-center">
                <button type="button" class="btn btn-link" data-bs-toggle="modal" data-bs-target="#demostrationModal">
                    <div class="card bg-dark text-light border-0" style="width: 315px;">
                        <div class="d-flex flex-row align-items-center">
                            <div class="video-hero-image">
                                <img src="${productVideo}" class="card-img" alt="...">
                                <div class="card-img-overlay d-flex justify-content-center align-items-center hover-filter">${playButtonIcon}</div>
                            </div>
                            <div class="card-body">
                                <h6 class="card-title product-slogan highlight-font "></h5>
                            </div>
                        </div>
                    </div>
                </button>
                </div>
            </div>
        </div>
    </div>
</div>
`