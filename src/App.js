import GlobalStyle from "./components/global_style";
import { BrowserRouter,Route,Switch } from "react-router-dom";
import AboutMePage from "./pages/about_me";
import ContactUs from "./pages/contact_me";
import NavBar from "./components/nav_bar";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <GlobalStyle/>
      <NavBar/>
      <Switch>
        <Route path="/" exact>     
        <AboutMePage/>  
       </Route>
       <Route path="/contactme" exact>     
        <ContactUs/>  
       </Route>
     </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
