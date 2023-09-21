import "./contact_section.css"
import babyBackground from '#assets/images/bg-baby.jpg'


export default /*html*/ `
<div class="card bg-dark text-white mt-5 rounded-0" >
    <img src="${babyBackground}" class="card-img" alt="...">
    <div class="card-img-overlay filter text-white d-flex justify-content-center flex-column text-center">
        <h3 class="card-title product-slogan highlight-font"></h3>
        <button type="button" class="btn-contant-sedtion btn align-self-center btn-light p-2 px-3">Shop Now</button>
    </div>
    <div class="card-footer text-center py-3">
            <div class="text-white "><span class="highlight-font">Questions?</span> Our experts will help find the grar that's right for you
            <button type="button" class="btn-contant-sedtion ms-3 btn align-self-center btn-light p-2 px-3">Get in touch</button>
            <div>
    </div>
</div>
`