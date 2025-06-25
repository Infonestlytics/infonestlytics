import { useEffect, useState } from "react";
import { FaLinkedin } from "react-icons/fa";

import Kritarth from "../assets/Team/Kritarth.webp";
import Prakhar from "../assets/Team/Prakhar.webp";
import Sheetesh from "../assets/Team/Sheetesh.webp";
import Chanakya from "../assets/Team/Chanakya.jpeg";
import Sonu from "../assets/Team/Sonu.webp";
import Dev from "../assets/Footer/contributer_img.jpg"
import Yashika from "../assets/Team/Yashika.webp";
import Pawani from "../assets/Team/Pawani.webp";
import Harsimran from "../assets/Team/Harsimran.webp";
import Somya from "../assets/Team/Somya.jpg";


function Team() {
    const teamMembers = [
        {
            name: "Prakhar Kumar Singh",
            role: "Founder",
            company: "Leadership Team",
            image: Prakhar,
            testimonial: `Leading with purpose and building the foundation of our tech-driven community.`,
            linkedin: "https://www.linkedin.com/in/prakharkumarsingh2992?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            premium: false,
        },
        {
            name: "Kritarth Singh",
            role: "Co-Founder",
            company: "Leadership Team",
            image: Kritarth,
            testimonial: `Fostering innovation and growth with relentless energy and shared vision.`,
            linkedin: "https://www.linkedin.com/in/kritarth-singh-chauhan-5877aa220/",
            premium: false,
        },
        {
            name: "Sheetesh Kumar",
            role: "Co-Founder",
            company: "Leadership Team",
            image: Sheetesh,
            testimonial: `Driving impact and excellence across our initiatives and projects.`,
            linkedin: "https://www.linkedin.com/in/sheeteshkr?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            premium: true,
        },
        {
            name: "Chanakya Pandey",
            role: "Co-Founder",
            company: "Leadership Team",
            image: Chanakya,
            testimonial: `Dedicated to turning ambitious ideas into real-world solutions.`,
            linkedin: "https://www.linkedin.com/in/chanakyapandey",
            premium: false,
        },
        {
            name: "Sonu Kumar",
            role: "Mentor",
            company: "Leadership Team",
            image: Sonu,
            testimonial: `Guiding and shaping minds with a deep commitment to mentorship.`,
            linkedin: "http://www.linkedin.com/in/i-sonugupta",
            premium: false,
        },
        {
            name: "Dev Raj Singh",
            role: "Full Stack Developer",
            company: "Core Team",
            image: Dev,
            testimonial: `Crafting scalable applications and leading fullstack innovation.`,
            linkedin: "https://www.linkedin.com/in/dev-raj-singh04",
            premium: false,
        },
        {
            name: "Somya Tyagi",
            role: "Front-End Developer",
            company: "Core Team",
            image: Somya,
            testimonial: `Bringing designs to life with intuitive and responsive UIs.`,
            linkedin: "https://www.linkedin.com/in/tyagi-somya?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            premium: false,
        },
        {
            name: "Harsimran Singh",
            role: "Graphic Designer",
            company: "Core Team",
            image: Harsimran,
            testimonial: `Translating ideas into bold and clear visual experiences.`,
            linkedin: "http://www.linkedin.com/in/harsimran-singh-1197a431b",
            premium: false,
        },
        {
            name: "Yashika Verma",
            role: "Growth Manager",
            company: "Core Team",
            image: Yashika,
            testimonial: `Strategizing user growth and partnerships to scale our mission.`,
            linkedin: "https://www.linkedin.com/in/yashika-verma-389166355",
            premium: false,
        },
        {
            name: "Pawani",
            role: "Growth Partner",
            company: "Core Team",
            image: Pawani,
            testimonial: `Helping shape strategic outreach and brand visibility.`,
            linkedin: "https://www.linkedin.com/in/pawani-bhardwaj-911613355?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            premium: false,
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [teamMembers.length]);

    const handleSelect = (index) => {
        setCurrentIndex(index);
    };

    return (
        <section
            id="team"
            className="w-full flex justify-center px-4 py-20 bg-white text-black dark:bg-black dark:text-white transition-colors duration-300"
        >
            <div className="w-full max-w-6xl">
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">
                    Meet Our Team
                </h1>
                <p className="text-center text-gray-700 dark:text-yellow-50 mb-10 italic">
                    where hard work and determination meets victory!
                </p>

                <div className="flex flex-col lg:flex-row gap-6 items-center">
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <div className="relative">
                            <img
                                src={teamMembers[currentIndex].image}
                                alt={teamMembers[currentIndex].name}
                                className="w-[300px] h-[300px] object-cover rounded-lg shadow-md"
                            />
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 space-y-4">
                        <h2 className="text-xl font-semibold">{teamMembers[currentIndex].name}</h2>

                        <span
                            className="inline-block bg-gray-200 dark:bg-white/10 text-gray-800 dark:text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm"
                        >
                            {teamMembers[currentIndex].role}
                        </span>

                        <div className="flex items-center gap-2">
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Working at {teamMembers[currentIndex].company}
                            </p>
                        </div>

                        <p className="text-sm mt-2 text-gray-800 dark:text-gray-200 whitespace-pre-line">
                            {teamMembers[currentIndex].testimonial}
                        </p>

                        <a
                            href={teamMembers[currentIndex].linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-medium shadow-sm transition-all duration-200 ${teamMembers[currentIndex].premium
                                ? 'bg-[#F8C77E] text-black hover:bg-[#f1be5f]'
                                : 'bg-[#0A66C2] text-white hover:bg-[#004182]'
                                }`}
                        >
                            <FaLinkedin className="text-lg" />
                            Connect
                        </a>
                    </div>
                </div>

                <div className="mt-10 flex flex-wrap justify-center gap-4">
                    {teamMembers.map((member, index) => (
                        <button
                            key={index}
                            onClick={() => handleSelect(index)}
                            className={`border-2 rounded-md p-1 transition duration-200 ${currentIndex === index
                                ? "border-yellow-400 dark:border-yellow-100 scale-105"
                                : "border-transparent hover:border-gray-400 dark:hover:border-white/30"
                                }`}
                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-16 h-16 object-cover rounded-md"
                            />
                        </button>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Team