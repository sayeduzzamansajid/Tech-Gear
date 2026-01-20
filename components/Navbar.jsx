'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { isAuthenticated, logout } from '@/lib/auth-client';

export default function Navbar() {
    const pathname = usePathname();
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        checkAuth();
    }, [pathname]);

    const checkAuth = async () => {
        const auth = await isAuthenticated();
        setAuthenticated(auth);
    };

    const handleLogout = () => {
        logout();
        setAuthenticated(false);
    };

    return (
        <nav className="bg-gradient-to-r from-black to-blue-900 shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center space-x-2">
                            <span className="text-2xl font-bold text-">Tech-Gear</span>
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/items" className={`text-white${pathname === '/items' ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'} transition-colors`}> Products </Link>
                        <Link
                            href="/about"
                            className={`text-white${pathname === '/items' ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'
                                } transition-colors`}
                        >
                            About us
                        </Link>
                        <Link href="/contact" className={`text-white${pathname === '/items' ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'} transition-colors`}> Contact </Link>
                        <Link href="/blog" className={`text-white${pathname === '/items' ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'} transition-colors`}> Blog </Link>



                        <Link href="/faq" className={`text-white${pathname === '/items' ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'} transition-colors`}> FAQ </Link>


                    </div>
                    <div><div>
                        {authenticated && (
                            <Link
                                href="/add-item"
                                className={` text-white${pathname === '/add-item' ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'
                                    } transition-colors`}
                            >
                                Add Item
                            </Link>
                        )}
                        {authenticated ? (
                            <button
                                onClick={handleLogout}
                                className="text-white hover:text-blue-600 transition-colors"
                            >
                                Logout
                            </button>
                        ) : (
                            <Link
                                href="/login"
                                className={`text-white${pathname === '/login' ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'
                                    } transition-colors`}
                            >
                                Login
                            </Link>
                        )}
                    </div></div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button className="text-gray-700 hover:text-blue-600">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
