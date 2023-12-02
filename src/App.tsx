import About from "./Components/About/About";
import Agenda from "./Components/Agenda/Agenda";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Register from "./Components/Register/Register";
import Workshops from "./Components/WorkShops/Workshops";


function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Agenda/>
      <Workshops/>
      <Register/>
      <Footer/>
    </div>
  );
}

export default App;
