"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Home, BookOpen, Info, Phone, Menu, X, User } from "lucide-react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function Navbar() {
  const supabase = createClientComponentClient();
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [session, setSession] = useState<any>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setLoading(false);
    });

    // Listen for auth changes
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
        setLoading(false);
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, [supabase]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setSession(null);
    setDropdownOpen(false);
    router.push("/signin"); // make sure this matches your actual auth page
  };

  return (
    <nav className="sticky top-0 z-50 bg-green-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">FarmDocs</div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-6 items-center">
          <Link href="/" className="flex items-center gap-1 hover:text-yellow-300">
            <Home size={18} /> Home
          </Link>
          <Link href="/about" className="flex items-center gap-1 hover:text-yellow-300">
            <Info size={18} /> About
          </Link>
          <Link href="/features" className="flex items-center gap-1 hover:text-yellow-300">
            <BookOpen size={18} /> Features
          </Link>
          <Link href="/contact" className="flex items-center gap-1 hover:text-yellow-300">
            <Phone size={18} /> Contact
          </Link>

          {/* User dropdown */}
          <div className="relative">
            {loading ? null : session ? (
              <>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-1 hover:text-yellow-300"
                >
                  <User size={20} />
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-white text-black rounded shadow-lg">
                    <div className="px-4 py-2 border-b font-semibold">
                      {session?.user?.email}
                    </div>
                    <Link
                      href="/profile"
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Profile
                    </Link>
                    <Link
                      href="/dashboard"
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={handleSignOut}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      Sign out
                    </button>
                  </div>
                )}
              </>
            ) : (
              <Link
                href="/signin"
                className="ml-4 flex items-center gap-1 hover:text-yellow-300"
              >
                <User size={20} /> Sign in
              </Link>
            )}
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-green-800 px-6 pb-4 flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-2 hover:text-yellow-300">
            <Home size={18} /> Home
          </Link>
          <Link href="/about" className="flex items-center gap-2 hover:text-yellow-300">
            <Info size={18} /> About
          </Link>
          <Link href="/features" className="flex items-center gap-2 hover:text-yellow-300">
            <BookOpen size={18} /> Features
          </Link>
          <Link href="/contact" className="flex items-center gap-2 hover:text-yellow-300">
            <Phone size={18} /> Contact
          </Link>

          {loading ? null : session ? (
            <>
              <Link
                href="/profile"
                className="flex items-center gap-2 hover:text-yellow-300"
              >
                <User size={18} /> Profile
              </Link>
              <Link
                href="/dashboard"
                className="flex items-center gap-2 hover:text-yellow-300"
              >
                <User size={18} /> Dashboard
              </Link>
              <button
                onClick={handleSignOut}
                className="flex items-center gap-2 hover:text-yellow-300 text-left"
              >
                <User size={18} /> Sign out
              </button>
            </>
          ) : (
            <Link
              href="/signin"
              className="flex items-center gap-2 hover:text-yellow-300"
            >
              <User size={18} /> Sign in
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
