export default function Footer() {
    return (
        <>
            <footer className="min-w-full bg-red-950 p-14">
                <div className="container mx-auto flex flex-col items-center text-white">
                    <p className="text-lg mb-6">Welcome to AB-Studio!</p>

                    <div className="flex space-x-6 mb-6">
                        <a href="/about" className="hover:underline">About Us</a>
                        <a href="/services" className="hover:underline">Services</a>
                        <a href="/contact" className="hover:underline">Contact</a>
                    </div>

                    <div className="flex space-x-4 mb-6">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <svg
                                className="w-6 h-6 hover:text-red-300"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 2.01c.83 0 1.5.67 1.5 1.5v18a1.5 1.5 0 01-1.5 1.5H6a1.5 1.5 0 01-1.5-1.5V3.51c0-.83.67-1.5 1.5-1.5h12z" />
                            </svg>
                        </a>
                        <a href="https://github.com/Abdo-Hussien" target="_blank" rel="noopener noreferrer">
                            <svg
                                className="w-6 h-6 hover:text-red-300"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 .297c-6.627 0-12 5.373-12 12 0 5.304 3.438 9.8 8.205 11.387.6.111.82-.26.82-.577 0-.286-.01-1.241-.015-2.241-3.338.726-4.042-1.608-4.042-1.608-.546-1.385-1.333-1.756-1.333-1.756-1.088-.743.083-.728.083-.728 1.204.085 1.838 1.237 1.838 1.237 1.069 1.831 2.805 1.303 3.49.997.109-.775.42-1.303.764-1.603-2.665-.303-5.467-1.333-5.467-5.933 0-1.313.467-2.387 1.236-3.228-.125-.303-.536-1.528.116-3.176 0 0 1.008-.323 3.3 1.23a11.507 11.507 0 012.999-.404c1.021 0 2.055.137 3.03.404 2.293-1.553 3.3-1.23 3.3-1.23.653 1.648.243 2.873.119 3.176.77.841 1.236 1.915 1.236 3.228 0 4.607-2.805 5.628-5.475 5.926.432.374.82 1.102.82 2.224 0 1.606-.015 2.903-.015 3.293 0 .318.218.693.825.577A12.004 12.004 0 0024 12.297c0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>
                        <a href="https://www.instagram.com/abdelrahman.104/" target="_blank" rel="noopener noreferrer">
                            <svg
                                className="w-6 h-6 hover:text-red-300"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 3a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3V6a3 3 0 00-3-3H6zM12 8a4 4 0 100 8 4 4 0 000-8zm-1 7h2m-1-7h2" />
                            </svg>
                        </a>
                    </div>

                    <p className="text-sm">&copy; {new Date().getFullYear()} ABStudio. All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}