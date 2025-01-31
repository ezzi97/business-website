import { motion } from 'framer-motion';

const partners = [
  {
    name: 'Company One',
    logo: {
      light: 'https://placehold.co/158x48/4f46e5/ffffff?text=Partner+1&font=inter',
      dark: 'https://placehold.co/158x48/6366f1/ffffff?text=Partner+1&font=inter'
    }
  },
  {
    name: 'Company Two',
    logo: {
      light: 'https://placehold.co/158x48/4f46e5/ffffff?text=Partner+2&font=inter',
      dark: 'https://placehold.co/158x48/6366f1/ffffff?text=Partner+2&font=inter'
    }
  },
  {
    name: 'Company Three',
    logo: {
      light: 'https://placehold.co/158x48/4f46e5/ffffff?text=Partner+3&font=inter',
      dark: 'https://placehold.co/158x48/6366f1/ffffff?text=Partner+3&font=inter'
    }
  },
  {
    name: 'Company Four',
    logo: {
      light: 'https://placehold.co/158x48/4f46e5/ffffff?text=Partner+4&font=inter',
      dark: 'https://placehold.co/158x48/6366f1/ffffff?text=Partner+4&font=inter'
    }
  },
  {
    name: 'Company Five',
    logo: {
      light: 'https://placehold.co/158x48/4f46e5/ffffff?text=Partner+5&font=inter',
      dark: 'https://placehold.co/158x48/6366f1/ffffff?text=Partner+5&font=inter'
    }
  },
];

export default function Partners(): JSX.Element {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-900 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Trusted by Global Leaders
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
            We partner with industry leaders to deliver cutting-edge solutions.
          </p>
        </motion.div>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-3 sm:gap-x-10 sm:gap-y-14 lg:max-w-4xl lg:grid-cols-5">
          {partners.map((partner, index) => (
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              key={partner.name}
              className="col-span-1 h-12 w-full object-contain transition-opacity duration-300"
              src={partner.logo.light}
              srcSet={`${partner.logo.light} light, ${partner.logo.dark} dark`}
              alt={partner.name}
              width={158}
              height={48}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
} 