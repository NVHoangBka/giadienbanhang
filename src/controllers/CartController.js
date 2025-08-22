class CartController {
  constructor() {
    this.cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  }

  addToCart(product) {
    this.cartItems = [...this.cartItems, product];
    this.saveCart();
    return this.cartItems;
  }

  removeFromCart(index) {
    this.cartItems = this.cartItems.filter((_, i) => i !== index);
    this.saveCart();
    return this.cartItems;
  }

  getCartItems() {
    return this.cartItems;
  }

  saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }
}

export default CartController;