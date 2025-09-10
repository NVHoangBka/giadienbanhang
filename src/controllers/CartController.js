class CartController {
  constructor() {
    this.cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  }

  addToCart(product) {
    const existing = this.cartItems.find(item => item.id === product.id);
    if (existing) {
      existing.quantity = (existing.quantity || 1) + 1;
    } else {
      this.cartItems.push({ ...product, quantity: 1 });
    }
    this.saveCart();
    
    return this.cartItems;
  }

  removeFromCart(productId) {
     this.cartItems = this.cartItems.filter(item => item.id !== productId);
      this.saveCart();
      return this.cartItems;
  }

  updateQuantity(productId, quantity) {
    this.cartItems = this.cartItems.map(item => 
      item.id === productId ? { ...item, quantity } : item
    );
    this.saveCart();
    return this.cartItems;
  } 

  clearCart() {
    this.cartItems = [];
    this.saveCart();
  }

  getCartItems() {
    return this.cartItems;
  }

  saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }

  getTotalQuantity() {
    return this.cartItems.reduce((sum, item) => sum + item.quantity, 0);
  }

  getTotalPrice() {
    return this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

}

export default CartController;