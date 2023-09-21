import $ from "#modules/jquery_module.js"
import check from '#assets/images/check.svg'

export function setupProductInformation(info) {
    const setProductInformation = () => {
        info.forEach((el) => {
            $("#productInformation").append(/*html*/`
                <div class="d-flex flex-row gap-2">
                    <img class="check" src="${check}">
                    <h6 class="pt-1">${el}</h6>
                </div>`
            )
        });
    }
    setProductInformation();
}