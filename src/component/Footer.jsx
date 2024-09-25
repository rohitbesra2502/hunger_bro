const Footer = () => {
    return (
        <div className="p-20 bg-yellow-100">
            <div className="flex min-h-full">
                <div className="flex-1">
                    <div className="uppercase font-bold text-3xl ">
                        <span className="text-amber-400">hunger</span>
                        <span className="text-slate-950">-</span>
                        <span className="text-red-500">bro</span>
                    </div>
                    <div className="w-['449px'] h-['163px'] opacity-[90%] pt-6">
                        <p className="leading-9 font-normal font-['Poppins'] text-lg">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque in possimus totam, ut harum saepe enim officiis fugit, tempora aliquam quis similique, quas eligendi ea eveniet vero ipsam earum quam cumque id!
                        </p>
                    </div>

                    <div className="pt-6">
                        <h2 className="leading-8 font-['Poppins'] font-medium text-2xl">Address</h2>
                    </div>
                    <div className="pt-6">
                        <h5 className="font-['Poppins'] font-normal text-xl leading-8">Office location - near by Overbridge telibandha, Raipur,  Chhattisgarh - 492001</h5>
                    </div>
                </div>
                <div className="flex-1 pl-48 ">
                    <h6 className="font-['Poppins'] font-medium text-xl leading-8">Quick Link</h6>
                    <div className="flex font-['Poppins'] font-normal text-lg leading-8 py-6">
                        <div className="">
                            <ul>
                                <li className="p-1">Home</li>
                                <li className="p-1">About Us</li>
                                <li className="p-1">Explore Food</li>
                                <li className="p-1">Our Specials</li>
                                <li className="p-1">Services</li>
                                <li className="p-1">Contact Us</li>
                            </ul>
                        </div>
                        <div className="pl-24">
                            <ul>
                                <li className="p-2">
                                    <p>Facebook</p>
                                </li>
                                <li className="p-2">Instagram</li>
                                <li className="p-2">abc@gmail.com</li>
                                <li className="p-2">789556423</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex-1 flex">
                    <h5 className="font-['Poppins'] font-medium text-xl leading-8 ">Subscribe to Our Newsletter</h5>
                </div>
            </div>
        </div >
    )
}

export default Footer;