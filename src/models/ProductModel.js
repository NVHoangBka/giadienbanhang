const products = [
  {
    id: 1,
    name: "Nước lau sàn Sunlight Tinh dầu thảo mộc Ngăn côn trùng | Chai 900g",
    price: 70000,
    discountPrice: 30000,
    image: "https://bizweb.dktcdn.net/thumb/large/100/518/448/products/image-116.jpg?v=1717487311197",
    description: "Nước lau sàn hiệu quả, ngăn côn trùng, an toàn cho gia đình.",
    types: ['nuoc-giat','hot'],
    titles: ['cham-soc-gia-dinh'],
    falseSale: true
  },
  {
    id: 2,
    name: "Nước Rửa Chén Bát Sunlight 100% Gốc Thực vật Lô Hội | Chai 3.6KG",
    price: 500000,
    discountPrice: 450000,
    image: "https://bizweb.dktcdn.net/thumb/medium/100/518/448/products/image-112.jpg?v=1717486673863",
    description: "Nước rửa chén thân thiện với môi trường, dịu nhẹ cho da tay.",
    types: ['nuoc-giat','hot'],
    titles: ['cham-soc-gia-dinh'],
    falseSale: true
  },
  {
    id: 3,
    name: "Nước xả vải Downy hương hoa Oải Hương nước Pháp",
    price: 800000,
    discountPrice: 120000,
    image: "https://bizweb.dktcdn.net/thumb/large/100/518/448/products/frame-106.jpg?v=1717485532697",
    description: "Nước xả vải Downy hương hoa Oải Hương nước Pháp",
    types: ['nuoc-giat', 'nuoc-lau-nha','hot', 'san-deal'],
    titles: ['cham-soc-gia-dinh'],
    falseSale: true
  },
  {
    id: 4,
    name: "Túi Nước Xả Vải Comfort Thiên Nhiên Thanh Khiết - Túi 1.7L",
    price: 150000,
    discountPrice: 120000,
    image: "https://bizweb.dktcdn.net/thumb/medium/100/518/448/products/frame-101.jpg?v=1717476291620",
    description: "Túi Nước Xả Vải Comfort Thiên Nhiên Thanh Khiết - Túi 1.7L",
    types: ['nuoc-giat', 'nuoc-lau-nha','hot'],
    titles: ['cham-soc-gia-dinh'],
    falseSale: true
  },
  {
    id: 5,
    name: "Nước Giặt Comfort Dưỡng Vải Đa Năng Thiên Nhiên Thanh Khiết 3.0KG",
    price: 180000,
    discountPrice: 140000,
    image: "https://bizweb.dktcdn.net/thumb/medium/100/518/448/products/frame-102-1.jpg?v=1717475952480",
    description: "Nước Giặt Comfort Dưỡng Vải Đa Năng Thiên Nhiên Thanh Khiết 3.0KG",
    types: ['nuoc-giat', 'nuoc-lau-nha','hot','san-deal'],
    titles: ['cham-soc-gia-dinh'],
    falseSale: true
  },
  {
    id: 6,
    name: "Tẩy cặn canxi, tẩy kính, vòi sen, bồn sứ, chậu tắm, gạch men, gương soi Hikit 500 ml",
    price: 10000,
    image: "https://bizweb.dktcdn.net/thumb/grande/100/518/448/products/frame-110.jpg?v=1717486138593",
    description: "Tẩy cặn canxi, tẩy kính, vòi sen, bồn sứ, chậu tắm, gạch men, gương soi Hikit 500 ml",
    types: ['nuoc-giat', 'nuoc-lau-nha','san-deal'],
    titles: ['cham-soc-gia-dinh'],
    falseSale: false
  },
  {
    id: 7,
    name: "Khăn giấy ướt Sunlight | Gói 50 miếng",
    price: 9000,
    image: "https://bizweb.dktcdn.net/thumb/medium/100/518/448/products/frame-102-1.jpg?v=1717475952480",
    description: "Khăn giấy ướt tiện lợi, giá siêu tiết kiệm.",
    types: ['nuoc-lau-nha', 'sap-thom','san-deal'],
    titles: ['cham-soc-gia-dinh'],
    falseSale: false
  },
  {
    id: 8,
    name: "Sáp thơm phòng khử mùi Mr.Fresh Pure Aroma 230g cao cấp",
    price: 35000,
    discountPrice: 20000,
    image: "https://bizweb.dktcdn.net/thumb/large/100/518/448/products/image-119.jpg?v=1717487812197",
    description: "Nước rửa chén giá sốc, sạch bóng chén đĩa.",
    types: [ 'nuoc-lau-nha','xit-phong','san-deal'],
    titles: ['cham-soc-gia-dinh'],
    falseSale: false
  },
  {
    id: 9,
    name: "Rau muống hữu cơ 300g",
    price: 35000,
    discountPrice: 20000,
    image: "https://bizweb.dktcdn.net/thumb/grande/100/518/448/products/upload-e9fa2f43255248b6a348296051b1f4d3.jpg?v=1717407836197",
    description: "Nước rửa chén giá sốc, sạch bóng chén đĩa.",
    types: [ 'rau-cu'],
    titles: ['thuc-pham-tuoi-song'],
    falseSale: false
  },
  {
    id: 10,
    name: "VINAMIT-RAU LANG HỮU CƠ 300g",
    price: 35000,
    discountPrice: 20000,
    image: "https://bizweb.dktcdn.net/thumb/large/100/518/448/products/upload-ac8b79ef7a3c4a08aa419a4bf072daa1.jpg?v=1717407834123",
    description: "Nước rửa chén giá sốc, sạch bóng chén đĩa.",
    types: [ 'rau-cu'],
    titles: ['thuc-pham-tuoi-song'],
    falseSale: false
  },
  {
    id: 11,
    name: "VINAMIT-RAU DỀN HỮU CƠ 300G",
    price: 35000,
    discountPrice: 20000,
    image: "https://bizweb.dktcdn.net/thumb/large/100/518/448/products/upload-46c2e35320494016b667d5d67c80f7fd.jpg?v=1717407832690",
    description: "VINAMIT-RAU DỀN HỮU CƠ 300G",
    types: [ 'rau-cu'],
    titles: ['thuc-pham-tuoi-song'],
    falseSale: false
  },
  {
    id: 12,
    name: "VINAMIT-CẢI BẸ XANH HỮU CƠ 300g",
    price: 35000,
    discountPrice: 20000,
    image: "https://bizweb.dktcdn.net/thumb/grande/100/518/448/products/upload-30312511bb204a3d9aa344e21a70a52b.jpg?v=1717407831063",
    description: "Nước rửa chén giá sốc, sạch bóng chén đĩa.",
    types: [ 'rau-cu'],
    titles: ['thuc-pham-tuoi-song'],
    falseSale: false
  },
  {
    id: 13,
    name: "Tôm lột 200G",
    price: 35000,
    discountPrice: 20000,
    image: "https://bizweb.dktcdn.net/thumb/grande/100/518/448/products/upload-8922cfd99be640d89ba6ceaf0006180c.jpg?v=1717407827807",
    description: "Nước rửa chén giá sốc, sạch bóng chén đĩa.",
    types: [ 'rau-cu'],
    titles: ['thuc-pham-tuoi-song'],
    falseSale: false
  },
  {
    id: 14,
    name: "TH - XƯƠNG BÒ TƠ",
    price: 35000,
    discountPrice: 20000,
    image: "https://bizweb.dktcdn.net/thumb/grande/100/518/448/products/upload-92ddc58356804b73b775fa81fee2fe40.jpg?v=1717407825213",
    description: "Nước rửa chén giá sốc, sạch bóng chén đĩa.",
    types: [ 'rau-cu'],
    titles: ['thuc-pham-tuoi-song'],
    falseSale: false
  },
  {
    id: 15,
    name: "Sổ Planner Lên Kế Hoạch Hằng Ngày",
    price: 35000, 
    discountPrice: 20000,
    image: "https://bizweb.dktcdn.net/thumb/large/100/518/448/products/frame-92.jpg?v=1717474945973",
    description: "Nước rửa chén giá sốc, sạch bóng chén đĩa.",
    types: [ 'but-viet'],
    titles: ['van-phong-pham'],
    falseSale: false
  },
  {
    id: 16,
    name: "Giấy ghi chú màu trong suốt dùng đánh dấu trang sách tiện lợi",
    price: 35000,
    discountPrice: 20000,
    image: "https://bizweb.dktcdn.net/thumb/large/100/518/448/products/frame-88.jpg?v=1717474686750",
    description: "Nước rửa chén giá sốc, sạch bóng chén đĩa.",
    types: [ 'but-viet'],
    titles: ['van-phong-pham'],
    falseSale: false
  },
  {
    id: 17,
    name: "Túi đựng bút chất liệu trong suốt phong cách cá tính",
    price: 35000,
    discountPrice: 20000,
    image: "https://bizweb.dktcdn.net/thumb/large/100/518/448/products/frame-84.jpg?v=1717474250750",
    description: "VINAMIT-RAU DỀN HỮU CƠ 300G",
    types: [ 'but-viet'],
    titles: ['van-phong-pham'],
    falseSale: false
  },
  {
    id: 18,
    name: "Hộp bút đánh dấu highlight dạ quang 18 màu lựa chọn",
    price: 35000,
    discountPrice: 20000,
    image: "https://bizweb.dktcdn.net/thumb/grande/100/518/448/products/frame-79.jpg?v=1717473953247",
    description: "Nước rửa chén giá sốc, sạch bóng chén đĩa.",
    types: [ 'but-viet'],
    titles: ['van-phong-pham'],
    falseSale: false
  },
  {
    id: 19,
    name: "Bút Bi Gel Ngòi 0,5mm Viết Trơn - Mực Đều",
    price: 35000,
    discountPrice: 20000,
    image: "https://bizweb.dktcdn.net/thumb/large/100/518/448/products/frame-76.jpg?v=1717473523093",
    description: "Nước rửa chén giá sốc, sạch bóng chén đĩa.",
    types: ['but-viet'],
    titles: ['van-phong-pham'],
    falseSale: false
  },
  {
    id: 20,
    name: "Cuộn Băng Keo Hai Mặt Dài 6m Tiện Dụng Cho Học Sinh / Văn Phòng",
    price: 35000,
    discountPrice: 20000,
    image: "https://bizweb.dktcdn.net/thumb/grande/100/518/448/products/image-70.jpg?v=1717473122453",
    description: "Nước rửa chén giá sốc, sạch bóng chén đĩa.",
    types: ['but-viet'],
    titles: ['van-phong-pham'],
    falseSale: false
  }

];

class ProductModel {
  // Lấy tất cả sản phẩm
  static getAllProducts() {
    return products;
  }

  // Lấy sản phẩm theo ID
  static getProductById(id) {
    return products.find((p) => p.id === parseInt(id));
  }

  // Lấy sản phẩm theo type
  static getProductsByType(type) {
    return products.filter((product) => product.types.includes(type));
  }

  // Lấy sản phẩm theo flashSale
  static getProductsByFlashSale(type) {
    if (type === 'flashsale') {
      return products.filter((product) => product.falseSale);
    }
    
  }

  // Lấy sản phẩm theo title
  static getProductsByTitle(title) {
    return products.filter((product) => product.titles.includes(title));
  }

  // Tính tổng giá giỏ hàng
  static calculateTotalPrice(cartItems) {
    return cartItems.reduce((sum, item) => sum + (item.discountPrice || item.price), 0);
  }
}

export default ProductModel;