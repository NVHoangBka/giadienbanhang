import React from 'react';
import { useParams, Link } from 'react-router-dom';

const Product = ({ path }) => {
  return (
    <div className="container">
        <div className='breadcrumbs'>
            <ul className="breadcrumb py-3 flex flex-wrap items-center text-xs md:text-sm">
                <li class="home">
                    <a className="link hover" href="/" title="Trang chủ" style={{textDecoration: 'none', color: 'black'}}><span>Trang chủ</span></a>
                    <span class="mx-1 md:mx-2 inline-block">&nbsp;/&nbsp;</span>
                </li>
                <li>
                    <span style={{ color: '#BFBFBF' }}>Tất cả sản phẩm</span>
                </li>          
            </ul>
        </div>
        <section className="section section-collection-banner">
             <div class="collection_banner mb-4 md:mb-6  container text-center">
                <a class="banner" href="/collections/all" title="Tất cả sản phẩm">
                    <picture>
                        <source media="(max-width: 767px)" srcset="//bizweb.dktcdn.net/thumb/large/100/518/448/themes/953339/assets/collection_main_banner.jpg?1758526220617"/>
                        <img class="object-contain mx-auto" src="https://bizweb.dktcdn.net/100/518/448/themes/953339/assets/collection_main_banner.jpg?1758526220617" width="1432" height="120" alt="Tất cả sản phẩm" style={{height: 'auto'}}/>
                    </picture>
                </a>
            </div>
        </section>
        <section className='section grid w-100' id="product-list-0" style={{height: '30px'}}>
            <div className='row'>
                <div className='col-9 content-product-left'>
                    <h2>Tất cả sản phẩm</h2>
                </div>
                <div className='col-3 content-product-right'>
                    <facet-drawer data-collection="0">
                        <div class="collection-filter h-full hidden xl:block ">
                            <div class="facet-overlay absolute z-0 w-full h-full inset-x-0 xl:hidden bg-[rgba(0,0,0,0.5)]" data-toggle-facet="">	
                            </div>
                            <div class="facet-inner overflow-auto bg-background  h-full  xl:h-auto px-5 md:rounded-sm max-w-[32rem] z-10 relative ml-auto">
                                <form class="facet-form">
                                
                                <div class="filter-container flex flex-col rounded-sm bg-neutral-50 ">
                                    <div class="facet-header xl:hidden flex justify-center items-center md:py-5 py-4 bg-background relative">
                                        <button type="button" data-toggle-facet="" class="absolute left-0 btn border border-neutral-50 rounded-full p-1 inline-flex items-center justify-center w-[3.6rem] h-[3.6rem]">
                                            <i class="icon icon-arrow-left"></i>
                                        </button>
                                        <div>
                                                Lọc
                                                <span class="filter-count w-5 h-5 md:w-6 md:h-6 inline-flex items-center justify-center bg-[#EE1926] text-white rounded-full  ml-1">0</span>
                                            </div>
                                    </div>              
                            <aside class="aside-item filter-price md:py-5 py-4" style="order: 4">
                                <div class="aside-title">
                                <h2 class="title-head margin-top-0 text-base font-semibold mb-3">
                                    Giá
                                </h2>
                                </div>
                                <div class="aside-content filter-group">
                                    <ul class="space-y-3">
                                        <li class="filter-item filter-item--check-box link">
                                            <label class="custom-radio cursor-pointer flex gap-2 items-center" for="filter-lower-1000000">
                                            <input class="form-radio" name="price_min" type="radio" id="filter-lower-1000000" data-group="price" data-field="price_min" data-value="Giá dưới 1.000.000₫" value="0:1000000" data-operator="OR"/>
                                            Giá dưới 1.000.000₫
                                            </label>
                                        </li>                   
                                        <li class="filter-item filter-item--check-box link">
                                            <label class="custom-radio cursor-pointer flex gap-2 items-center" for="filter-1000000-2000000">
                                            <input class="form-radio" name="price_min" type="radio" id="filter-1000000-2000000" data-group="price" data-field="price_min" data-value="1.000.000₫ - 2.000.000₫" value="1000000:2000000" data-operator="OR"/>
                                            1.000.000₫ - 2.000.000₫
                                            </label>
                                        </li>               
                                        <li class="filter-item filter-item--check-box link">
                                            <label class="custom-radio cursor-pointer flex gap-2 items-center" for="filter-2000000-3000000">
                                            <input class="form-radio" name="price_min" type="radio" id="filter-2000000-3000000" data-group="price" data-field="price_min" data-value="2.000.000₫ - 3.000.000₫" value="2000000:3000000" data-operator="OR"/>
                                            2.000.000₫ - 3.000.000₫
                                            </label>
                                        </li>                
                                        <li class="filter-item filter-item--check-box link">
                                            <label class="custom-radio cursor-pointer flex gap-2 items-center" for="filter-3000000-5000000">
                                            <input class="form-radio" name="price_min" type="radio" id="filter-3000000-5000000" data-group="price" data-field="price_min" data-value="3.000.000₫ - 5.000.000₫" value="3000000:5000000" data-operator="OR"/>
                                            3.000.000₫ - 5.000.000₫
                                            </label>
                                        </li>                  
                                        <li class="filter-item filter-item--check-box link">
                                            <label class="custom-radio cursor-pointer flex gap-2 items-center" for="filter-5000000-7000000">
                                            <input class="form-radio" name="price_min" type="radio" id="filter-5000000-7000000" data-group="price" data-field="price_min" data-value="5.000.000₫ - 7.000.000₫" value="5000000:7000000" data-operator="OR"/>
                                            5.000.000₫ - 7.000.000₫
                                            </label>
                                        </li>                    
                                        <li class="filter-item filter-item--check-box link">
                                            <label class="custom-radio cursor-pointer flex gap-2 items-center" for="filter-7000000-10000000">
                                            <input class="form-radio" name="price_min" type="radio" id="filter-7000000-10000000" data-group="price" data-field="price_min" data-value="7.000.000₫ - 10.000.000₫" value="7000000:10000000" data-operator="OR"/>
                                            7.000.000₫ - 10.000.000₫
                                            </label>
                                        </li>
                                        <li class="filter-item filter-item--check-box link">
                                            <label class="custom-radio cursor-pointer flex gap-2 items-center" for="filter-upper-10000000">
                                            <input class="form-radio" name="price_min" type="radio" id="filter-upper-10000000" data-group="price" data-field="price_min" data-value="Giá trên 10.000.000₫" value="10000000:max" data-operator="OR"/>
                                            Giá trên 10.000.000₫
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            </aside>
                            <aside class="aside-item filter-vendor md:py-5 py-4" style="order: 1">
                                <div class="aside-title">
                                <h2 class="title-head margin-top-0 text-base font-semibold mb-3">
                                    Hãng sản xuất
                                </h2>
                                </div>
                                <div class="aside-content filter-group">
                                    <ul class="space-y-3">
                                        <li class="filter-item  link filter-item--check-box ">
                                        <label class="custom-checkbox cursor-pointer flex gap-2 items-center" for="filter-vendor-minimart">
                                            <input type="checkbox" class="form-checkbox" id="filter-vendor-minimart" data-group="PRODUCT_VENDOR" data-field="vendor.filter_key" data-value="Minimart" value="Minimart" data-operator="OR" name="vendor"/>
                                            Minimart
                                        </label>
                                        </li>
                                        <li class="filter-item  link filter-item--check-box ">
                                        <label class="custom-checkbox cursor-pointer flex gap-2 items-center" for="filter-vendor-ega">
                                            <input type="checkbox" class="form-checkbox" id="filter-vendor-ega" data-group="PRODUCT_VENDOR" data-field="vendor.filter_key" data-value="EGA" value="EGA" data-operator="OR" name="vendor"/>
                                            EGA
                                        </label>
                                        </li>
                                        <li class="filter-item  link filter-item--check-box ">
                                        <label class="custom-checkbox cursor-pointer flex gap-2 items-center" for="filter-vendor-ega-green">
                                            <input type="checkbox" class="form-checkbox" id="filter-vendor-ega-green" data-group="PRODUCT_VENDOR" data-field="vendor.filter_key" data-value="EGA GREEN" value="EGA GREEN" data-operator="OR" name="vendor"/>
                                            EGA GREEN
                                        </label>
                                        </li>
                                        <li class="filter-item  link filter-item--check-box ">
                                        <label class="custom-checkbox cursor-pointer flex gap-2 items-center" for="filter-vendor-khac">
                                            <input type="checkbox" class="form-checkbox" id="filter-vendor-khac" data-group="PRODUCT_VENDOR" data-field="vendor.filter_key" data-value="Khác" value="Khác" data-operator="OR" name="vendor"/>
                                            Khác
                                        </label>
                                        </li>
                                    </ul>
                                </div>
                            </aside>            
                            <aside class="aside-item filter-type md:py-5 py-4 " style="order: 2">
                                <div class="aside-title">
                                <h2 class="title-head margin-top-0 text-base font-semibold mb-3">
                                    Loại sản phẩm
                                </h2>
                                </div>
                                <div class="aside-content filter-group">
                                    <ul class="space-y-3">
                                        <li class="filter-item link filter-item--check-box ">
                                        <label class="custom-checkbox cursor-pointer flex gap-2 items-center" for="filter-type-lam-thom">
                                            <input type="checkbox" class="form-checkbox" id="filter-type-lam-thom" data-group="PRODUCT_TYPE" data-field="type.filter_key" data-value="Làm thơm" value="Làm thơm" data-operator="OR" name="type"/>
                                            Làm thơm
                                        </label>
                                        </li>
                                        <li class="filter-item link filter-item--check-box ">
                                        <label class="custom-checkbox cursor-pointer flex gap-2 items-center" for="filter-type-chat-tay-rua">
                                            <input type="checkbox" class="form-checkbox" id="filter-type-chat-tay-rua" data-group="PRODUCT_TYPE" data-field="type.filter_key" data-value="Chất tẩy rửa" value="Chất tẩy rửa" data-operator="OR" name="type"/>
                                            Chất tẩy rửa
                                        </label>
                                        </li>
                                        <li class="filter-item link filter-item--check-box ">
                                        <label class="custom-checkbox cursor-pointer flex gap-2 items-center" for="filter-type-do-dung-hoc-tap">
                                            <input type="checkbox" class="form-checkbox" id="filter-type-do-dung-hoc-tap" data-group="PRODUCT_TYPE" data-field="type.filter_key" data-value="Đồ dùng học tập" value="Đồ dùng học tập" data-operator="OR" name="type"/>
                                            Đồ dùng học tập
                                        </label>
                                        </li>
                                        <li class="filter-item link filter-item--check-box ">
                                        <label class="custom-checkbox cursor-pointer flex gap-2 items-center" for="filter-type-van-phong">
                                            <input type="checkbox" class="form-checkbox" id="filter-type-van-phong" data-group="PRODUCT_TYPE" data-field="type.filter_key" data-value="Văn phòng" value="Văn phòng" data-operator="OR" name="type"/>
                                            Văn phòng
                                        </label>
                                        </li>
                                        <li class="filter-item link filter-item--check-box ">
                                        <label class="custom-checkbox cursor-pointer flex gap-2 items-center" for="filter-type-nhap-khau">
                                            <input type="checkbox" class="form-checkbox" id="filter-type-nhap-khau" data-group="PRODUCT_TYPE" data-field="type.filter_key" data-value="Nhập khẩu" value="Nhập khẩu" data-operator="OR" name="type"/>
                                            Nhập khẩu
                                        </label>
                                        </li>
                                        <li class="filter-item link filter-item--check-box  overflow-item ">
                                        <label class="custom-checkbox cursor-pointer flex gap-2 items-center" for="filter-type-nong-san-viet">
                                            <input type="checkbox" class="form-checkbox" id="filter-type-nong-san-viet" data-group="PRODUCT_TYPE" data-field="type.filter_key" data-value="Nông sản Việt" value="Nông sản Việt" data-operator="OR" name="type"/>
                                            Nông sản Việt
                                        </label>
                                        </li>
                                        <li class="filter-item link filter-item--check-box  overflow-item ">
                                        <label class="custom-checkbox cursor-pointer flex gap-2 items-center" for="filter-type-nhiet-doi">
                                            <input type="checkbox" class="form-checkbox" id="filter-type-nhiet-doi" data-group="PRODUCT_TYPE" data-field="type.filter_key" data-value="Nhiệt đới" value="Nhiệt đới" data-operator="OR" name="type"/>
                                            Nhiệt đới
                                        </label>
                                        </li>
                                        <li class="filter-item link filter-item--check-box  overflow-item ">
                                        <label class="custom-checkbox cursor-pointer flex gap-2 items-center" for="filter-type-thuc-pham-tuoi-song">
                                            <input type="checkbox" class="form-checkbox" id="filter-type-thuc-pham-tuoi-song" data-group="PRODUCT_TYPE" data-field="type.filter_key" data-value="Thực phẩm tươi sống" value="Thực phẩm tươi sống" data-operator="OR" name="type"/>
                                            Thực phẩm tươi sống
                                        </label>
                                        </li>
                                        <li class="filter-item link filter-item--check-box  overflow-item ">
                                        <label class="custom-checkbox cursor-pointer flex gap-2 items-center" for="filter-type-thuc-pham">
                                            <input type="checkbox" class="form-checkbox" id="filter-type-thuc-pham" data-group="PRODUCT_TYPE" data-field="type.filter_key" data-value="Thực phẩm" value="Thực phẩm" data-operator="OR" name="type"/>
                                            Thực phẩm
                                        </label>
                                        </li>
                                        <li class="filter-item link filter-item--check-box  overflow-item ">
                                        <label class="custom-checkbox cursor-pointer flex gap-2 items-center" for="filter-type-khac">
                                            <input type="checkbox" class="form-checkbox" id="filter-type-khac" data-group="PRODUCT_TYPE" data-field="type.filter_key" data-value="Khác" value="Khác" data-operator="OR" name="type"/>
                                            Khác
                                        </label>
                                        </li>  
                                        <li class="filter-item-toggle link text-secondary font-semibold cursor-pointer  flex items-center pl-[var(--spacing-6-5)] gap-2   ">
                                        Xem thêm <i class="icon icon-carret-down"></i>
                                        </li>
                                                
                                    </ul>
                                </div>
                            </aside>
                            <aside class="aside-item filter-tag1 md:py-5 py-4 " style="order: 0">
                                <div class="aside-title">
                                <h2 class="title-head margin-top-0 text-base font-semibold mb-3">
                                    Màu sắc
                                </h2>
                                </div>
                                <div class="aside-content filter-group">
                                <ul class="space-y-3">
                                        <li class="filter-item link filter-item--check-box ">
                                            <label class="custom-checkbox cursor-pointer flex gap-2 items-center" for="filter-tag1-trang">
                                                <input type="checkbox" class="form-checkbox" id="filter-tag1-trang" data-group="PRODUCT_TAG" data-field="tag.key" data-value="Trắng" value="Trắng" data-operator="OR" name="tag"/>
                                                Trắng
                                            </label>
                                        </li>
                                        <li class="filter-item link filter-item--check-box ">
                                            <label class="custom-checkbox cursor-pointer flex gap-2 items-center" for="filter-tag1-den">
                                                <input type="checkbox" class="form-checkbox" id="filter-tag1-den" data-group="PRODUCT_TAG" data-field="tag.key" data-value="Đen" value="Đen" data-operator="OR" name="tag"/>
                                                Đen
                                            </label>
                                        </li>       
                                        <li class="filter-item link filter-item--check-box ">
                                            <label class="custom-checkbox cursor-pointer flex gap-2 items-center" for="filter-tag1-xam">
                                                <input type="checkbox" class="form-checkbox" id="filter-tag1-xam" data-group="PRODUCT_TAG" data-field="tag.key" data-value="Xám" value="Xám" data-operator="OR" name="tag"/>
                                                Xám
                                            </label>
                                        </li>      
                                        <li class="filter-item link filter-item--check-box ">
                                        <label class="custom-checkbox cursor-pointer flex gap-2 items-center" for="filter-tag1-xanh-duong">
                                            <input type="checkbox" class="form-checkbox" id="filter-tag1-xanh-duong" data-group="PRODUCT_TAG" data-field="tag.key" data-value="Xanh dương" value="Xanh dương" data-operator="OR" name="tag"/>
                                            Xanh dương
                                        </label>
                                        </li>
                                        <li class="filter-item link filter-item--check-box ">
                                            <label class="custom-checkbox cursor-pointer flex gap-2 items-center" for="filter-tag1-do">
                                                <input type="checkbox" class="form-checkbox" id="filter-tag1-do" data-group="PRODUCT_TAG" data-field="tag.key" data-value="Đỏ" value="Đỏ" data-operator="OR" name="tag"/>
                                                Đỏ
                                            </label>
                                        </li>      
                                        <li class="filter-item link filter-item--check-box  overflow-item ">
                                        <label class="custom-checkbox cursor-pointer flex gap-2 items-center" for="filter-tag1-hong">
                                            <input type="checkbox" class="form-checkbox" id="filter-tag1-hong" data-group="PRODUCT_TAG" data-field="tag.key" data-value="Hồng" value="Hồng" data-operator="OR" name="tag"/>
                                            Hồng
                                        </label>
                                        </li>       
                                        <li class="filter-item link filter-item--check-box  overflow-item ">
                                        <label class="custom-checkbox cursor-pointer flex gap-2 items-center" for="filter-tag1-tim">
                                            <input type="checkbox" class="form-checkbox" id="filter-tag1-tim" data-group="PRODUCT_TAG" data-field="tag.key" data-value="Tím" value="Tím" data-operator="OR" name="tag"/>
                                            Tím
                                        </label>
                                        </li>
                                        <li class="filter-item link filter-item--check-box  overflow-item ">
                                        <label class="custom-checkbox cursor-pointer flex gap-2 items-center" for="filter-tag1-xanh-reu">
                                            <input type="checkbox" class="form-checkbox" id="filter-tag1-xanh-reu" data-group="PRODUCT_TAG" data-field="tag.key" data-value="Xanh rêu" value="Xanh rêu" data-operator="OR" name="tag"/>
                                            Xanh rêu
                                        </label>
                                        </li>    
                                        <li class="filter-item link filter-item--check-box  overflow-item ">
                                        <label class="custom-checkbox cursor-pointer flex gap-2 items-center" for="filter-tag1-kem">
                                            <input type="checkbox" class="form-checkbox" id="filter-tag1-kem" data-group="PRODUCT_TAG" data-field="tag.key" data-value="Kem" value="Kem" data-operator="OR" name="tag"/>
                                            Kem
                                        </label>
                                        </li>
                                    
                                            
                                                
                                        <li class="filter-item link filter-item--check-box  overflow-item ">
                                        <label class="custom-checkbox cursor-pointer flex gap-2 items-center" for="filter-tag1-bac">
                                            <input type="checkbox" class="form-checkbox" id="filter-tag1-bac" data-group="PRODUCT_TAG" data-field="tag.key" data-value="Bạc" value="Bạc" data-operator="OR" name="tag">
                                            Bạc
                                        </label>
                                        </li>
                                    
                                                <li class="filter-item-toggle link text-secondary font-semibold cursor-pointer  flex items-center pl-[var(--spacing-6-5)] gap-2   ">
                                        Xem thêm <i class="icon icon-carret-down"></i>
                                        </li>
                                            
                                </ul>
                                </div>
                            </aside>

                                                
                                        
                                    
                                        
                                            
                                            
                                            
                                                


                            <aside class="aside-item filter-tag1 md:py-5 py-4" style="order: 0">
                                <div class="aside-title">
                                <h2 class="title-head margin-top-0 text-base font-semibold mb-3">
                                    Tags
                                </h2>
                                </div>
                                <div class="aside-content filter-group">
                                <ul class="space-y-3">
                                    
                                    
                                                
                                        <li class="filter-item link filter-item--check-box ">
                                        <label class="custom-checkbox cursor-pointer flex gap-2 items-center" for="filter-tag1-flash-sale">
                                            <input type="checkbox" class="form-checkbox" id="filter-tag1-flash-sale" data-group="PRODUCT_TAG" data-field="tag.key" data-value="Flash Sale" value="Flash Sale" data-operator="OR" name="tag">
                                            Flash Sale
                                        </label>
                                        </li>
                                    
                                            
                                                
                                        <li class="filter-item link filter-item--check-box ">
                                        <label class="custom-checkbox cursor-pointer flex gap-2 items-center" for="filter-tag1-giao-nhanh-24h">
                                            <input type="checkbox" class="form-checkbox" id="filter-tag1-giao-nhanh-24h" data-group="PRODUCT_TAG" data-field="tag.key" data-value="Giao Nhanh 24h" value="Giao Nhanh 24h" data-operator="OR" name="tag">
                                            Giao Nhanh 24h
                                        </label>
                                        </li>
                                    
                                            
                                                
                                        <li class="filter-item link filter-item--check-box ">
                                        <label class="custom-checkbox cursor-pointer flex gap-2 items-center" for="filter-tag1-rau-tuoi">
                                            <input type="checkbox" class="form-checkbox" id="filter-tag1-rau-tuoi" data-group="PRODUCT_TAG" data-field="tag.key" data-value="Rau Tươi" value="Rau Tươi" data-operator="OR" name="tag">
                                            Rau Tươi
                                        </label>
                                        </li>
                                    
                                            
                                </ul>
                                </div>
                            </aside>

                                            
                                        
                                    
                                    
                                    </div>
                                </form>
                            </div>
                                
                        </div>
                    </facet-drawer>
                </div>
            </div>
        </section>
    </div>
  );
};

export default Product;