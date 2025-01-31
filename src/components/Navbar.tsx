import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, UserIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../contexts/ThemeContext';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import { Link, useLocation } from 'react-router-dom';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About us', href: '/about' },
  { name: 'Contact us', href: '/contact' }
];

export default function Navbar(): JSX.Element {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const { darkMode, setDarkMode } = useTheme();
  const location = useLocation();

  return (
    <header className="fixed w-full bg-white dark:bg-gray-900 transition-colors duration-200 z-40">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="text-xl font-bold dark:text-white">Your Logo</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-200"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`text-sm font-semibold leading-6 ${
                location.pathname === item.href
                  ? 'text-indigo-600 dark:text-indigo-400'
                  : 'text-gray-900 dark:text-gray-100'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            to="/login"
            className={`mr-4 rounded-lg p-2.5 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 ${
              location.pathname === '/login' ? 'text-indigo-600 dark:text-indigo-400' : ''
            }`}
          >
            <UserIcon className="h-5 w-5" />
          </Link>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="rounded-lg p-2.5 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            {darkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <Dialog
        as="div"
        className="lg:hidden relative z-50"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" aria-hidden="true" />

        <div className="fixed inset-0 flex">
          <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white dark:bg-gray-900 py-4 pb-6 shadow-xl">
            <div className="flex items-center justify-between px-4">
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="text-xl font-bold dark:text-white">Your Logo</span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <div className="mt-6 flow-root px-4">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-gray-100 dark:hover:bg-gray-800"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Link
                    to="/login"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-gray-100 dark:hover:bg-gray-800"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Sign in
                  </Link>
                </div>
                <div className="py-6">
                  <button
                    onClick={() => {
                      setDarkMode(!darkMode);
                      setMobileMenuOpen(false);
                    }}
                    className="flex w-full items-center gap-x-2 rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-gray-100 dark:hover:bg-gray-800"
                  >
                    {darkMode ? (
                      <>
                        <SunIcon className="h-5 w-5" /> Light Mode
                      </>
                    ) : (
                      <>
                        <MoonIcon className="h-5 w-5" /> Dark Mode
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </header>
  );
}
