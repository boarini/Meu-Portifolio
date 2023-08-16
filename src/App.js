import logo from './logo.svg';
import './App.css';
import Navbar from './componentes/sections/navbar'
import Presentation from './componentes/sections/presentation';
import Skills from './componentes/sections/skills';
import Projects from './componentes/sections/projects';
import Footer from './componentes/sections/footer';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Presentation></Presentation>
      <Skills></Skills>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  )
}

export default App;
