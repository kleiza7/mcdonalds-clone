import './App.css';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import {Route} from "react-router-dom";
import Home from "./components/Home/Home";

function App() {
  return (
    <div>
      <NavBar />
      <Route exact path="/" component={() => <Home />} />
      <Footer />
    </div>
  );
}

export default App;
