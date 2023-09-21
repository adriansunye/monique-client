import $ from "#modules/jquery_module.js"
import { setupColorOption } from "#modules/product_section/color_selector";
import { setupProductInformation } from "#/modules/product_section/product_information";

export function setupProductData(product) {
    const setProduct = () => {
        $('#productName').html(/*html*/ `
            ${product.name}
        `),
        $('#productDescription').html(/*html*/ `
            ${product.description}
        `),
        $("#productDescription").html($("#productDescription")
                                .text()
                                .replace("Strength", "<span class='highlight-color'>Strength</span>"));
        $('#productDescriptionDetail').html(/*html*/ `
            ${product.descriptionDetail}
        `),
        $('#productPrice').html(/*html*/ `
            ${product.price}
        `),
        $('#productAgeGroup').html(/*html*/ `
            ${product.ageGroup}
        `),
        $('#productMaxWeigth').html(/*html*/ `
            ${product.maxWeigth}
        `),
        $('.product-slogan').html(/*html*/ `
            ${product.slogan}
        `),
        setupColorOption(product.colors),
        setupProductInformation(product.information)
    }
    setProduct();
}