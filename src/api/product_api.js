export async function getProductInfo(element) {
    const response = await fetch("https://mocki.io/v1/e688e8d9-7092-4887-afe6-6cd05ee92ec0");
    const product = await response.json();

    const setProduct = () => {
        console.log(element.children('#productName'))
        element.children('#productName').html(/*html*/ `
        ${product.productName}
        `
    )
    }
    setProduct()
}