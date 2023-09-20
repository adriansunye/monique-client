import $ from "#modules/jquery_module.js"
import product from '#assets/images/product.png'
import productPurple from '#assets/images/product-lilac.png'


export function setupColorOption(colors) {
    const setColorOption = () => {
        colors.forEach((color, index) => {
            let idRadio = "inlineRadio" + color;
            $("#productColors").append(/*html*/`
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" ${index === 0 ? 'checked' : ''} 
                    name="inlineRadioOptions" id="${idRadio}" value="${color}">
            </div>`
            );

            $(`#${idRadio}`).click(() => 
                $("img.productImage").prop("src", 
                    $(`#${idRadio}`).prop('value') === 'grey' ? 
                    product : 
                    productPurple
                ),
            )
            
        });

    }

    setColorOption();


}