import { useEffect, useRef, useState } from "react";
import { AiOutlineClose, AiOutlineContacts, AiOutlineHome, AiOutlineInfoCircle, AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import { Logo } from "../assets/Icon";
import { Link } from "react-router-dom";

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
        setOpen(false);
    };

    return (
        <div className="relative bg-white  shadow-md max-h-20 " ref={modalRef} >
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center border-b-2 border-gray-100 py-6  md:space-x-10">
                    {open ? ("") : <Link to="/" className="flex justify-start lg:w-0 lg:flex-1 z-20">
                        <span className="sr-only">Kuzey Tekel</span>
                        <Logo size={55} />
                    </Link>}
                    <div className="-mr-2 -my-2 md:hidden">
                        <button
                            type="button"
                            className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                            onClick={() => setOpen(!open)}
                        >
                            <span className="sr-only">Open menu</span>
                            <AiOutlineMenu size={25} />
                        </button>
                    </div>
                    <nav className="hidden md:flex space-x-10">
                        <Link to="/" className="text-base font-medium text-gray-500 hover:text-gray-900">
                            Home
                        </Link>
                        <Link to="/product" className="text-base font-medium text-gray-500 hover:text-gray-900">
                            Products
                        </Link>
                        <Link to="/about" className="text-base font-medium text-gray-500 hover:text-gray-900">
                            About
                        </Link>
                        <Link to="/contact" className="text-base font-medium text-gray-500 hover:text-gray-900">
                            Contact
                        </Link>
                    </nav>
                </div>
            </div>

            {/*Mobile menu*/}
            <div
                className={
                    open
                        ? "opacity-100 scale-100  ease-out duration-200 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                        : "opacity-0 scale-95 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                }
            >
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                    <div className="pt-5 pb-6 px-5">
                        <div className="flex items-center justify-between">
                            <Link to="/" onClick={handleLinkClick}>
                                <Logo size={50} />
                            </Link>
                            <div className="-mr-2">
                                <button
                                    type="button"
                                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                    onClick={() => setOpen(!open)}
                                >
                                    <span className="sr-only">Close menu</span>
                                    <AiOutlineClose size={25} />
                                </button>
                            </div>
                        </div>

                        {/* mobile navbar  */}
                        <div className="mt-6">
                            <nav className="grid gap-y-8">
                                <Link to="/" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50" onClick={handleLinkClick}>
                                    <AiOutlineHome size={25} color="#4f46e5" />
                                    <span className="ml-3 text-base font-medium text-gray-900"> Home </span>
                                </Link>
                                <Link to="/product" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50" onClick={handleLinkClick}>
                                    <AiOutlineShoppingCart size={25} color="#4f46e5" />
                                    <span className="ml-3 text-base font-medium text-gray-900">
                                        Products
                                    </span>
                                </Link>

                                <Link to="/about" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50" onClick={handleLinkClick}>
                                    <AiOutlineInfoCircle size={25} color="#4f46e5" />
                                    <span className="ml-3 text-base font-medium text-gray-900"> About </span>
                                </Link>
                                <Link to="/contact" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50" onClick={handleLinkClick}>
                                    <AiOutlineContacts size={25} color="#4f46e5" />
                                    <span className="ml-3 text-base font-medium text-gray-900"> Contact </span>
                                </Link>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

