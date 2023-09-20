import { setupProductData } from "../modules/product_section/product_data";

const PRODUCT_API = "https://mocki.io/v1/1944c798-fa4a-4f0c-a2f4-d25952d454e6"

export async function getProductInfo(element) {
    const response = await fetch(PRODUCT_API);
    const product = await response.json();

    setupProductData(product)
}