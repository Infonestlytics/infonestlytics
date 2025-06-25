import { useState } from "react";

function ContactUs() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");

        const response = await fetch("https://formspree.io/f/xyzjdlqg", {
            method: "POST",
            headers: {
                Accept: "application/json",
            },
            body: new FormData(e.target),
        });

        if (response.ok) {
            setStatus("You Will Be Contacted soon!");
            setFormData({ name: "", email: "", message: "" });
        } else {
            setStatus("Failed to send. Please try again.");
        }
    };

    return (
        <section id="contactus" className="w-full bg-white dark:bg-black py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                <div>
                    <h2 className="text-4xl font-bold text-black dark:text-white">
                        Get in <span className="dark:text-yellow-50">Touch</span>
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                        Have questions, ideas, or just want to say hello? <br />
                        We’d love to hear from you. Fill out the form and we’ll get back to you shortly.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                            Your Name
                        </label>
                        <input
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white px-4 py-2 focus:ring-2 focus:ring-yellow-dark:text-yellow-50 outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                            Email Address
                        </label>
                        <input
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white px-4 py-2 focus:ring-2 focus:ring-yellow-dark:text-yellow-50 outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                            Message
                        </label>
                        <textarea
                            name="message"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white px-4 py-2 focus:ring-2 focus:ring-yellow-dark:text-yellow-50 outline-none"
                        />
                    </div>

                    <div className="text-center md:text-left">
                        <button
                            type="submit"
                            className="inline-block rounded border border-black bg-black px-6 py-2.5 font-medium text-white shadow-sm transition-colors hover:bg-[#1a1a1a] dark:bg-white dark:text-black dark:hover:bg-yellow-50 dark:hover:text-black"
                        >
                            Send Message
                        </button>
                        {status && (
                            <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
                                {status}
                            </p>
                        )}
                    </div>
                </form>
            </div>
        </section>
    );
}

export default ContactUs;
