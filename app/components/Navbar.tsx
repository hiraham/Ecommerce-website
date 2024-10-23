import React from 'react';
import Link from'next/link';
import { GiFullPizza } from "react-icons/gi";
import{ FaBold } from "react-icons/fa";
import{ FaCartShopping } from 'react-icons/fa6';
import {FaSearch} from 'react-icons/fa';

const Navbar = () => {
  return (
    <div>
      <div className="grid xl:grid-cols-1">
        <div className="p-5">
          <div className="py-3 px-3 rounded-xl border w-full bg-gradient-to-r from-black to-gray-600">
            <div className="flex justify-between items-center">
              <div className="flex justify-center items-center gap-2">
                {/* Logo pizza */}
                <GiFullPizza className="w-6 h-6 text-yellow-300 hover:text-cyan-300" />

                {/* Search input */}
                <div style={{ position: 'relative' }}>
                  <input
                    className="rounded-3xl py-3 outline-none text-xs w-[350px] pr-10 hidden lg:block"
                    placeholder="Search for your favorite pizza from Red oven"
                  />
                  <FaSearch className="w-5 h-5 text-amber-300 absolute right-3 top-1 transform translate-y-1 hidden lg:block" />
                </div>
              </div>

              <div className="flex justify-center items-center gap-2">
                <FaBold className="w-5 h-5 text-amber-300 hidden lg:block" />

                <p className="text-sm text-white hidden lg:block">
                  Order now and get it with <span className="text-amber-400">20 min</span>
                </p>

                {/* Cart icons */}
                <FaCartShopping className="inline-block w-8 h-8 rounded-full ring-2 ring-sky-400 hover:ring-amber-300 text-sky-400" />
                <img
                  className="inline-block w-8 h-8 rounded-full ring-2 ring-amber-400"
                  src="./d.png"
                  alt="user avatar"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

