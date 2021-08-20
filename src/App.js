import GlobalStyle from "./components/global_style";
import { Route,Switch,useLocation } from "react-router-dom";
import AboutMePage from "./pages/about_me";
import ContactUs from "./pages/contact_me";
import NavBar from "./components/nav_bar";
import { AnimatePresence } from "framer-motion";
function App() {
   const location=useLocation();
console.log(location)
  return (
    <div className="App"> 
      <GlobalStyle/>
       <NavBar/>
       <AnimatePresence exitBeforeEnter>     
      <Switch location={location} key={location.pathname} >
        <Route path="/" exact>  
        <AboutMePage/>  
       </Route>
       <Route path="/contactme">     
        <ContactUs/>  
       </Route>
     </Switch>
     </AnimatePresence>
    </div>
  );
}

export default App;
