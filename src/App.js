import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from './screens/Home'

function App() {
  return (
    <Router>
          <div className="App">
            <Header />
            <div className="container pt-5" >
                <Switch>
                  <Route exact path="/" component={Home} />
                </Switch>
            </div>
            <Footer />
          </div>
        </Router>
  );
}

export default App;
