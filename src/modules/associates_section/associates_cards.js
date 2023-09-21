import $ from "#modules/jquery_module.js"
import youtubeLogo from '#assets/images/associates/logo1.png'
import slackLogo from '#assets/images/associates/logo2.png'
import amazonLogo from '#assets/images/associates/logo3.png'
import microsoftLogo from '#assets/images/associates/logo4.png'
import lenovoLogo from '#assets/images/associates/logo5.png'
import netflixLogo from '#assets/images/associates/logo6.png'
import googleLogo from '#assets/images/associates/logo7.png'
import dribbleLogo from '#assets/images/associates/logo8.png'


export function setupAssociatesCards() {
    const images = [
        youtubeLogo,
        slackLogo,
        amazonLogo,
        microsoftLogo,
        lenovoLogo,
        netflixLogo,
        googleLogo,
        dribbleLogo
    ]

    const setAssociatesCards = () => {
        images.forEach( (el) => {
            $("#associates_section .associates-cards").append( /*html*/`
                <div class="col-md-8-auto ">
                    <div class="card h-100 text-dark bg-light text-center border-0">
                        <div class="card-body">
                            <img src='${el}'>
                        </div>
                    </div>
                </div>`
            )
        })
    }
    setAssociatesCards();
}