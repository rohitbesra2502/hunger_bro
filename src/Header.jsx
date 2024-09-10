import React from "react";

function Header() {
    return (
        <>
            <header className="w-full py-5">
                <div className="container mx-auto px-12">
                    <div className="grid grid-cols-3 gap-4">
                        <div className="uppercase font-bold text-2xl">
                            <span className="text-amber-400">hunger</span>
                            <span className="text-slate-950">-</span>
                            <span className="text-red-500">bro</span>
                        </div>
                        <div className="capitalize font-medium flex items-center full">
                            <ul className="flex items-center justify-between gap-x-4 full">
                                <li><a href="/">Home</a></li>
                                <li><a href="/">About Us</a></li>
                                <li><a href="/">Our Special</a></li>
                                <li><a href="/">Services</a></li>
                                <li><a href="/">Contact</a></li>
                            </ul>
                        </div>
                        <div className="uppercase font-bold text-2xl">

                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;