import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <div>

            <footer className="bg-white shadow bottom-0 dark:bg-gray-800">
                <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">2023 <Link to="/" className="hover:underline">FlashEasy</Link>
                    </span>
                    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                        <li>
                            <Link to="/about" className="mr-4 hover:underline md:mr-6 ">About</Link>
                        </li>
                        <li>
                            <Link to="/privacy" className="mr-4 hover:underline md:mr-6">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link to="/license" className="mr-4 hover:underline md:mr-6">Licensing</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:underline">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}

export default Footer