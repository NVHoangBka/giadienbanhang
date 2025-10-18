import ProductModel from '../models/ProductModel';

class ProductService {
  constructor() {
    this.productModel = ProductModel; // Sử dụng instance đã xuất
  }

  getAllProducts() {
    return this.productModel.getAllProducts();
  }

  getProductsByTitle(titlePath) {
    return this.productModel.getProductsByTitle(titlePath);
  }

  getProductsBySubTitle(subTitlePath) {
    return this.productModel.getProductsBySubTitle(subTitlePath);
  }

  // Thêm các phương thức khác nếu cần, ví dụ:
  filterProducts(criteria) {
    let products = this.getAllProducts();
    if (criteria.titlePath) {
      products = this.getProductsByTitle(criteria.titlePath);
    }
    if (criteria.subTitlePath) {
      products = this.getProductsBySubTitle(criteria.subTitlePath);
    }
    // Thêm logic lọc theo price, brand, type, color nếu cần
    return products;
  }
}

export default new ProductService(); // Xuất instance (tương tự như ProductModel)