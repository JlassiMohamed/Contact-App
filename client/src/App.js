import './App.css';
import Add from './Pages/Add';
import Errors from './Pages/Errors';
import Home from './Pages/Home';

import {Switch, Route} from "react-router-dom"
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path={["/add", "/edit"]} component={Add} />
        <Route path="/*" component={Errors} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
