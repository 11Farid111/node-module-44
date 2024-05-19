import { useState } from "react";
import Link from "../Link/Link";
import { HiMenuAlt1 } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";
const NavBar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/profile/:username", name: "Profile" }
      ];

      
    return (
        <nav className="text-black bg-yellow-300 p-4">
            <div className="text-2xl md:hidden" onClick={() => setOpen(!open)}>
                {
                    open === true ? <IoCloseSharp></IoCloseSharp> : <HiMenuAlt1></HiMenuAlt1>
                }
            </div>
           <ul className={` md:flex duration-1000 absolute md:static
           ${open ? 'top-12': '-top-60'}
            bg-yellow-300 px-6 shadow-lg`}>
           {
               routes.map(route => <Link route ={route} key={route.id}></Link>  ) 
            }
           </ul>
        </nav>
    );
};

export default NavBar;