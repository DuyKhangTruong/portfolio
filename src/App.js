import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Skills } from './components/Skills';
import { ExpProjects } from './components/ExpProjects';
import { Contacts } from './components/Contacts';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <ExpProjects />
      <Contacts />
    </div>
  );
}

export default App;
