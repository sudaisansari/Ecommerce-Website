import React from 'react'
import Link from 'next/link'

const NavbarLinks = () => {
    return (
            <div className=''>
                <ul className='flex flex-col md:flex-row items-center gap-x-12 font-medium text-lg'>
                    <li>
                        <Link href={"/category/female"}>Female</Link>
                    </li>
                    <li>
                        <Link href={"/category/male"}>Male</Link>
                    </li>
                    <li>
                        <Link href={"/category/kids"}>Kids</Link>
                    </li>
                    <li>
                        <Link href={"/products"}>All Products</Link>
                    </li>
                </ul>
            </div>
    )
}

export default NavbarLinks