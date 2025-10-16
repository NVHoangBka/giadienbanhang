import React from 'react';
import ProductModel from '../models/ProductModel';
import Slider from './components/Slider';
import ProductItem from './ProductItem';
import ProductTabSection from './ProductTabSection';
import BannerModel from '../models/BannerModel';
import TitleModel from '../models/TitleModel';
import { Link } from 'react-router-dom';

const Home = ({ addToCart }) => {
  const flashSaleProducts = ProductModel.getProductsByFlashSale('flashsale');
  const bannerHome = BannerModel.getAllBanners();
  const TitlesHome = TitleModel.getTitlesByType('h1')

  return (
    <>
      <Slider />
      <div className="home bg-success-subtle py-4">
        <div className="container">
          <div className="section-banner-group row">
            {bannerHome.map((banner, index) => (
              <div key={index} className="banner-item col-4">
                <img
                  src={banner.image}
                  alt="Banner 1"
                  className="w-100 rounded-4"
                />
              </div>
            )) }
          </div>
          <div className="section-flashsale mt-5 bg-danger rounded-4 pb-3">
            <h2 className="text-white ps-3 py-4 m-0">
              Chớp thời cơ. Giá như mơ
            </h2>
            <div className="product-flashsale-list row px-1 m-0 justify-content-center">
              {flashSaleProducts.length > 0 ? (
                flashSaleProducts.map((product) => (
                  <div className='col-2'>
                    <ProductItem key={product.id} product={product} addToCart={addToCart} />
                    </div>
                ))
              ) : (
                <p className="text-center text-white">Không có sản phẩm flash sale.</p>
              )}
            </div>
          </div>
        </div>
        <div className="section-collection mt-5 position-relative">
          <img
            src="https://bizweb.dktcdn.net/100/518/448/themes/953339/assets/coll_bg.jpg?1733201190476"
            alt="Collection Background"
            className="w-100 position-absolute h-100"
          />
          <div className="container">
            <div className="collection-list row py-5 position-relative fs-6">
              {TitlesHome.map((title,index) => (
                <Link
                  key={index}
                  to="#"
                  className="collection-item text-center col text-white text-decoration-none"
                >
                  <img
                    src={title.image}
                    alt={title.name}
                    className="hover mb-1"
                  />
                  <p className="m-0">{title.name}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <ProductTabSection path="cham-soc-gia-dinh" title="Chăm sóc gia đình" addToCart={addToCart} />
        <ProductTabSection path="" title="Sản phẩm được quan tâm" addToCart={addToCart} />
        <ProductTabSection path="thuc-pham-tuoi-song" title="Thực phẩm tươi sống" addToCart={addToCart} />
        <ProductTabSection path="van-phong-pham" title="Văn phòng phẩm" addToCart={addToCart} />
      </div>
    </>
  );
};

export default Home;