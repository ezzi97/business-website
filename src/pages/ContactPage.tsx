import { useState } from 'react';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  message?: string;
}

const initialFormData: ContactFormData = {
  firstName: '',
  lastName: '',
  email: '',
  message: '',
};

export default function ContactPage(): JSX.Element {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'firstName':
        if (!value.trim()) return 'First name is required';
        return '';
      case 'lastName':
        if (!value.trim()) return 'Last name is required';
        return '';
      case 'email':
        if (!value) return 'Email address is required';
        if (!/\S+@\S+\.\S+/.test(value)) return 'Please enter a valid email address';
        return '';
      case 'message':
        if (!value.trim()) return 'Please tell us how we can help you';
        if (value.length < 10) return 'Message should be at least 10 characters long';
        return '';
      default:
        return '';
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    const error = validateField(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name } = e.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors: FormErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key as keyof ContactFormData]);
      if (error) newErrors[key as keyof FormErrors] = error;
    });

    setErrors(newErrors);
    setTouched({
      firstName: true,
      lastName: true,
      email: true,
      message: true,
    });

    if (Object.keys(newErrors).length === 0) {
      // Handle successful validation
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Let&apos;s discuss how we can help transform your business.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="max-w-xl">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Get in touch
            </h3>
            <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
              We'd love to hear from you.
              <br />
              Our friendly team is always here to help.
            </p>
            <div className="mt-8 space-y-6">
              <div className="flex gap-x-4">
                <div className="flex-none">
                  <PhoneIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-gray-900 dark:text-white">Phone</h4>
                  <p className="mt-1 text-gray-600 dark:text-gray-300">+1 (555) 000-0000</p>
                </div>
              </div>
              <div className="flex gap-x-4">
                <div className="flex-none">
                  <EnvelopeIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-gray-900 dark:text-white">Email</h4>
                  <p className="mt-1 text-gray-600 dark:text-gray-300">contact@example.com</p>
                </div>
              </div>
              <div className="flex gap-x-4">
                <div className="flex-none">
                  <MapPinIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-gray-900 dark:text-white">Location</h4>
                  <p className="mt-1 text-gray-600 dark:text-gray-300">
                    123 Business Street<br />
                    San Francisco, CA 94105
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="max-w-xl" noValidate>
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white"
                >
                  First name
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ${
                    errors.firstName && touched.firstName
                      ? 'ring-red-300 focus:ring-red-500'
                      : 'ring-gray-300 focus:ring-indigo-600'
                  } placeholder:text-gray-400 focus:ring-2 focus:ring-inset dark:bg-gray-800 dark:text-white dark:ring-gray-700 dark:placeholder:text-gray-500 sm:text-sm sm:leading-6`}
                />
                {errors.firstName && touched.firstName && (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.firstName}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white"
                >
                  Last name
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ${
                    errors.lastName && touched.lastName
                      ? 'ring-red-300 focus:ring-red-500'
                      : 'ring-gray-300 focus:ring-indigo-600'
                  } placeholder:text-gray-400 focus:ring-2 focus:ring-inset dark:bg-gray-800 dark:text-white dark:ring-gray-700 dark:placeholder:text-gray-500 sm:text-sm sm:leading-6`}
                />
                {errors.lastName && touched.lastName && (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.lastName}</p>
                )}
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ${
                    errors.email && touched.email
                      ? 'ring-red-300 focus:ring-red-500'
                      : 'ring-gray-300 focus:ring-indigo-600'
                  } placeholder:text-gray-400 focus:ring-2 focus:ring-inset dark:bg-gray-800 dark:text-white dark:ring-gray-700 dark:placeholder:text-gray-500 sm:text-sm sm:leading-6`}
                />
                {errors.email && touched.email && (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.email}</p>
                )}
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ${
                    errors.message && touched.message
                      ? 'ring-red-300 focus:ring-red-500'
                      : 'ring-gray-300 focus:ring-indigo-600'
                  } placeholder:text-gray-400 focus:ring-2 focus:ring-inset dark:bg-gray-800 dark:text-white dark:ring-gray-700 dark:placeholder:text-gray-500 sm:text-sm sm:leading-6`}
                />
                {errors.message && touched.message && (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.message}</p>
                )}
              </div>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
