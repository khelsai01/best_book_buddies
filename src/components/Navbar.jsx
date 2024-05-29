import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import { IonIcon } from '@ionic/react';
import { menu, close } from 'ionicons/icons';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const onToggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div>
            <nav className="flex justify-between items-center w-[100%] mx-auto p-3  shadow-md ">
                    <div>
                        <img
                            className="w-44 px-2 lg:mx-10  cursor-pointer"
                            src="/assets/logo.svg"
                            alt="Logo"
                        />
                    </div>
                    <div
                        className={`duration-500 md:static absolute lg:ml-64 md:min-h-fit min-h-[60vh] left-0 ${
                            menuOpen ? 'top-[7%] bg-white text-start' : 'top-[-100%]'
                        } md:w-auto w-full flex items-center  px-5`}
                    >
                        <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 text-md  text-gray-700 ">
                            <li>
                                <a className="cursor-pointer hover:text-gray-500" href="#">Features</a>
                            </li>
                            <li>
                                <a className="cursor-pointer hover:text-gray-500" href="#">Github</a>
                            </li>
                            <li>
                                <a className="cursor-pointer hover:text-gray-500" href="#">For Designers</a>
                            </li>
                            <button className="bg-[#e1e3e8] px-5 py-2   text-gray-600 rounded-lg hover:bg-[#ebeef4]">Documentation</button>
                        </ul>
                    </div>
                    <div className="flex items-center gap-6">                      
                        <IonIcon
                            icon={menuOpen ? close : menu}
                            onClick={onToggleMenu}
                            className="text-3xl cursor-pointer md:hidden"
                        />
                    </div>
                </nav>

        </div>
    );
};

export default Navbar;
