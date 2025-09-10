import React, { useEffect, useState } from 'react';
import ProductModel from '../models/ProductModel';

const Cart = ({isOpen,setIsCartOpen, cartController, onCartChange }) => {

  const [cartItems, setCartItems] = useState(cartController.getCartItems());
  const [total, setTotal] = useState(cartController.getTotalPrice());

  const handleItemClick = () => {
    setIsCartOpen(false);
  };

  useEffect(() => {
    setCartItems(cartController.getCartItems());
    setTotal(cartController.getTotalPrice());
  }, []);
 

  const handleIncrease = (id) => {
     const updatedCart = cartController.updateQuantity(id, cartItems.find(item => item.id === id).quantity + 1);
    setCartItems([...cartController.getCartItems()]);
    setTotal(cartController.getTotalPrice());
    onCartChange(updatedCart);
  };

  const handleDecrease = (id) => {
    const currentQty = cartItems.find(item => item.id === id).quantity;
    const updatedCart =  cartController.updateQuantity(id, currentQty - 1);
    setCartItems([...cartController.getCartItems()]);
    setTotal(cartController.getTotalPrice());
    onCartChange(updatedCart);
  };

  const handleRemove = (id) => {
    const updatedCart = cartController.removeFromCart(id);
    setCartItems([...cartController.getCartItems()]);
    setTotal(cartController.getTotalPrice());
    onCartChange(updatedCart);
  };


  return (
    <div className={`cart ${isOpen ? 'active' : ''}`}>
      <div className="card-body">
        <div className='cart-header d-flex justify-content-between align-items-center border-bottom'>
          <h2 className="card-title text-black pb-3 pt-4 px-4">Giỏ hàng</h2>
          <button className='btn border rounded-circle px-2 py-0' onClick={() => setIsCartOpen(false)}><i className="bi bi-x fs-4"></i></button>
        </div>

        <div className='cart-content px-4 py-3'>
          {cartItems.length === 0 ?  
            ( <div className='cart-empty'>
                <div className='text-black text-center'>
                    <img src='https://bizweb.dktcdn.net/100/518/448/themes/953339/assets/cart_empty_background.png?1733201190476'></img>
                    <h2 class=" font-bold">Giỏ hàng chưa có gì!</h2>
                    <p>Hãy tìm sản phẩm ứng ý và thêm vào giỏ hàng bạn nhé</p>
                    <a class="btn font-bold bg-success text-white rounded-pill" href="/products/all" title="Tiếp tục mua sắm">Tiếp tục mua sắm</a>
                </div>
              </div>
            )
            : (
                cartItems.map(item => (
                  <>
                    <div className='cart-left cart-left p-4 overflow-y-auto flex flex-col'>
                      <div className='cart-table'>
                        <div className='cart-items'>
                          <div className='cart-item'>
                              <div className='cart-product-col d-flex justify-content-between align-items-start'>
                                  <a className='cart-item__image' href='#' title=''>
                                      <img 
                                        // src='https://bizweb.dktcdn.net/thumb/small/100/518/448/products/frame-106.jpg?v=1717485532697' 
                                        src={item.image}
                                        className='me-2 rounded'
                                        style={{ width: "60px", height: "60px", objectFit: "cover" }}>
                                      </img>
                                  </a>
                                  <div>
                                    <p className='cart-item__name mb-0 fw-semibold small'>
                                      <a href="#" title={item.name} class="link text-decoration-none text-dark">{item.name}</a>
                                    </p>
                                    <span class="cart-item__variant text-muted">{item.size}</span>
                                  </div>
                                  <button
                                    className="btn btn-sm px-2 rounded-circle text-muted"
                                    onClick={() => handleRemove(item.id)}
                                  >
                                    <i className="bi bi-x-lg"></i>
                                  </button>
                              </div>
                              
                              <div className="px-3 ms-5 d-flex  justify-content-between cart-quantity-col">
                                  <div className="cart-unit-price-col">
                                    <div className="price text-danger fw-bold"> {((item.discountPrice || item.price) * item.quantity).toLocaleString("vi-VN")}₫</div>
                                  </div>
                                    <div className="input-group custom-number-input cart-item-quantity d-flex border rounded row" style={{'max-width': "100px", height: "28px"}}>
                                        <button 
                                          type="button" 
                                          name="minus" 
                                          className="h-100 col-3 d-flex justify-content-center align-items-center btn-outline-secondary border-0"
                                          onClick={() => handleDecrease(item.id)}>
                                          <i className="bi bi-dash fs-5"></i>
                                        </button>
                                        <input type="number" className="form-quantity col-6 text-center h-100 no-spinner border-0" name="Lines" data-line-index="1" value={item.quantity} min="1"/>
                                        <button 
                                          type="button" 
                                          name="plus" 
                                          className="h-100 col-3 d-flex justify-content-center align-items-center btn-outline-secondary border-0"
                                          onClick={() => handleIncrease(item.id)}>
                                          <i className="bi bi-plus fs-5"></i>
                                        </button>
                                    </div>
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='cart-right'></div>
                  </>
                ))
            ) 
          }
        </div>
      </div>
    </div>
  );
};

export default Cart;