import Link from 'next/link'
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-8 sm:gap-0">
          {/* Left side - Institution info */}
          <div className="w-full sm:w-1/2 text-center sm:text-left">
            <h2 className="text-2xl font-bold text-foreground">DSAI Labs</h2>
            <p className="mt-4 text-muted-foreground">
              Department of Mathematics, Hasanuddin University, Makassar, Indonesia
            </p>
          </div>

          {/* Right side - Quick links */}
          <div className="w-full sm:w-1/2 flex flex-col items-center sm:items-end">
            <div className="text-center sm:text-right">
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-foreground">Connect</h3>
              <div className="flex space-x-4 justify-center sm:justify-end">
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <span className="sr-only">Facebook</span>
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <span className="sr-only">Twitter</span>
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <span className="sr-only">Instagram</span>
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <span className="sr-only">YouTube</span>
                  <Youtube className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} DSAI Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

