import React, { useState } from 'react';
import Link from '../Link/Link';
import { MenuIcon, XIcon } from '@heroicons/react/solid'

const Navbar = () => {
    const routs = [
        { id: 1, name: 'home', link: '/home' },
        { id: 2, name: 'shop', link: '/shop' },
        { id: 3, name: 'deals', link: '/deals' },
        { id: 4, name: 'contuct', link: '/contact' },

    ]
    const [open, setOpen] = useState(false)
    return (
        <nav className='bg-indigo-300 mx-auto' >
            <div onClick={() => { setOpen(!open) }} className='w-6 h-6 md:hidden'>
                {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
            </div>
            <ul className={`w-full bg-indigo-300 md:flex justify-center absolute md:static duration-200 ease-in ${open ? 'top-6' : 'top-[-120px]'}`}>
                {
                    routs.map(route => <Link
                        route={route}
                        key={route.id}
                    ></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;