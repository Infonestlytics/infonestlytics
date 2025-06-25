import { useEffect, useState } from 'react'
import hero from "../assets/Hero/hero.jpg"

function Hero() {
    const words = ["CURIOSITY", "FOUNDER", "IDEATORS", "INITIATORS"];
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        const currentWord = words[wordIndex];

        if (charIndex < currentWord.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(currentWord.slice(0, charIndex + 1));
                setCharIndex(charIndex + 1);
            }, 100);

            return () => clearTimeout(timeout);
        } else {
            const timeout = setTimeout(() => {
                setCharIndex(0);
                setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
                setDisplayedText("");
            }, 1500);

            return () => clearTimeout(timeout);
        }
    }, [charIndex, wordIndex]);

    return (
        <section className="relative bg-white dark:bg-black pt-20 lg:h-screen lg:flex lg:items-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    src={hero}
                    alt="Hero"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-white/80 dark:bg-black/80"></div>
            </div>

            <div className="relative z-10 mx-auto w-full max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
                <div className=' flex justify-center text-center'>
                    <div className="max-w-prose">
                        <h1 className="text-4xl font-serif text-black sm:text-5xl dark:text-white">
                            United by{" "}
                            <strong className="dark:text-yellow-50">{displayedText}</strong>
                            <span className="animate-pulse">|</span>
                        </h1>

                        <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed dark:text-gray-200">
                            Gain actionable insights into how users navigate your product. Optimize every interaction to boost engagement, reduce drop-offs, and drive better results.
                        </p>

                        <div className="mt-4 flex justify-center gap-4 sm:mt-6">
                            <a
                                className="inline-block rounded border border-black bg-black px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-black"
                                href="https://forms.gle/H2u18Vncov95CE2o9"
                            >
                                Book a session
                            </a>

                            <a
                                className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-black dark:border-gray-700 dark:text-gray-200 dark:hover:bg-black dark:hover:text-white"
                                href="#"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero