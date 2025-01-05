'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'

export function NavBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-white/80 backdrop-blur-sm">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <Link href="/" className="text-2xl font-bold">DSAI</Link>

        <div className="flex items-center space-x-8">
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
      </div>
    </nav>
  )
}
