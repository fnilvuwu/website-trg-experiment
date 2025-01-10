'use client'

import { ChevronDown, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export function NavBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-white/80 backdrop-blur-sm">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <Link href="/" className="text-2xl font-bold">DSAI Labs</Link>

        <div className="hidden md:flex items-center space-x-8">
          <div className="flex items-center space-x-1">
            <Link href="/" className="text-sm font-medium hover-effect">
              HOME
            </Link>
          </div>
          <div className="flex items-center space-x-1">
            <Link href="/overview" className="text-sm font-medium hover-effect">
              OVERVIEW
            </Link>
          </div>
          <div className="flex items-center space-x-1">
            <Link href="/team" className="text-sm font-medium hover-effect">
              TEAM
            </Link>
          </div>
          <div
            className="relative flex items-center space-x-1 cursor-pointer"
            onClick={toggleDropdown}
          >
            <span className="text-sm font-medium">
              PUBLICATION
            </span>
            <ChevronDown className="h-4 w-4" />
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 ps-2 pe-4 bg-white rounded-md">
                <Link href="/articles" className="bloc my-2 text-sm font-medium hover-effect">
                  ARTICLES
                </Link>
                <Link href="/books" className="block my-2 text-sm font-medium hover-effect">
                  BOOKS
                </Link>
                <Link href="/patents" className="block my-2 text-sm font-medium hover-effect">
                  PATENTS
                </Link>
              </div>
            )}
          </div>
          <div className="flex items-center space-x-1">
            <Link href="/projects" className="text-sm font-medium hover-effect">
              PROJECTS
            </Link>
          </div>
          <div className="flex items-center space-x-1">
            <Link href="/activities" className="text-sm font-medium hover-effect">
              ACTIVITIES
            </Link>
          </div>
          <div className="flex items-center space-x-1">
            <Link href="/contact" className="text-sm font-medium hover-effect">
              CONTACT
            </Link>
          </div>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="navbar-mobile md:hidden">
          <Link href="/" className="block text-sm font-medium text-gray-700">HOME</Link>
          <Link href="/overview" className="block text-sm font-medium text-gray-700">OVERVIEW</Link>
          <Link href="/team" className="block text-sm font-medium text-gray-700">TEAM</Link>
          <Link href="/articles" className="block text-sm font-medium text-gray-700">ARTICLES</Link>
          <Link href="/books" className="block text-sm font-medium text-gray-700">BOOKS</Link>
          <Link href="/patents" className="block text-sm font-medium text-gray-700">PATENTS</Link>
          <Link href="/projects" className="block text-sm font-medium text-gray-700">PROJECTS</Link>
          <Link href="/activities" className="block text-sm font-medium text-gray-700">ACTIVITIES</Link>
          <Link href="/contact" className="block text-sm font-medium text-gray-700">CONTACT</Link>
        </div>
      )}

    </nav>
  )
}
