export async function cartDetails() {
    const cartResponse = await fetch(`https://fakestoreapi.com/carts/user/1`)

    const data = await cartResponse.json();
    // console.log(data);
    const allProducts = data.flatMap(order => order.products);
    console.log(allProducts);
    const uniqueProductIds = [...new Set(allProducts.map(product => product.productId))];
    console.log(uniqueProductIds)

    async function fetchProductDetail(productId) {
        const url = `https://fakestoreapi.com/products/${productId}`;
        const response = await fetch(url);
        const productData = await response.json();
        return productData;
    }

    // Step 5: Fetch data for each product ID
    const productDetailsPromises = uniqueProductIds.map(id => fetchProductDetail(id));

    // Step 6: Wait for all fetch requests to complete
    const productDetails = await Promise.all(productDetailsPromises);

    // Step 7: Process the fetched data (e.g., log it or return it)
    console.log(productDetails);
    console.log(uniqueProductIds);
    //return productDetails;
}