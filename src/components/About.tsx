import { BuildingOffice2Icon, UserGroupIcon, TrophyIcon } from '@heroicons/react/24/outline';

const stats = [
  { name: 'Years of Experience', value: '10+' },
  { name: 'Satisfied Clients', value: '500+' },
  { name: 'Projects Completed', value: '1000+' },
];

const values = [
  {
    name: 'Customer-Centric',
    description: 'We put our customers first, ensuring their success is our top priority.',
    icon: UserGroupIcon,
  },
  {
    name: 'Innovation',
    description: 'Constantly evolving and adapting to deliver cutting-edge solutions.',
    icon: BuildingOffice2Icon,
  },
  {
    name: 'Excellence',
    description: 'Committed to delivering the highest quality in everything we do.',
    icon: TrophyIcon,
  },
];

export default function About(): JSX.Element {
  return (
    <div className="bg-white dark:bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              About Us
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              We are a team of passionate professionals dedicated to delivering innovative solutions
              that help businesses thrive in the digital age. Our commitment to excellence and
              cutting-edge technology ensures that we provide the best possible solutions for
              our clients.
            </p>
          </div>
          <div className="lg:ml-auto lg:pt-4 lg:pl-4">
            <div className="relative aspect-[4/3] w-full rounded-xl bg-gray-50 dark:bg-gray-800 overflow-hidden shadow-xl">
              <img
                // Photo by Annie Spratt on Unsplash
                src="/images/about/office.jpg"
                alt="Modern office space"
                className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-2xl lg:mx-0 lg:max-w-none">
          <dl className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse">
                <dt className="text-base leading-7 text-gray-600 dark:text-gray-300">{stat.name}</dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-white">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Values */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {values.map((value) => (
              <div key={value.name} className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <value.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {value.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                  <p className="flex-auto">{value.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Call to Action */}
        <div className="mx-auto mt-16 max-w-2xl text-center">
          <p className="text-lg leading-8 text-gray-600 dark:text-gray-300">
            Ready to transform your business? Let&apos;s work together to create solutions that
            drive real results.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/contact"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
