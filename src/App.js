import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from './screens/Home'
import ProjectDetails from './screens/ProjectDetails';

function App() {
  return (
    <Router>
          <div className="App">
            <Header />
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/project/:id" component={ProjectDetails} />
                </Switch>
            <Footer />
          </div>
        </Router>
  );
}

export default App;
