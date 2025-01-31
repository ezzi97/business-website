import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Partners from '../components/Partners';
import PageTransition from '../components/PageTransition';

export default function HomePage(): JSX.Element {
  return (
    <PageTransition>
      <Hero />
      <Features />
      <Testimonials />
      <Partners />
    </PageTransition>
  );
}
