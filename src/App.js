import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Content from './Content';
import Contact from './ContactMe';
import BlogDetail from './BlogDetail';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Content />
          </Route>
          <Route exact path="/contactme">
            <Contact />
          </Route>
          <Route exact path="/review/:id">
            <BlogDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
