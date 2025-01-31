import { motion } from 'framer-motion';

export default function Hero(): JSX.Element {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative bg-white dark:bg-gray-900"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              Transform Your Business with Modern Solutions
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              We help businesses grow by providing innovative solutions that drive results. Our
              expertise in digital transformation helps you stay ahead of the competition.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/contact"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a
                href="/about"
                className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-300"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
