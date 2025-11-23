import Header from './components/Header';
import Hero from './sections/Hero';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Achievements from './sections/Achievements';
import Education from './sections/Education';
import Contact from './sections/Contact';
import Projects from './sections/Projects';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Achievements />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
