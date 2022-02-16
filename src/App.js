import './App.css';
import  NewsList  from './components/NewsList'
import  FavorisHL  from './components/FavorisHL'

import  Navigation  from './components/Navigation'
import  Details  from './components/Details'
import  Search  from './components/Search'
import  Login  from './Login'
import  Logout  from './Logout'

import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./redux/reducers";

import { BrowserRouter as Router , Route, Routes } from "react-router-dom";

const store = createStore(reducer);

function App() {
  
  return (
    <Provider store={store}>    
    <Router>

    <div className="App">
<Navigation/>
<Routes>

<Route  path ="/" exact element = {<NewsList/>}/>
  <Route  path ="/login"  element = {<Login/>}/>
  <Route  path ="/logout"  element = {<Logout/>}/>
  <Route  path ="/FavorisHL"  element = {<FavorisHL/>}/>
  <Route  path ="/details/:url/:description"  element = {<Details/>}/>
  <Route  path ="/search"  element = {<Search/>}/>


  </Routes>
  </div>

</Router>
</Provider>

  );
}

export default App;
