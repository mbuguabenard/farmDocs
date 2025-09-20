'use client'

export default function Footer() {
    return(
        <footer className="bg-gray-300 py-6"
        >
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                {/* Logo */}
                <div className="mb-4 md:mb-0">
                    <h1 className="text-xl font-bold text-white">Farmdocs</h1>
                    <p className="text-sm text-gray-400">
                        Document your farm.Track your growth
                    </p>
                </div>
                {/* links*/}
                <div className="dlex space-x-6 text-sm">
                    <a href="/about" className="hover:text-white transition">
                    About</a>
                    <a href="/contact" className="hover:text-white transition">
                    Contact 
                    </a>
                    <a href="/terms" className="hover:text-white transition">
                    Terms 
                    </a>
                </div>
            </div>

            {/*Bottom row */}
            <div className="mt-6 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} FarmDocs. All rights reserved
            </div>
        </footer>
    )
}