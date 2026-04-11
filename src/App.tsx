import NavBar from './components/NavBar';
import Profil from './components/Profil';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import CoolSeparator from './components/CoolSeparator';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Profil />
        <CoolSeparator />
        <Skills />
        <CoolSeparator />
        <Projects />
        <CoolSeparator />
        <ContactMe />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
