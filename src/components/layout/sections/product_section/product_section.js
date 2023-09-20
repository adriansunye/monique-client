import product from '#assets/images/product.png'
import baby from '#assets/images/baby.png'
import weigth from '#assets/images/weight.png'
import productVideo from '#assets/images/product-video.png'
import { playButtonIcon } from '#modules/style_applier/get_icons'

import './product_section.css'

export default /*html*/ `
<div class="container-fluid mt-5 pt-5">
    <div class="d-flex flex-column flex-xl-row justify-content-around">
        <div class="d-flex flex-column-reverse flex-md-row justify-content-around align-items-center">
            <div class="titles-container d-flex flex-column">
                <h4 class="text-muted" id="productName"></h4>
                <h1  id="productDescription"></h1>
                <h6 class="text-muted" id="productDescriptionDetail"></h6>
                <div class="d-flex flex-row justify-content-around">
                    <div class="d-flex flex-column">
                        <h6 class="text-muted" >Price</h6>            
                        <h4 id="productPrice"></h4>
                    </div>
                    <div class="d-flex flex-column">
                        <h6 class="text-muted">Color</h6>
                        <div class="d-flex flex-row" id="productColors">
                        </div>
                    </div>
                </div>
                <div class="d-flex flex-row justify-content-center">
                    <button type="button" class="btn-md btn-dark p-2 me-2">ADD TO CART</button>
                    <button type="button" class="btn-md btn-light p-2">VIEW DETAILS</button>
                </div>
            </div>
            <div class="d-flex justify-content-center">
                <img class="product" src="${product}">
			</div>
        </div>
        <div class="d-flex flex-column gap-3 mt-5">
            <h4>Safety Certified</h4>
            <div class="d-flex flex-column flex-md-row flex-lg-row flex-xl-column gap-5">
                <div class="d-flex flex-column flex-lg-row">
                    <div class="d-flex flex-row">
                        <img class="baby" src="${baby}">
                        <div class="d-flex flex-column">
                            <h6>Age Group</h6>
                            <h4 id="productAgeGroup"></h4>
                        </div>
                    </div>
                    <div class="d-flex flex-row justify-content-start">
                        <img class="weigth" src="${weigth}">
                        <div class="d-flex flex-column">
                            <h6>Weigth Capacity</h6>
                            <h4 id="productMaxWeigth"></h4>
                        </div>
                    </div>
                </div>
                <div class="d-flex flex-column gap-2 gap-xl-4 mb-2" id="productInformation"></div>
                <div class="card mb-3 bg-dark text-light" style="max-width: 450px;">
                    <div class="d-flex flex-row align-items-center">
                        <div class="video-hero-image">
                            <img src="${productVideo}" class="card-img" alt="...">
                            <button type="button" class="btn btn-link">${playButtonIcon}</button>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title" id="productSlogan"></h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`