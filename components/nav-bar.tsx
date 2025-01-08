'use client'

import { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import Link from 'next/link'

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
            <Link href="/" className="text-sm font-medium">
              HOME
            </Link>
          </div>
          <div className="flex items-center space-x-1">
            <Link href="/overview" className="text-sm font-medium">
              OVERVIEW
            </Link>
          </div>
          <div className="flex items-center space-x-1">
            <Link href="/team" className="text-sm font-medium">
              TEAM
            </Link>
          </div>
          <div className="relative flex items-center space-x-1 cursor-pointer" onClick={toggleDropdown}>
            <span className="text-sm font-medium">
              PUBLICATION
            </span>
            <ChevronDown className="h-4 w-4" />
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md">
                <Link href="/articles" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Articles
                </Link>
                <Link href="/books" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Books
                </Link>
                <Link href="/patents" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Patents
                </Link>
              </div>
            )}
          </div>
          <div className="flex items-center space-x-1">
            <Link href="/projects" className="text-sm font-medium">
              PROJECTS
            </Link>
          </div>
          <div className="flex items-center space-x-1">
            <Link href="/activities" className="text-sm font-medium">
              ACTIVITIES
            </Link>
          </div>
          <div className="flex items-center space-x-1">
            <Link href="/contact" className="text-sm font-medium">
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
        <div className="md:hidden mt-4 space-y-2">
          <Link href="/" className="block text-sm font-medium text-gray-700">
            HOME
          </Link>
          <Link href="/overview" className="block text-sm font-medium text-gray-700">
            OVERVIEW
          </Link>
          <Link href="/team" className="block text-sm font-medium text-gray-700">
            TEAM
          </Link>
          <div className="relative">
            <div className="flex items-center space-x-1 cursor-pointer" onClick={toggleDropdown}>
              <span className="text-sm font-medium text-gray-700">
                PUBLICATION
              </span>
              <ChevronDown className="h-4 w-4" />
            </div>
            {isDropdownOpen && (
              <div className="mt-2 w-48 bg-white shadow-lg rounded-md">
                <Link href="/articles" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Articles
                </Link>
                <Link href="/books" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Books
                </Link>
                <Link href="/patents" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Patents
                </Link>
              </div>
            )}
          </div>
          <Link href="/projects" className="block text-sm font-medium text-gray-700">
            PROJECTS
          </Link>
          <Link href="/activities" className="block text-sm font-medium text-gray-700">
            ACTIVITIES
          </Link>
          <Link href="/contact" className="block text-sm font-medium text-gray-700">
            CONTACT
          </Link>
        </div>
      )}
    </nav>
  )
}
