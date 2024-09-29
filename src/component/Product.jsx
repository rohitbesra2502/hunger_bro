import Product1 from '../assets/product1.webp';
import Product2 from '../assets/product5.jpeg';
import Product3 from '../assets/product3.webp';
import Product4 from '../assets/product4.png';
import Button from './Button'

const Products = [
    { id: 1, name: 'Tomato Garlic Pizza ', price: 159, rating: 4.5, img: Product1 },
    { id: 2, name: 'Overloaded Chow Mein', price: 255, rating: 4.5, img: Product2 },
    { id: 3, name: 'Burger With French Fries', price: 154, rating: 4.5, img: Product3 },
    { id: 4, name: 'Burger2', price: 200, rating: 4.8, img: Product4 }
];

const Product = () => {
    return (
        <>
            <section className="container mx-auto py-5">
                <div className="flex items-center justify-center flex-col">
                    <h5 className="uppercase text-red-500 font-semibold text-lg tracking-wider mb-6">Customer favorites</h5>
                    <h2 className="uppercase text-amber-500 text-5xl tracking-wider font mb-6">Popular products</h2>
                    <p className="text-md text-slate-500 w-8/12 text-center mb-12">Lorem ipsum dolor sit amet consectetur. Pellentesque dictumst erat cursus suspendisse eu tempus  dolor sit amet consectetur. Pellentesque dictumst  erat gravid phasellus.</p>
                </div>

                <div className="">
                    <ul className="grid grid-cols-4 gap-4">
                        {Products.map((Productss) => (
                            <li className="" key={Productss.id}>
                                <div className="relative">
                                    {Productss.img ? <img src={Productss.img} alt={Productss.name} className="product_images object-cover w-full" /> : <span>no image</span>}
                                    <h3 className='text-xl font-semibold'>{Productss.name}</h3>
                                    <label htmlFor="rating">{Productss.rating}</label>
                                    <div className="flex justify-between items-center">
                                        <label className="text-md text-slate-500">Rs.{Productss.price}</label>
                                        <Button title="Order" />
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

            </section>
        </>
    )
}
export default Product;