import './app.css';
import Home from './components/home/home';
import Watch from './components/watch';
import { Route, Switch } from 'react-router-dom';
// import Navbar from './components/navbar';
import NotFound from './components/notFound';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/watch" component={Watch} />
        <Route component={NotFound}></Route>
      </Switch>
    </>
  );
}

export default App;
