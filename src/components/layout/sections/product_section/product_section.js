import product from '#assets/images/product.png'
import baby from '#assets/images/baby.png'
import weigth from '#assets/images/weight.png'
import check from '#assets/images/check.svg'
import productVideo from '#assets/images/product-video.png'
import { playButtonIcon } from '#modules/style_applier/get_icons'


import './product_section.css'

export default /*html*/ `
<div class="container-fluid mt-5 pt-5">
    <div class="d-flex flex-column flex-xl-row justify-content-around">
        <div class="d-flex flex-column-reverse flex-md-row justify-content-around align-items-center">
            <div class="titles-container d-flex flex-column">
                <h4 class="text-muted" id="productName"></h3>
                <h1>Better Stability and <span style="color:green">Strength</span> to Absorb the shock</h2>
                <h6 class="text-muted">Sell globaly in minutes with localized currencies, languages, and experiencies in every market</h6>
                <div class="d-flex flex-row justify-content-around">
                    <div class="d-flex flex-column">
                        <h6 class="text-muted">Price</h6>            
                        <h4>$125.75</h4>
                    </div>
                    <div class="d-flex flex-column">
                        <h6 class="text-muted">Color</h6>
                        <div class="d-flex flex-row">
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" checked type="radio" name="inlineRadioOptions" id="inlineRadioGrey" value="grey">
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadioPurple" value="purple">
                            </div> 
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
                            <h4>0-7 Yrs</h4>
                        </div>
                    </div>
                    <div class="d-flex flex-row justify-content-start">
                        <img class="weigth" src="${weigth}">
                        <div class="d-flex flex-column">
                            <h6>Weigth Capacity</h6>
                            <h4>0-25 Kgs</h4>
                        </div>
                    </div>
                </div>
                <div class="d-flex flex-column gap-2 gap-xl-4  mb-2">
                    <div class="d-flex flex-row">
                        <img class="check" src="${check}">
                        <h6>Comfy Headrest</h6>
                    </div>
                    <div class="d-flex flex-row">
                        <img class="check" src="${check}">
                        <h6>Remobable and Washable Cover</h6>
                    </div>
                    <div class="d-flex flex-row">
                        <img class="check" src="${check}">
                        <h6>5 Point Safety Harness</h6>
                    </div>
                </div>
                <div class="card mb-3 bg-dark text-light" style="max-width: 450px;">
                    <div class="d-flex flex-row align-items-center">
                        <div class="video-hero-image">
                            <img src="${productVideo}" class="card-img" alt="...">
                            <button type="button" class="btn btn-link">${playButtonIcon}</button>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Enjoy the best quality and features made by MoonCart</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`