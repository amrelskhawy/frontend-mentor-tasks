const productList = document.querySelector('.product-list')


async function loadProductData() {
    const response = await fetch('./data.json');
    const productData = await response.json();
  
    productData.forEach(product => {
      productList.innerHTML += productComponent(product);
    });
  }

function productComponent(product) {
    const { 
        image, name, category, price
    } = product
    return `<div class="product">
          <!-- Product Image -->
          <div class="product-image__container">
            <img class="product__image" src="${image.desktop}" alt="${name}-image">
            <button>
              <span>
                <img src="./assets/images/icon-add-to-cart.svg" alt="">
              </span>
              <span>Add to Cart</span>
            </button>
          </div>
          <div class="product-info__container">
            <span>${category}</span>
            <h4 class="product-info__title">${name}</h4>
            <p class="product-info__price">$${price}</p>
          </div>
        </div>
`
}

loadProductData()