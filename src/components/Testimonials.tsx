import { StarIcon } from '@heroicons/react/20/solid';
import { useEffect, useRef, useState } from 'react';

// Custom hook for screen size detection
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is Tailwind's md breakpoint
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return isMobile;
}

const testimonials = [
  {
    name: 'Sarah Thompson',
    role: 'CEO at TechCorp',
    // Photo by Christina @ wocintechchat.com on Unsplash
    image: '/images/testimonials/sarah.jpg',
    quote: 'Working with this team transformed our business. Their innovative solutions helped us increase efficiency by 40%.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'CTO at InnovateTech',
    // Photo by Luke Chesser on Unsplash
    image: '/images/testimonials/michael.jpg',
    quote: 'The level of expertise and dedication they bring to each project is exceptional. Best technology partner we\'ve had.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Operations Director',
    // Photo by Amy Hirschi on Unsplash
    image: '/images/testimonials/emily.jpg',
    quote: 'Their solutions are not just innovative but also incredibly user-friendly. They\'ve helped us stay ahead of the curve.',
    rating: 5,
  },
  // Duplicate testimonials for continuous scroll effect
  {
    name: 'Sarah Thompson',
    role: 'CEO at TechCorp',
    image: '/images/testimonials/sarah.jpg',
    quote: 'Working with this team transformed our business. Their innovative solutions helped us increase efficiency by 40%.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'CTO at InnovateTech',
    image: '/images/testimonials/michael.jpg',
    quote: 'The level of expertise and dedication they bring to each project is exceptional. Best technology partner we\'ve had.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Operations Director',
    image: '/images/testimonials/emily.jpg',
    quote: 'Their solutions are not just innovative but also incredibly user-friendly. They\'ve helped us stay ahead of the curve.',
    rating: 5,
  },
];

export default function Testimonials(): JSX.Element {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const progressRef = useRef(0);
  const lastTimeRef = useRef<number | null>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    // Faster scroll on desktop, slower on mobile
    const duration = isMobile ? 30_000 : 10_000; // 30s mobile, 10s desktop

    function animate(currentTime: number) {
      if (!scrollContainer || isPaused) {
        lastTimeRef.current = null;
        animationFrameId = requestAnimationFrame(animate);
        return;
      }

      if (!lastTimeRef.current) {
        lastTimeRef.current = currentTime;
      }

      const deltaTime = currentTime - lastTimeRef.current;
      lastTimeRef.current = currentTime;

      // Update progress based on time elapsed
      progressRef.current = (progressRef.current + (deltaTime / duration)) % 1;
      
      const totalWidth = scrollContainer.scrollWidth - scrollContainer.clientWidth;
      scrollContainer.scrollLeft = progressRef.current * totalWidth;

      animationFrameId = requestAnimationFrame(animate);
    }

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isPaused, isMobile]); // Added isMobile to dependencies

  return (
    <div className="bg-white dark:bg-gray-900 py-24 sm:py-32 overflow-hidden">
      <div className="w-full">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Trusted by Industry Leaders
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
            See what our clients have to say about their experience working with us.
          </p>
        </div>
        <div 
          ref={scrollRef}
          className="mt-16 flex gap-8 overflow-hidden py-10"
          style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex gap-8 animate-scroll">
            {testimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.name}-${index}`}
                className="flex-none w-[350px] flex flex-col justify-between bg-white dark:bg-gray-800 p-6 shadow-lg rounded-xl"
              >
                <div>
                  <div className="flex gap-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                    ))}
                  </div>
                  <div className="mt-6 text-lg leading-7 text-gray-600 dark:text-gray-300">
                    "{testimonial.quote}"
                  </div>
                </div>
                <div className="mt-6 flex items-center gap-x-4">
                  <img
                    src={testimonial.image}
                    alt=""
                    className="h-12 w-12 rounded-full bg-gray-50 object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</div>
                    <div className="text-sm leading-6 text-gray-600 dark:text-gray-400">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 