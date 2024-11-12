"use client"; 
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../app/assets/images/logo.png";
import { FaBarsStaggered } from "react-icons/fa6";
import Log from "../log/Log";
import { loginProps } from './../../app/data/LoginData'

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);  
    const [popupContentType, setPopupContentType] = useState<"login" | "signUp">("login");  // حالة لتحديد نوع المحتوى

    // Effect لتحديث حالة التمرير
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll);
        
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // دالة لفتح الـ pop-up بناءً على نوع المحتوى بعد إغلاق الـ pop-up الحالية
    const openPopup = (type: "login" | "signUp") => {
        // أغلق الـ pop-up الحالي أولاً
        setIsLoginPopupOpen(false);

        // انتظر لمدة قصيرة لإغلاق الـ pop-up الحالية قبل فتح الـ pop-up الجديدة
        setTimeout(() => {
            setPopupContentType(type);  // تغيير نوع المحتوى
            setIsLoginPopupOpen(true);  // فتح الـ pop-up
        }, 300);  // تأخير بسيط لفتح الـ pop-up الجديدة
    };
    return (
        <nav className={`fixed top-0 left-0 w-full flex items-center justify-between 2xl:h-42 xl:h-28 lg:h-28 md:px-7 lg:px-16 xl:px-40 2xl:px-60 p-5 z-50
            ${isScrolled ? "bg-white text-footer-bg shadow-md" : "bg-white-20 text-light"}
            transition-all duration-500 ease-in-out`}
        >
            <Image 
                src={logo} 
                alt="logo" 
                width={133} 
                height={130}  
                className="md:w-24 md:h-24 lg:h-24 w-16 h-16 "  
            />
            
            {/* الروابط للعرض على الشاشات الكبيرة */}
            <div className="md:flex hidden space-x-4">
                <Link href="/">Home</Link>
                <Link href="/about">About Us</Link>
                <Link href="/tour-packages">Tour Packages</Link>
                <Link href="/contact">Contact Us</Link>
            </div>
            
            {/* أزرار الدخول والتسجيل للعرض على الشاشات الكبيرة */}
            <div className="md:flex hidden items-center space-x-4">
                <button onClick={() => openPopup("login")}>Login</button>
                <button 
                    onClick={() => openPopup("signUp")}
                    className="flex justify-center items-center w-40 h-12 rounded-50 bg-orange-500 text-white"
                >
                    Sign Up
                </button>
            </div>
            
            {/* زر القائمة المنسدلة للشاشات الصغيرة */}
            <button
                className="text-2xl md:hidden z-20" 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle navigation menu"
            >
                <FaBarsStaggered />
            </button>

            {/* القائمة المنسدلة عند الضغط على الزر */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-white text-footer-bg shadow-lg p-5 z-10 flex flex-col items-center space-y-4 md:hidden">
                    <Link href="/">Home</Link>
                    <Link href="/about">About Us</Link>
                    <Link href="/tour-packages">Tour Packages</Link>
                    <Link href="/contact">Contact Us</Link>
                    <div className="flex items-center space-x-4">
                        <button onClick={() => openPopup("login")}>Login</button>
                        <button 
                            onClick={() => openPopup("signUp")}
                            className="flex justify-center items-center w-40 h-12 rounded-50 bg-orange-500 text-white"
                        >
                            Sign Up
                        </button>
                    </div>
                </div>
            )}

            {/* مكون Log كنافذة منبثقة */}
            {isLoginPopupOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
                        <button 
                            onClick={() => setIsLoginPopupOpen(false)}
                            className="text-end w-full mt-4 text-sm text-gray-500"
                        >
                            x
                        </button>
                        {popupContentType === "login" ? (
                            <Log {...loginProps[0]} openPopup={openPopup} />
                        ) : (
                            <Log {...loginProps[1]} openPopup={openPopup} />
                        )}
                    </div>
                </div>
            )}

        </nav>
    );
};

export default NavBar;
