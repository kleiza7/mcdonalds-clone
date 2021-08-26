import './App.css';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import {Route} from "react-router-dom";
import Home from "./components/Home/Home";
import Page1 from './components/Page1/Page1';
import Page2 from './components/Page2/Page2';
import Page3 from './components/Page3/Page3';
import Page4 from './components/Page4/Page4';

function App() {
  return (
    <div>
      <NavBar />
      <Route exact path="/" component={() => <Home />} />
      <Route exact path="/mcdonalds-lezzetleri" component={() => <Page1 />} />
      <Route exact path="/kampanyalar" component={() => <Page2 />} />
      <Route exact path="/hakkimizda" component={() => <Page3 />} />
      <Route exact path="/mcdonaldsin-sirri" component={() => <Page4 />} />
      <Footer />
    </div>
  );
}

export default App;
