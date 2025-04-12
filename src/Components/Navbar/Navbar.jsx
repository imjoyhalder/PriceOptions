import React, { useState } from 'react';
import Link from '../Link/Link';
import { CgMenu } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";


const Navbar = () => {
    const [open,setOpen] = useState(false)

    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/dashboard", name: "Dashboard" }
      ];
      
    return (
        <nav>
            <div className='md:hidden' onClick={()=>setOpen(!open)} >
                {   
                    open === true ? <AiOutlineClose className='text-2xl' /> : <CgMenu className='text-2xl ' />
                }
                
            </div>
            <ul className={`md:flex duration-1000 absolute md:static md:bg-none bg-stone-300 text-black 
                ${open?'top-6':'-top-60 '}
                px-6 ml-3  rounded-xl pt-2 pb-2`}>
                {routes.map(route => <Link key={route.id} route={route} ></Link> )}
            </ul>
        </nav>
    );
};

export default Navbar;