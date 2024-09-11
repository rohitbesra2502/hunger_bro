const Footer = () => {
    return(
        <div className="flex">
            <div className="flex-1 bg-blue-500 p-4">
                <div className="uppercase font-bold text-2xl">
                    <span className="text-amber-400">hunger</span>
                    <span className="text-slate-950">-</span>
                    <span className="text-red-500">bro</span>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque in possimus totam, ut harum saepe enim officiis fugit, tempora aliquam quis similique, quas eligendi ea eveniet vero ipsam earum quam cumque id! Pariatur repellendus, quidem harum neque commodi iure, blanditiis impedit hic recusandae magni enim tenetur nostrum nam, laborum at?</p>~
            </div>
            <div className="flex-1 bg-green-500 p-4">
                <h6>Quick Link</h6>
                <div>
                    <div>
                        <ul>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Explore Food</li>
                            <li>Our Specials</li>
                            <li>Services</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>Facebook</li>
                            <li>Instagram</li>
                            <li>abc@gmail.com</li>
                            <li>789556423</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex-1 bg-red-500 p-4"> 
                <h5>Subscribe to Our Newsletter</h5>
            </div>
        </div>
    )
}

export default Footer;