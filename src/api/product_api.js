import { setupInformationCards } from "#modules/information_section/information_cards";
import { setupProductData } from "#modules/product_section/product_data";

const PRODUCT_API = "https://mocki.io/v1/1944c798-fa4a-4f0c-a2f4-d25952d454e6"
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