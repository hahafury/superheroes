import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Superheroes from './pages/Superheroes/Superheroes';
import HeroForm from './components/HeroForm/HeroForm';
import HeroInfo from './components/HeroInfo/HeroInfo'


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Superheroes} />
        <Route exact path="/createHero" component={HeroForm} />
        <Route exact path="/superheroForm" component={HeroForm} />
        <Route exact path="/superhero/:superheroId" component={HeroInfo} />
      </Switch>
    </Router>
  );
}

export default App;
