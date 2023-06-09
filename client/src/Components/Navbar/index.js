import React from 'react';
import { FaPizzaSlice, FaUser } from 'react-icons/fa';
import { HiLocationMarker } from 'react-icons/hi';
import { GoTriangleDown } from 'react-icons/go';
import { RiSearchLine } from 'react-icons/ri';

const MobileNav = () => {
    return (
    <>
  <div className="items-center justify-between flex w-full md:hidden">
  <div className="w-28">
    <img
      src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
      alt="logo"
      className="w-full h-full"
    />
  </div>
  <div className="flex items-center gap-3">
    <button className="bg-zomato-400 text-white py-2 px-3 rounded-full">Use App</button>
    <span className="border p-2 border-blue-300 text-blue-400 rounded-full">
      <FaPizzaSlice />
    </span>
  </div>
  </div>
    </>
    );
  };

const NavLg = () => {
    return (
        <>
            <div className="flex justify-between items-center">
                <div className="flex justify-between items-center py-2 gap-5">
                    <div className="w-32 ml-12">
                        <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="Company Logo" className="w-full h-full" />
                    </div>
                    <div className="bg-white shadow px-2 py-3.5 flex items-center gap-3 border border-gray-200 rounded-md">
                        <div className="flex justify-between items-center gap-1 border-gray-300 border-r-2 pr-2">
                            <HiLocationMarker className="w-6 h-6 text-red-400" />
                            <p className="text-gray-500 text-sm mr-32 tracking-wide">
                                Mumbai
                            </p>
                            <GoTriangleDown className="text-gray-600" />
                        </div>
                    <div className="w-full h-full flex items-center gap-3 text-sm tracking-wide">
                        <RiSearchLine className="w-6 h-6 text-gray-400" />
                        <input type="text" placeholder="Search for restaurant, cuisine or a dish" className="w-96 focus:outline-none tracking-wide" />
                    </div>
                    </div>
                </div>
                <div className="flex justify-between items-center gap-10 text-gray-500 font-light tracking-wider mr-16">
                    <div>
                        Log in
                    </div>
                    <div>
                        Sign up
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center gap-12 ">
                <div className="flex justify-between items-center">
                    <img src="https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png" alt="Delivery Image" className="w-8 h-8" />
                    <p className="text-xl font-semibold text-gray-500 tracking-wide">Delivery</p>
                </div>
                <div className="flex justify-between items-center">
                    <img src="	https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png" alt="Dining Out Image" className="w-8 h-8" />
                    <p>Dining Out</p>
                </div>
                <div className="flex justify-between items-center">
                    <img src="https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png" alt="Night Life Image" className="w-8 h-8" />
                    <p>Nightlife</p>
                </div>
            </div>
        </>
    );
};

const Navbar = () => {
    return (
        <>
            <nav>
                <div className="md:hidden">
                    <MobileNav />
                </div>   
                <div className="hidden lg:block">
                    <NavLg />
                </div>
            </nav>
        </>
    );
};

export default Navbar;