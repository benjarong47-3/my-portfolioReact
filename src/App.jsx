// src/App.jsx
import { useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';

import Header from './Header/Header';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';

import './styles/global.css'; // ถ้าไฟล์จริงอยู่ที่ src/styles/global.css

function App() {
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `html { scroll-padding-top: 80px; }`;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <main>
          <About />
          <Projects />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
