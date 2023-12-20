import { MenuIcon } from 'lucide-react';
import logo from './LogoMain.svg';
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full flex justify-between items-center px-[5%] md:px-[10%] text-lg pt-5 relative bg-white">
            {/* Logo - po lewej na większych ekranach, wyśrodkowane na mniejszych */}
            <div className="flex justify-between items-center w-full md:w-auto">
                <a href="/" className="flex justify-center w-full md:w-auto md:justify-start">
                    <img src={logo} width="200px" alt='logo' className="md:relative max-md:hidden transform -translate-x-1/2 -translate-y-1/2 md:translate-x-0 md:translate-y-0" />
                </a>
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden z-20">
                    <MenuIcon />
                </button>
            </div>

            {/* Menu */}
            <ul className={`absolute md:static top-full left-0 md:flex flex-col md:flex-row items-center ${isOpen ? 'flex' : 'hidden'} w-full md:w-auto bg-white z-10`}>
                <li className="text-sm md:mr-[2rem] lg:mr-[3rem] md:text-base lg:text-lg block p-2 md:p-0"><a href="/">PORTFOLIO</a></li>
                <li className="text-sm md:mr-[2rem] lg:mr-[3rem] md:text-base lg:text-lg block p-2 md:p-0"><a href="/">O NAS</a></li>
                <li className="text-sm md:mr-[2rem] lg:mr-[3rem] md:text-base lg:text-lg block p-2 md:p-0"><a href="/">OFERTA</a></li>
                <li className="text-sm md:mr-[2rem] lg:mr-[3rem] md:text-base lg:text-lg block p-2 md:p-0"><a href="/">CERTYFIKATY</a></li>
                <li className="text-sm md:text-base lg:text-lg block p-2 md:p-0"><a href="/">KONTAKT</a></li>
            </ul>
        </nav>
    );
}
