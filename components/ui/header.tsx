import Link from 'next/link';
import MobileMenu from './mobile-menu';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
              <Image
                src="/images/logov2.png" // Replace this with the actual image path in the public folder
                alt="Cruip"
                width={150}
                height={150}
              />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="/signup"
                  className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3"
                >
                  Log In
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="btn-sm text-white bg-gray-700 hover:bg-gray-800 ml-3"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
