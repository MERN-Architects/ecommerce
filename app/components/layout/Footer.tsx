'use client'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-8 dark:border-gray-800 dark:bg-gray-900 sm:py-12">
      <div className="container">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold sm:text-xl">About Us</h3>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-300 sm:text-base">
              EcoShop is your one-stop destination for sustainable and eco-friendly
              products. We believe in quality, style, and environmental
              responsibility.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold sm:text-xl">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-600 hover:text-primary-600 dark:text-gray-300 sm:text-base"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-600 hover:text-primary-600 dark:text-gray-300 sm:text-base"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-sm text-gray-600 hover:text-primary-600 dark:text-gray-300 sm:text-base"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping"
                  className="text-sm text-gray-600 hover:text-primary-600 dark:text-gray-300 sm:text-base"
                >
                  Shipping Info
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold sm:text-xl">Categories</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/category/fashion"
                  className="text-sm text-gray-600 hover:text-primary-600 dark:text-gray-300 sm:text-base"
                >
                  Fashion
                </Link>
              </li>
              <li>
                <Link
                  href="/category/electronics"
                  className="text-sm text-gray-600 hover:text-primary-600 dark:text-gray-300 sm:text-base"
                >
                  Electronics
                </Link>
              </li>
              <li>
                <Link
                  href="/category/jewelry"
                  className="text-sm text-gray-600 hover:text-primary-600 dark:text-gray-300 sm:text-base"
                >
                  Jewelry
                </Link>
              </li>
              <li>
                <Link
                  href="/category/beauty"
                  className="text-sm text-gray-600 hover:text-primary-600 dark:text-gray-300 sm:text-base"
                >
                  Beauty
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold sm:text-xl">Newsletter</h3>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-300 sm:text-base">
              Subscribe to our newsletter for updates and exclusive offers.
            </p>
            <form className="mt-4">
              <div className="flex max-w-md flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-primary-600 focus:outline-none dark:border-gray-700 dark:bg-gray-800 sm:text-base"
                />
                <button
                  type="submit"
                  className="rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-primary-700 sm:text-base"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 text-center dark:border-gray-800 sm:mt-12 sm:pt-12">
          <p className="text-sm text-gray-600 dark:text-gray-300 sm:text-base">
            © {new Date().getFullYear()} EcoShop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 