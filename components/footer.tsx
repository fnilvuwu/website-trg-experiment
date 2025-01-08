import Link from 'next/link'
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Left side - Institution info */}
          <div className="w-full md:w-2/5">
            <h2 className="text-2xl font-bold">DSAI Labs</h2>
            <p className="mt-4 max-w-lg text-gray-600 dark:text-gray-400">
              Department of Mathematics, Hasanuddin University, Makassar, Indonesia
            </p>
          </div>

          {/* Right side - Quick links */}
          <div className="w-full md:w-2/5 flex flex-col items-end">
            <div className="text-right">
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Connect</h3>
              <div className="flex space-x-4 justify-end">
                <a href="#" className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white">
                  <span className="sr-only">YouTube</span>
                  <Youtube className="h-6 w-6" />
                </a>
              </div>
            </div>
            {/* Add other sections here */}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 border-t pt-8">
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} DSAI Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

