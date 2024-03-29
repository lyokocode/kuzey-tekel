import { useEffect, useRef, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Logo } from "../assets/Icon";
import { Link } from "react-router-dom";
import { navigationBar } from "../data";

export const Navbar = () => {
    const [open, setOpen] = useState(false);
    const modalRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleLinkClick = () => {
        if (window.innerWidth < 768) {
            setOpen(false);
        }
    };

    return (
        <>
            <div className="relative bg-white  shadow-md  z-30" ref={modalRef}  >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 ">
                    <div className=" flex justify-between items-center border-b-2 max-h-20  border-gray-100 py-6   md:space-x-10">
                        {open ? ("") : <Link to="/" className=" flex justify-start  z-20 " style={{ zoom: 1.4 }}>
                            <span className="sr-only">Kuzey Tekel</span>
                            <Logo size={80} />
                        </Link>}
                        <div className="-mr-2 -my-2  md:hidden">
                            <button
                                type="button"
                                aria-label="Menu"
                                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                onClick={() => setOpen(!open)}
                            >
                                <span className="sr-only">Open menu</span>
                                <AiOutlineMenu size={25} />
                            </button>
                        </div>
                        <nav className="hidden md:flex space-x-4 " >
                            {
                                navigationBar && navigationBar.map(navigation => (
                                    <Link key={navigation.id} to={navigation.link} className="text-base font-medium text-gray-500 hover:text-gray-900 px-4 py-2 rounded-md hover:bg-gray-300 transition duration-300 ease-in-out">
                                        {navigation.name}
                                    </Link>

                                ))
                            }
                        </nav>

                    </div>
                </div>

                {/*Mobile menu*/}
                <div
                    className={
                        open
                            ? "opacity-100 scale-100 ease-out duration-200 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                            : "opacity-0 scale-95 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                    }
                >
                    {
                        open && (
                            <div className="rounded-lg shadow-lg ring-1   ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                                <div className="pt-5 pb-6 px-5 ">
                                    <div className="flex  items-center justify-between ">
                                        <Link to="/" onClick={handleLinkClick} className="flex-1">
                                            <Logo size={50} />
                                        </Link>
                                        <div className="-mr-2">
                                            <button
                                                type="button"
                                                aria-label="Close button"
                                                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                                onClick={() => setOpen(!open)}
                                            >
                                                <span className="sr-only">Close menu</span>
                                                <AiOutlineClose size={25} />
                                            </button>
                                        </div>
                                    </div>

                                    {/* mobile navbar  */}
                                    <div className="mt-6 md:hidden">
                                        <nav className="grid gap-y-8 ">

                                            {
                                                navigationBar && navigationBar.map(navigation => (
                                                    <Link key={navigation.id} to={navigation.link} className="-m-3 p-3   flex items-center rounded-md hover:bg-gray-50" onClick={handleLinkClick}>
                                                        {navigation.icon}
                                                        <span className="ml-3 text-base font-medium text-gray-900"> {navigation.name} </span>
                                                    </Link>
                                                ))
                                            }
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    );
};

