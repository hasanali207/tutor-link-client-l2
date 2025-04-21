'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { Button } from '../ui/button';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'All Tutors', href: '#' },
    { label: 'About Us', href: '#' },
    { label: 'Faq', href: '#' },
  ];


  const linkClasses = (href: string) =>
    `text-lg font-bold transition ${
      pathname === href
        ? 'text-blue-600 underline underline-offset-4'
        : 'text-gray-700 hover:text-blue-600'
    }`;

  return (  
    <nav
      className='fixed top-0 z-50 w-full shadow-sm  transition-all duration-300'
    >
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold">
          TUTORLINK
        </Link>

        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={linkClasses(link.href)}>
              {link.label}
            </Link>
          ))}
          <Link
            href="/login"
            
          >
            <Button>Login</Button>
          </Link>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white px-4 py-4 border-t shadow-md">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={linkClasses(link.href)}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
            >
              <Button>Login</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
