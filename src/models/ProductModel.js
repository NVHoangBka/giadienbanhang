import { products } from '../data/products.js';

export class Product {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.price = data.price;
    this.discountPrice = data.discountPrice || null;
    this.image = data.image;
    this.description = data.description;
    this.types = data.types || [];
    this.tag = data.tag || [];
    this.brands = data.brands || [];
    this.colors = data.colors || [];
    this.titles = data.titles || [];
    this.subTitles = data.subTitles || [];
    this.falseSale = data.falseSale || false;
  }
}

export class ProductModel {
  constructor() {
    this.products = products.map(data => new Product(data)) || [];
  }

  getAllProducts() {
    return [...this.products];
  }

  getProductsByTitle(titlePath) {
    return this.products.filter(product => 
      product.titles.includes(titlePath)
    );
  }

  getProductsBySubTitle(subTitlePath) {
    return this.products.filter(product => 
      product.subTitles.includes(subTitlePath)
    );
  }

  getProductsByTag(tag) {
    return this.products.filter(product => 
      product.tag.includes(tag)
    );
  }

  getProductsByType(type) {
    return this.products.filter(product => 
      product.types.includes(type)
    );
  }
}

export default new ProductModel(); // Xuất instance