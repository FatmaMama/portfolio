import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from './screens/Home';
import ProjectDetails from './screens/ProjectDetails';
import Thank from './screens/Thank'

function App() {
  return (
    <Router>
          <div className="App">
            <Header />
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/project/:id" component={ProjectDetails} />
                  <Route exact path="/thank" component={Thank} />
                </Switch>
            <Footer />
          </div>
        </Router>
  );
}

export default App;
