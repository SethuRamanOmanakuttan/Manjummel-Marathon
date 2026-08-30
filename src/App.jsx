import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Marquee from './components/Marquee';
import RaceDistances from './components/RaceDistances';
import CauseSection from './components/CauseSection';
import EventDate from './components/EventDate';
import RegisterCTA from './components/RegisterCTA';
import Footer from './components/Footer';
import useScrollReveal from './hooks/useScrollReveal';

export default function App() {
  useScrollReveal();

  return (
    <div id="app" style={{ backgroundColor: '#071321' }}>
      <Navbar />

      <main id="main-content">
        <Hero />
        <Intro />
        <Marquee />
        <RaceDistances />
        <CauseSection />
        <EventDate />
        <RegisterCTA />
      </main>

      <Footer />
    </div>
  );
}
