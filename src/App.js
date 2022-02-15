import './App.css';
import  NewsList  from './components/NewsList'
import  Navigation  from './components/Navigation'
import  Details  from './components/Details'
import  Search  from './components/Search'


import { BrowserRouter as Router , Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>

    <div className="App">
<Navigation/>
<Routes>
  <Route  path ="/" exact element = {<NewsList/>}/>
  <Route  path ="/details/:url/:description"  element = {<Details/>}/>
  <Route  path ="/search"  element = {<Search/>}/>


  </Routes>
  </div>

</Router>

  );
}

export default App;
