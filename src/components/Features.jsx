import card1 from '../assets/Features/card_1.jpg'
import card2 from '../assets/Features/card_2.jpg'
import card3 from '../assets/Features/card_3.jpg'


function Features() {
    const cardsData = [
        {
            id: 1,
            title: "Crack LinkedIn Like a Pro",
            image: card1,
            description:
                "Optimize your LinkedIn profile to attract recruiters, grow your network, and showcase your skills the right way.",
        },
        {
            id: 2,
            title: "1-on-1 Mentorship Sessions",
            image: card2,
            description:
                "Gain clarity and direction through personalized guidance from experienced mentors in your domain.",
        },
        {
            id: 3,
            title: "Build an ATS-Friendly Resume",
            image: card3,
            description:
                "Stand out in job applications with a custom resume that passes ATS checks and highlights your strengths. Reach out to get yours!",
        },
    ];


    return (
        <section id='features' className="bg-gray-50 dark:bg-black p-8 pt-20">
            <h1 className="text-5xl font-bold text-center text-black dark:text-white mb-2">
                Your Place in Our
                <strong className="dark:text-yellow-50"> Ecosystem </strong>
            </h1>
            <p className="text-lg text-center text-gray-700 dark:text-gray-300 mb-8 pb-16">
                Discover the unique elements that make NestLytics a place where your
                ideas can thrive and your skills can grow.
            </p>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {cardsData.map((card) => (
                    <article key={card.id} className="group">
                        <img
                            alt={card.title}
                            src={card.image}
                            className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%] dark:shadow-gray-700/25"
                        />

                        <div className="p-4">
                            <a href="#contactus">
                                <h3 className="text-lg font-medium text-black dark:text-white">
                                    {card.title}
                                </h3>
                            </a>

                            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
                                {card.description}
                            </p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Features