import { BrowserRouter } from "react-router-dom";
import {About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, Starscanvas } from './components';
const App = () => {

  return (
    <BrowserRouter className= "relative z-0 bg-primary">

    <div>
      <div className="bg-hero-pattern bg-cover-bg-no-repeat bg-center">

      </div>
    </div>
    </BrowserRouter>
  )
}

export default App