import { useEffect, useState } from 'react'
import about from "../assets/About/About.png"

function About() {
    const words = ["CURIOSITY", "FOUNDER", "IDEATORS", "INITIATORS"];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 2100);

        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="about"
            className="overflow-hidden bg-gray-50 dark:bg-black"
        >
            <div className="text-center px-4 pt-16">
                <h1 className="text-5xl font-bold text-black dark:text-white mb-12">
                    About
                    <strong className="dark:text-yellow-50"> Us </strong>
                </h1>
            </div>

            <div className="grid sm:grid-cols-2 items-center">
                <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                    <div className="mx-auto max-w-xl text-center sm:text-left">
                        <h1 className="text-4xl font-serif text-black sm:text-5xl dark:text-white">
                            United by{" "}
                            <strong className="dark:text-yellow-50"> {words[index]} </strong>
                        </h1>

                        <p className="mt-4 text-gray-500 dark:text-gray-400 hidden md:block">
                            Gain actionable insights into how users navigate your product. Optimize every interaction to boost engagement, reduce drop-offs, and drive better results.
                        </p>

                        <div className="mt-6 md:mt-8">
                            <a
                                href="https://forms.gle/H2u18Vncov95CE2o9"
                                className="inline-block rounded-sm bg-black px-12 py-3 text-sm font-medium text-white transition hover:bg-yellow-600 dark:bg-yellow-400 dark:text-black dark:hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-white"
                            >
                                Become a member
                            </a>
                        </div>
                    </div>
                </div>

                <div>
                    <img
                        alt="About"
                        src={about}
                        className="h-full w-full object-cover sm:rounded-ss-[30px] md:rounded-ss-[60px]"
                    />
                </div>
            </div>
        </section>
    )
}

export default About