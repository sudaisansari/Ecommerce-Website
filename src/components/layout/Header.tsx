"use client"
import React from 'react';
import Wrapper from '../shared/Wrapper';
import Image from 'next/image';
import Logo from '/public/logo.png';
import Link from 'next/link';
import { useState } from 'react';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import Drawer from '@/components/shared/Drawer';
import Navbar from '../shared/NavbarLinks';

const Header = () => {
  const [navbar, setNavbar] = useState(false);
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
                <Image src={Logo} alt="Dine Market" />
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
            <form>
              <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-white dark:border-gray-100 dark:placeholder-gray-400 dark:text-black"
                  placeholder="What you looking for"
                  required
                />
              </div>
            </form>
          </div>

          {/* Cart */}
          <div className="hidden md:block">
            <div className="bg-gray-100 py-1 px-3 rounded-full flex justify-center items-center hover:scale-105 hover:shadow-sm">
              <div className="relative">
                <div className="t-0 absolute left-3">
                  <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">3</p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="file: mt-4 h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
