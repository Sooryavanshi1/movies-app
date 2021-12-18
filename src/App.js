import './App.css';
import NavigationBar from './Components/NavigationBar';
import Banner from './Components/Banner';
import Movies from './Components/Movies';
import Favourites from './Components/Favourites';
import {BrowserRouter as Router,Switch,Route, BrowserRouter} from 'react-router-dom';
function App() {
  return (
    <>
    <Router>
      <NavigationBar/>
      <Switch>
      <Route path="/" exact render={(props)=>(
        <>
        <Banner {...props}/>
        <Movies {...props}/>
        </>
      )}/>
      <Route path="/Favourites" component={Favourites}/> 
      </Switch>
      {/* <Banner/>
      <Movies/> */}
      {/* <Favourites/> */}
      </Router>
    </>
  );
}

export default App;
