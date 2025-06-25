import { useState } from 'react'
import logo from "../assets/Logo.jpg";


function Navbar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    return (
        <header className="fixed top-0 w-[100%] bg-white dark:bg-black z-50">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="md:flex md:items-center md:gap-2">
                        <img
                            src={logo}
                            alt="IDC Logo"
                            className="h-10 w-auto hidden md:block"
                            loading="lazy"
                        />
                        <a
                            href="#"
                            className="block text-xl font-bold text-black dark:text-white"
                        >
                            NESTLYTICS
                        </a>
                    </div>

                    <div className="hidden md:block">
                        <nav aria-label="Global">
                            <ul className="flex items-center gap-6 text-sm">
                                <li>
                                    <a
                                        className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                        href="#features"
                                    >
                                        Features
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                        href="#universities"
                                    >
                                        Universities
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                        href="#team"
                                    >
                                        Team
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                        href="#about"
                                    >
                                        About Us
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="block md:hidden">
                        <button
                            className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                        {isSidebarOpen && (
                            <div className="absolute top-16 right-0 z-50 w-[50%] bg-white dark:bg-black shadow-md md:hidden">
                                <ul className="flex flex-col gap-4 p-4 text-black dark:text-white">
                                    <li>
                                        <a
                                            className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                            href="#features"
                                        >
                                            Features
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                            href="#universities"
                                        >
                                            Universities
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                            href="#team"
                                        >
                                            Team
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                            href="#about"
                                        >
                                            About Us
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar