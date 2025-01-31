import {
  ChartBarIcon,
  CursorArrowRaysIcon,
  ShieldCheckIcon,
  ArrowPathIcon,
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const features = [
  {
    name: 'Analytics',
    description:
      'Get detailed insights into your business performance with our advanced analytics tools.',
    icon: ChartBarIcon,
  },
  {
    name: 'Optimization',
    description: 'Optimize your operations with data-driven decisions and automated workflows.',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'Security',
    description: 'Enterprise-grade security to protect your valuable business data.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Integration',
    description: 'Seamlessly integrate with your existing tools and workflows.',
    icon: ArrowPathIcon,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Features(): JSX.Element {
  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="bg-white dark:bg-gray-900 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">
            Faster Growth
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Everything you need to scale your business
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Our comprehensive suite of business solutions helps you focus on what matters most -
            growing your business.
          </p>
        </div>
        <motion.div 
          variants={containerVariants}
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <motion.div 
                key={feature.name}
                variants={itemVariants}
                className="flex flex-col"
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                  <feature.icon
                    className="h-5 w-5 flex-none text-indigo-600 dark:text-indigo-400"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </motion.div>
  );
}
