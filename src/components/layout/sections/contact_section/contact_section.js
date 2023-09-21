import "./contact_section.css"
import babyBackground from '#assets/images/bg-baby.jpg'


export default /*html*/ `
<div class="card bg-dark text-white mt-5" >
    <img src="${babyBackground}" class="card-img" alt="...">
    <div class="card-img-overlay text-light d-flex justify-content-center flex-column text-center"
    style="background-color: rgba(0, 0, 0, 0.5)">
        <h3 class="card-title product-slogan"></h3>
    </div>
</div>
`