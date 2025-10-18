import ProductService from '../services/ProductService';

class ProductController {
  constructor() {
    this.productService = ProductService; // Sử dụng instance đã xuất
  }

  getAllProducts() {
    return this.productService.getAllProducts();
  }

  getProductsByTitle(titlePath) {
    return this.productService.getProductsByTitle(titlePath);
  }

  getProductsBySubTitle(subTitlePath) {
    return this.productService.getProductsBySubTitle(subTitlePath);
  }
}

export default new ProductController(); // Xuất instance