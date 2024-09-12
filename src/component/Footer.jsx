const Footer = () => {
    return (
        <div className="h-96">
            <div className="flex min-h-full p-16 bg-yellow-100">
                <div className="flex-1">
                    <div className="uppercase font-bold text-3xl p-2">
                        <span className="text-amber-400">hunger</span>
                        <span className="text-slate-950">-</span>
                        <span className="text-red-500">bro</span>
                    </div>
                    <p className="p-2 font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque in possimus totam, ut harum saepe enim officiis fugit, tempora aliquam quis similique, quas eligendi ea eveniet vero ipsam earum quam cumque id! Pariatur repellendus, quiddae magni enim tenetur nostrum nam, laborum at?</p>

                    <h2 className="p-2 font-bold">Address</h2>

                    <h5 className="pl-2 font-medium">Lorem, ipsum dolor sit amet consectetur adip</h5>
                    <h5 className="pl-2 font-medium">Lorem ipsum dolor,</h5>
                </div>
                <div className="flex-1 pt-4">
                    <h6 className="font-bold">Quick Link</h6>
                    <div className="flex">
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
                        <div className="">
                            <ul>
                                <li className="p-2">Facebook</li>
                                <li className="p-2">Instagram</li>
                                <li className="p-2">abc@gmail.com</li>
                                <li className="p-2">789556423</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex-1">
                    <h5>Subscribe to Our Newsletter</h5>
                </div>
            </div>
        </div>
    )
}

export default Footer;