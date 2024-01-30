const products = document.querySelectorAll('.product');
const cart = document.querySelector('.cart__products');

products.forEach(item => {
    const productValue = item.querySelector('.product__quantity-value')

    item.querySelector('.product__quantity-control_dec').onclick = () => {
        if (productValue.textContent != 1) {
            productValue.textContent = productValue.textContent - 1
        }
    }

    item.querySelector('.product__quantity-control_inc').onclick = () => {
            productValue.textContent = +productValue.textContent + 1
    }

	item.querySelector('.product__add').onclick = () => {
 		productAdd(item);
	    productValue.textContent = 1;
}
})


function productAdd(product) {
    let cartValue = product.querySelector('.product__quantity-value').textContent;
    const productInCart = Array.from(cart.children).find((item) => item.dataset.id == product.dataset.id)

    if (cart.children.length == 0 || !productInCart) {
        const newProduct = document.createElement("div");

        newProduct.classList.add('cart__product')
        newProduct.dataset.id = product.dataset.id

        cart.insertAdjacentElement('beforeend', newProduct)

        const img = product.querySelector('.product__image').src

        newProduct.innerHTML += 
        `
        <img class="cart__product-image" src="${img}">
        <div class="cart__product-count">${cartValue}</div>
        `;

    } else {
		const totalQuantity = productInCart.querySelector('.cart__product-count');
		
		totalQuantity.textContent = +totalQuantity.textContent + +cartValue;
	}

}



