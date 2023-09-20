import $ from "#modules/jquery_module.js"

export function setupColorOption(colors) {
    const setColorOption = () => {
        colors.forEach((color, index) => {
            let idRadio = "inlineRadio" + color;
            $("#productColors").append(/*html*/`
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" ${index === 0 ? 'checked' : ''} 
                    name="inlineRadioOptions" id="${idRadio}" value="${color}">
            </div>`
            )
        });
    }

    setColorOption();

}