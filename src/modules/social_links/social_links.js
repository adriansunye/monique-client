import $ from "#modules/jquery_module.js"
import { facebookIcon, twitterIcon, linkedinIcon, instagramIcon } from '#modules/style_applier/get_icons'


export function setupSocialLinks() {
    const setSocialLinks = () => {
        $(".social-links").append(/*html*/`
                <button class="btn btn-secondary">${facebookIcon}</button>
                <button class="btn btn-secondary">${twitterIcon}</button>
                <button class="btn btn-secondary">${linkedinIcon}</button>
                <button class="btn btn-secondary">${instagramIcon}</button>
            `
        )
    }
    setSocialLinks();
}