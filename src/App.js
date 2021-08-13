import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './components/Home';
import Question from './components/Question';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/home" component={Home}></Route>
          <Route path="/question" component={Question}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
