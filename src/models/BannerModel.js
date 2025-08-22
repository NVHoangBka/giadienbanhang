const banners = [
  {
    id: 1,
    name: "Sữa các loại thông dụng",
    image: "https://bizweb.dktcdn.net/100/518/448/themes/953339/assets/banner_group_1.jpg?1733201190476",
    type: 'flashsale'
  },
  {
    id: 2,
    name: "tả bỉm, hóa mỹ phẩm",
    image: "https://bizweb.dktcdn.net/100/518/448/themes/953339/assets/banner_group_2.jpg?1733201190476",
    type: 'flashsale'
  },
  {
    id: 3,
    name: "Đồ dùng cho me & bé",
    image: "https://bizweb.dktcdn.net/100/518/448/themes/953339/assets/banner_group_3.jpg?1733201190476",   
    type: 'flashsale'
  }
];



class BannerModel {
  // Lấy tất cả sản phẩm
  static getAllBanners() {
    return banners;
  }

  // Lấy sản phẩm theo ID
  static getBannersById(id) {
    return banners.find((p) => p.id === parseInt(id));
  }

  // Lấy sản phẩm theo type
  static getBannersByType(type) {
    return banners.filter((banner) => banner.type === type);
  }
}

export default BannerModel;