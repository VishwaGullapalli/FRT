import ScrollToTop from "@/componenets/ScrollToTop"

const PrivacyPolicy = () => {
    return (
        <div>
            <ScrollToTop />
            <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-blue-900">
                <div className="flex justify-between px-4 mx-auto max-w-screen-xl">
                    <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                        <header className="mb-8 lg:mb-12">
                            <h1 className="text-3xl font-extrabold leading-tight text-gray-900 lg:text-4xl dark:text-white">
                                About Flasheasy
                            </h1>
                        </header>
                        <div className="text-gray-700 dark:text-gray-300">
                            <p>
                                Welcome to Flasheasy, your go-to platform for efficient and intelligent flashcard generation and management!
                            </p>
                        </div>
                        <ol className="list-decimal pl-6 mt-4">
                            <li className="mt-4">
                                <strong>Our Mission</strong>
                                <br />
                                At Flasheasy, we are on a mission to make learning faster, easier, and more enjoyable. We understand that mastering new information is a crucial part of personal and educational growth. That's why we've created a versatile web application designed to help you effortlessly create and manage flashcards for your learning needs.
                            </li>
                            <li className="mt-4">
                                <strong>What Sets Us Apart?</strong>
                                <br />
                                Your data is used solely for the purpose of enhancing your experience with our services. We do not share, sell, or rent your personal information to any third parties for marketing purposes or any other reasons.
                            </li>
                            <li className="mt-4">
                                <strong>Key Features:</strong>
                                <br />
                                <ol className="list-disc pl-6 mt-4">
                                    <li>
                                        <strong>Automatic Flashcard Generation:</strong> Say goodbye to the tedious task of creating flashcards one by one. Our platform automates the process, saving you valuable time and effort.
                                    </li>
                                    <li>
                                        <strong>Tailored to Your Needs:</strong> Flasheasy adapts to your learning style. Create custom flashcards or explore open-source collections to find the perfect study materials.
                                    </li>
                                    <li>
                                        <strong>Open Source Community:</strong>Join our thriving open-source community, where knowledge is freely shared, and everyone benefits from collective contributions.
                                    </li>
                                    <li>
                                        <strong>Private Collections:</strong>  Keep your learning materials private, organized, and easily accessible within your personal collections.
                                    </li>
                                </ol>
                            </li>
                            <li className="mt-4">
                                <strong>Data Deletion</strong>
                                <br />
                                If you wish to have your data removed from our systems, you can request data deletion by contacting our support team at [support email address]. Upon receiving your request, we will promptly delete your data from our records, except where retention is required by law.
                            </li>
                            <li className="mt-4">
                                <strong>Our Technology Stack</strong>
                                <br />
                                Flasheasy is built on a foundation of cutting-edge technologies to ensure a seamless and efficient user experience:
                                <ol className="list-disc pl-6 mt-4">
                                    <li>
                                        <strong>React:</strong> The frontend of our web app is powered by React, providing a fast and interactive interface.
                                    </li>
                                    <li>
                                        <strong>TypeScript:</strong> We use TypeScript for enhanced code quality and maintainability.
                                    </li>
                                    <li>
                                        <strong>Tailwind CSS:</strong> The UI is designed with Tailwind CSS, offering a clean and modern aesthetic.
                                    </li>
                                    <li>
                                        <strong>Node.js and Express:</strong> Our server-side application is built with Node.js and Express for high performance and scalability.
                                    </li>
                                    <li>
                                        <strong>MongoDB and Azure Cosmos DB:</strong> We employ robust database solutions to ensure data reliability and scalability.
                                    </li>
                                </ol>
                            </li>
                            <li className="mt-4">
                                <strong>Join the Flasheasy Community</strong>
                                <br />
                                We invite you to join our community of learners, educators, and knowledge enthusiasts. Whether you're passionate about open-source education or simply eager to make your learning journey more efficient, Flasheasy is here to support you.
                            </li>
                            <li className="mt-4">
                                <strong>Get Started Today</strong>
                                <br />
                                Ready to supercharge your learning? Use Flasheasy and start creating, discovering, and mastering flashcards effortlessly. We're excited to be part of your educational journey!

                                For any questions, feedback, or partnership inquiries, please don't hesitate to contact us. Together, we can make learning smarter and more accessible for everyone.
                            </li>
                        </ol>
                        <div className="text-gray-700 dark:text-gray-300 mt-4">
                            <p>
                                <strong>Thank you for choosing Flasheasy!</strong>
                            </p>
                        </div>
                    </article>
                </div>
            </main>
        </div>
    );
};

export default PrivacyPolicy;
