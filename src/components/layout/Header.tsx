"use client"
import React from 'react';
import Wrapper from '../shared/Wrapper';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import Drawer from '@/components/shared/Drawer';
import Navbar from '../shared/NavbarLinks';
import Shoppingcart from '@/components/shared/Shoppingcart';

const Header = () => {
  const navbar = false;
  const [drawer, setDrawer] = useState(false);

  return (
    <header className="top-0 z-10">
      <Wrapper>
        <div className="flex justify-between mx-8 py-4 items-center">
          <Drawer open={drawer} setOpen={setDrawer} />
          {/* Logo */}
          <div className="object-scale-down md:justify-between">
            <Link href="/">
              <div>
                <Image src='/logo.png' alt='Dine Market' width={140} height={140} />
              </div>
            </Link>
          </div>

          {/* Button */}
          <div className="md:hidden">
            <button
              className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
              onClick={() => setDrawer(true)}
            >
              {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
            </button>
          </div>

          {/* Navigation bar */}
          <div className="hidden md:block">
            <Navbar />
          </div>

          {/* Search Bar */}
          <div className="hidden lg:block">
            <input type="text" placeholder='What you looking for' className='border-2 px-1 border-gray-300 rounded-lg' />
          </div>

          {/* Cart */}
          <div className='hidden md:block'>
            <Link href={"/cart"}>
              <Shoppingcart />
            </Link>
          </div>
        </div>
      </Wrapper>
    </header >
  );
};

export default Header;
