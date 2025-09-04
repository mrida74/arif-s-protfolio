'use client'
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";      

function SocialIconBar() {
return (
     <div className="hidden md:flex fixed left-4 top-1/2 -translate-y-1/2 z-50 flex-col gap-6 items-center">
            <Link href="https://www.facebook.com/am.khi.622679" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg">
                <FaFacebookF className="w-5 h-5 md:w-8 md:h-8" />
            </Link>
            <Link href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg">
                <FaInstagram className="w-5 h-5 md:w-8 md:h-8" />
            </Link>
            <Link href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-gray-900 dark:text-white hover:text-gray-700 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg">
                <FaGithub className="w-5 h-5 md:w-8 md:h-8" />
            </Link>
            <Link href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg">
                <FaLinkedinIn className="w-5 h-5 md:w-8 md:h-8" />
            </Link>
        </div>
)
}

export default SocialIconBar