import { useState } from 'react';
import { Link } from 'react-router-dom';

interface LoginFormData {
  email: string;
  password: string;
  remember: boolean;
}

interface FormErrors {
  email?: string;
  password?: string;
}

const initialFormData: LoginFormData = {
  email: '',
  password: '',
  remember: false,
};

export default function LoginPage(): JSX.Element {
  const [formData, setFormData] = useState<LoginFormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'email':
        if (!value) return 'Please enter your email address';
        if (!/\S+@\S+\.\S+/.test(value)) return 'Please enter a valid email address';
        return '';
      case 'password':
        if (!value) return 'Please enter your password';
        if (value.length < 6) return 'Password must be at least 6 characters long';
        return '';
      default:
        return '';
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    
    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));

    if (type !== 'checkbox') {
      const error = validateField(name, value);
      setErrors((prev) => ({
        ...prev,
        [name]: error,
      }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>): void => {
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
      if (key !== 'remember') {
        const error = validateField(key, formData[key as keyof LoginFormData] as string);
        if (error) newErrors[key as keyof FormErrors] = error;
      }
    });

    setErrors(newErrors);
    setTouched({
      email: true,
      password: true,
    });

    if (Object.keys(newErrors).length === 0) {
      // Handle successful validation
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-white dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-300">
            Or{' '}
            <Link
              to="/contact"
              className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
            >
              contact us to get started
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit} noValidate>
          <div className="space-y-5">
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`relative block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ${
                  errors.email && touched.email
                    ? 'ring-red-300 focus:ring-red-500'
                    : 'ring-gray-300 focus:ring-indigo-600'
                } placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset dark:bg-gray-800 dark:text-white dark:ring-gray-700 dark:placeholder:text-gray-500 sm:text-sm sm:leading-10 p-5`}
                placeholder="Email address"
              />
              {errors.email && touched.email && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.email}</p>
              )}
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={formData.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`relative block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ${
                  errors.password && touched.password
                    ? 'ring-red-300 focus:ring-red-500'
                    : 'ring-gray-300 focus:ring-indigo-600'
                } placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset dark:bg-gray-800 dark:text-white dark:ring-gray-700 dark:placeholder:text-gray-500 sm:text-sm sm:leading-10 p-5`}
                placeholder="Password"
              />
              {errors.password && touched.password && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.password}</p>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember"
                name="remember"
                type="checkbox"
                checked={formData.remember}
                onChange={handleChange}
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 dark:border-gray-700 dark:bg-gray-800"
              />
              <label
                htmlFor="remember"
                className="ml-2 block text-sm text-gray-900 dark:text-gray-300"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 