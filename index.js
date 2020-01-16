var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var itemObj = {itemName:`${item}`, itemPrice: Math.floor(Math.random()*100)};
 getCart().push(itemObj);
 return itemObj.itemName + " has been added to your cart."
}

function viewCart() {
  // write your code here
  if (cart.length === 0){
    return "Your shopping cart is empty."
  } else if (cart.length === 1){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  } else if (cart.length === 2){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
  } else {
    var butt = "In your cart, you have "
    for(var i = 0; i < cart.length - 1; i++) {
      butt = butt + `${cart[i].itemName} at $${cart[i].itemPrice}, `
    }
    return butt + `and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`
  }
}

function total() {
  var total = 0;
  for(var i = 0; i < cart.length; i++) {
    total = cart[i].itemPrice + total;
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
  for (var i = 0; i < cart.length; i++) {
    if (item === cart[i].itemName) {
      cart.splice(i, 1)
      return cart
    }
  }
  if (item != cart[item]){
    return "That item is not in your cart."
  }
}

function placeOrder(cardNumber) {
  // write your code here
}
