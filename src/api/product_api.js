import { setupInformationCards } from "#modules/information_section/information_cards";
import { setupProductData } from "#modules/product_section/product_data";

const PRODUCT_API = "https://mocki.io/v1/3b47459f-68a1-42bf-a87e-105a8bf66233"
const INFORMATION_API = "https://www.tridenia.com/maquetacio/list.php"


export async function getProductInfo() {
    const response = await fetch(PRODUCT_API);
    const product = await response.json();

    setupProductData(product)
}

export async function getGlobalInfo() {
    const response = await fetch(INFORMATION_API);
    const information = await response.json();

    setupInformationCards(information)
}