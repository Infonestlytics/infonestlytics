import logo from "../assets/Logo.jpg";
import contributorImg from "../assets/Footer/contributer_img.jpg";

import {
    FaLinkedin,
    FaInstagram,
    FaDiscord,
    FaXTwitter,
    FaYoutube,
    FaGithub,
} from "react-icons/fa6";

function Footer() {
    return (
        <footer className="bg-gray-100 text-black dark:bg-black dark:text-white px-6 py-10 transition-colors duration-300">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                        <img src={logo} alt="IDC Logo" className="h-15 w-auto" loading="lazy" />
                        <h2 className="text-xl font-bold">NESTLYTICS</h2>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                        Gain actionable insights into how users navigate your product. Optimize every interaction to boost engagement, reduce drop-offs, and drive better results.
                    </p>
                </div>

                <div>
                    <h6 className="mb-3 font-semibold">About</h6>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                        <li>
                            <a href="#" className="hover:text-black dark:hover:text-white">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-black dark:hover:text-white">Terms & Conditions</a>
                        </li>
                        <li>
                            <span className="hover:text-black dark:hover:text-white">Contact: InfoNestLytics@gmail.com</span>
                        </li>
                    </ul>
                </div>

                <div>
                    <h6 className="mb-3 font-semibold">Connect On</h6>
                    <div className="flex flex-wrap gap-3">
                        <a href="https://www.linkedin.com/company/nestlytics/" className="flex items-center gap-2 bg-blue-700 px-3 py-1 rounded hover:bg-blue-800 text-white text-sm">
                            <FaLinkedin /> LinkedIn
                        </a>
                        <a href="https://www.instagram.com/nestlytics?igsh=MTJtMzYyNzFobXFvag%3D%3D&utm_source=qr" className="flex items-center gap-2 bg-pink-600 px-3 py-1 rounded hover:bg-pink-700 text-white text-sm">
                            <FaInstagram /> Instagram
                        </a>
                        <a href="https://discord.gg/e36kDvpZ" className="flex items-center gap-2 bg-indigo-600 px-3 py-1 rounded hover:bg-indigo-700 text-white text-sm">
                            <FaDiscord /> Discord
                        </a>
                        <a href="https://x.com/nestlytics?s=21" className="flex items-center gap-2 bg-black px-3 py-1 rounded hover:bg-black text-white text-sm">
                            <FaXTwitter /> X
                        </a>
                        <a href="https://youtube.com/@nestlytics?si=elH3lq70-gltBzA4" className="flex items-center gap-2 bg-red-600 px-3 py-1 rounded hover:bg-red-700 text-white text-sm">
                            <FaYoutube /> YouTube
                        </a>
                    </div>
                </div>
            </div>

            <div className="mt-12 flex items-center justify-center gap-3">
                <img
                    src={contributorImg}
                    alt="Dev"
                    className="w-10 h-10 rounded-full border-2 border-black dark:border-white"
                    loading="lazy"
                />
                <p className="text-sm">
                    Contributed by <span className="font-semibold">Dev</span>
                </p>
                <a
                    href="https://www.linkedin.com/in/dev-raj-singh04"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 dark:hover:text-blue-400"
                >
                    <FaLinkedin size={18} />
                </a>
                <a
                    href="https://github.com/Dev-CodeBox"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-black dark:hover:text-gray-300"
                >
                    <FaGithub size={18} />
                </a>
            </div>

            <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
                © 2025 - NESTLYTICS. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
