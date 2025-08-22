const titles = [
  {
    id: 1,
    name: "Chăm sóc gia đình",
    image: "https://bizweb.dktcdn.net/thumb/small/100/518/448/themes/953339/assets/coll_1.png?1733201190476",
    type: 'h1'
  },
  {
    id: 2,
    name: "Đồ dùng mẹ & bé",
    image: "https://bizweb.dktcdn.net/thumb/small/100/518/448/themes/953339/assets/coll_2.png?1733201190476",
    type: 'h1'
  },
  {
    id: 3,
    name: "Đồ dùng cho me & bé",
    image: "https://bizweb.dktcdn.net/thumb/small/100/518/448/themes/953339/assets/coll_3.png?1733201190476",   
    type: 'h1'
  }
  ,
  {
    id: 4,
    name: "Đồ dùng cho me & bé",
    image: "https://bizweb.dktcdn.net/thumb/small/100/518/448/themes/953339/assets/coll_4.png?1733201190476",   
    type: 'h1'
  }
  ,
  {
    id: 5,
    name: "Đồ dùng cho me & bé",
    image: "https://bizweb.dktcdn.net/thumb/small/100/518/448/themes/953339/assets/coll_5.png?1733201190476",   
    type: 'h1'
  }
  ,
  {
    id: 6,
    name: "Đồ dùng cho me & bé",
    image: "https://bizweb.dktcdn.net/thumb/small/100/518/448/themes/953339/assets/coll_6.png?1733201190476",   
    type: 'h1'
  }
];



class TitleModel {
  // Lấy tất cả sản phẩm
  static getAllTitles() {
    return titles;
  }

  // Lấy sản phẩm theo ID
  static getTitlesById(id) {
    return titles.find((p) => p.id === parseInt(id));
  }

  // Lấy sản phẩm theo type
  static getTitlesByType(type) {
    return titles.filter((title) => title.type === type);
  }
}

export default TitleModel;