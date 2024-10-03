import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

import Product0 from '../assets/product.png';
import Product1 from '../assets/product1.webp';
import Product2 from '../assets/product5.jpeg';
import Product3 from '../assets/product3.webp';
import Product4 from '../assets/product4.png';
import Button from './Button'

const Products = [
    { id: 1, name: 'Tomato Garlic Pizza ', price: 159, rating: 4.5, img: Product1 },
    { id: 2, name: 'Overloaded Chow Mein', price: 255, rating: 4.5, img: Product2 },
    { id: 3, name: 'Burger With French Fries', price: 154, rating: 4.5, img: Product3 },
    { id: 4, name: 'Burger2', price: 200, rating: 4.8, img: Product4 },
    { id: 5, name: 'Burger2', price: 200, rating: 4.8 },
    { id: 6, name: 'Burger2', price: 200, rating: 4.8, img: Product4 },
    { id: 7, name: 'Burger2', price: 200, rating: 4.8 },
];

const Product = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000, 
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <section className="container mx-auto py-5">
                <div className="flex items-center justify-center flex-col">
                    <h5 className="uppercase text-red-500 font-semibold text-lg tracking-wider mb-6">Customer favorites</h5>
                    <h2 className="uppercase text-amber-500 text-5xl tracking-wider font mb-6">Popular products</h2>
                    <p className="text-md text-slate-500 w-8/12 text-center mb-12">Lorem ipsum dolor sit amet consectetur. Pellentesque dictumst erat cursus suspendisse eu tempus  dolor sit amet consectetur. Pellentesque dictumst  erat gravid phasellus.</p>
                </div>

                <div className="">
                    {/* <ul> */}
                    <Slider {...settings} className="flex gap-2">
                        {Products.map((Productss) => (
                            <li className="border rounded-xl overflow-hidden relative" key={Productss.id}>
                                <div className="relative product_parent">
                                    <div className='absolute right-0 bg-yellow-400 px-3 py-3 roundeded'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#fff" class="bi bi-heart" viewBox="0 0 16 16">
                                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                                        </svg>
                                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#fff" class="bi bi-heart-fill" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                                        </svg> */}
                                    </div>
                                    {Productss.img ? <img src={Productss.img} alt={Productss.name} className="product_images object-cover w-full" /> : <img src={Product0} alt="product" className="product_images object-cover w-full" />}

                                    <div className='p-2 text-center'>
                                        <h4 className='text-base font-semibold'>{Productss.name}</h4>
                                        <label htmlFor="rating">{Productss.rating}</label>
                                        <div className='flex items-center justify-center'>

                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-half" viewBox="0 0 16 16">
                                                <path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
                                            </svg>
                                        </div>
                                        <div className="flex justify-between items-center px-2">
                                            <label className="text-md font-bold text-slate-500 filter drop-shadow"><span className='text-red-500'>Rs.</span>&nbsp;<span className='text-black'>{Productss.price}</span></label>
                                            <Button title="Order" />
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </Slider>
                    {/* </ul> */}
                </div>

            </section>
        </>
    )
}
export default Product;