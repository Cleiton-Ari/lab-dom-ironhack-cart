// ITERATION 1

function updateSubtotal(product) {
  
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');

  //... your code goes here
  const quantity = product.querySelector('.quantity input');

  const subtotal = product.querySelector('.subtotal span');
  
  let priceNum = (price.innerHTML); 

  let quantityNum = (quantity.value);
  
  let subtotalNum = priceNum * quantityNum;

  subtotal.innerHTML = subtotalNum;
 
  return subtotalNum;
  console.log(subtotalNum);
  
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  let products = document.getElementsByClassName('product');
  let totalPrice = 0;
  for (let i = 0; i < products.length; i++) {
    totalPrice += updateSubtotal(products[i]);
    const $total = document.querySelector('#total-value span');
    $total.innerHTML = totalPrice;

    
  }
 
  return totalPrice;
  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
