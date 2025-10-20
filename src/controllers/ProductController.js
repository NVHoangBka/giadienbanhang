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

  getProductsByTag(tag) {
    return this.productService.getProductsByTag(tag)
  }

  getProductsByType(type) {
    return this.productService.getProductsByType(type)
    
  }
}

export default new ProductController();