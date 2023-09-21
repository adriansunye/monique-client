import footerTopLeftBackground from '#assets/images/pic1.png'
import footerTopRightBackground from '#assets/images/pic2.png'
import footerBottomLeftBackground from '#assets/images/pic3.png'
import footerBottomRightBackground from '#assets/images/pic4.png'
import instagramLogo from '#assets/images/instagram-logo.svg'
import moniqueLogoWhite from '#assets/images/logo-white.png'
import './footer_navigation.css'


export default /*html*/ `
    <div class="card border-0 bg-dark text-white mt-5 rounded-0 ">
        <div class="d-flex flex-column flex-md-row justify-content-between g-0 ">
            <div class="d-flex flex-row justify-content-between">
                <div class="row row-cols-2 g-0 position-relative">
                    <img src="${footerTopLeftBackground}" class="img-fluid d-block" alt="...">
                    <img src="${footerTopRightBackground}" class="img-fluid d-block" alt="...">
                    <img src="${footerBottomLeftBackground}" class="img-fluid d-block" alt="...">
                    <img src="${footerBottomRightBackground}" class="img-fluid d-block" alt="...">
                    <div class="bg-light text-dark instagram-overlay d-flex flex-column justify-content-center text-center p-1"> 
                        <img class="instagram-icon mt-2" src="${instagramLogo}"/>
                        <h6 class="mt-2">Share with #MoonCart</h6>
                        <p class="small">Follow MoonCart for inspiration</p>
                    </div>
                </div>
            </div>
            <div class="col-md-8">
                <div class="card-body d-flex flex-column mx-2">
                    <div class="d-flex flex-row justify-content-between">
                        <img src="${moniqueLogoWhite}"/>
                        <div class="social-links"></div>
                    </div>
                    <hr>
                    <div class="card-body d-flex flex-row justify-content-between justify-content-md-around footer-links flex-wrap gap-5">
                        <ul class="list-group list-unstyled gap-2">
                            <li class="list-item mb-2">Our Stores</li>
                            <a class="link-unstyled" href=""><li class="list-item">New York</li></a>
                            <a class="link-unstyled" href=""><li class="list-item">London SF</li></a>
                            <a class="link-unstyled" href=""><li class="list-item">Edinburgh</li></a>
                            <a class="link-unstyled" href=""><li class="list-item">Los Angeles</li></a>
                            <a class="link-unstyled" href=""><li class="list-item">Chicago</li></a>
                            <a class="link-unstyled" href=""><li class="list-item">Las Vegas</li></a>
                        </ul>
                        <ul class="list-group list-unstyled gap-2">
                            <li class="list-item mb-2">Useful Links</li>
                            <a class="link-unstyled" href=""><li class="list-item">Privacy Policy</li></a>
                            <a class="link-unstyled" href=""><li class="list-item">Returns</li></a>
                            <a class="link-unstyled" href=""><li class="list-item">Terms & Conditions</li></a>
                            <a class="link-unstyled" href=""><li class="list-item">Contact Us</li></a>
                            <a class="link-unstyled" href=""><li class="list-item">Latest News</li></a>
                            <a class="link-unstyled" href=""><li class="list-item">Our Sitemap</li></a>
                        </ul>
                        <ul class="list-group list-unstyled gap-2">
                            <li class="list-item mb-2">Footer Menu</li>
                            <a class="link-unstyled" href=""><li class="list-item">Instagram Profile</li></a>
                            <a class="link-unstyled" href=""><li class="list-item">New Collection</li></a>
                            <a class="link-unstyled" href=""><li class="list-item">Woman Dress</li></a>
                            <a class="link-unstyled" href=""><li class="list-item">Contact Us</li></a>
                            <a class="link-unstyled" href=""><li class="list-item">Latest News</li></a>
                        </ul>
                    </div>
                    <div class="card-footer text-center ">
                        <hr>
                        <div class="text-muted copyright">© 2023 HugeBinary Theme. All Rights Reserved<div> 
                    </div>
                </div>
            </div>
        </div>
    </div>
`