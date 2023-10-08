import './index.css';
import HomePage from "./pages/HomePage/HomePage";
import SignInPage from "./pages/SignInPage/SignInPage";
import PartnersPage from "./pages/PartnersPage/PartnersPage";
import HelpPage from "./pages/HelpPage/HelpPage";
import RentalPage from "./pages/RentalPage/RentalPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import FcPage from "./pages/ForeClosurePage/FcPage";
import SubmitRequestPage from "./pages/SubmitRequestPage/SubmitRequestPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import BlogPage from "./pages/BlogPage/BlogPage";

function App() {
  return (
      <BrowserRouter>
        <div className="app" >
            <Routes >

                <Route path={`/`} element={<HomePage/>}/>
                <Route path={`/signIn`} element={<SignInPage/>} />
                <Route path={`/rental`} element={<RentalPage/>} />
                <Route path={`/partners`} element={<PartnersPage/>} />
                <Route path={`/help`} element={<HelpPage/>} />
                <Route path={`/foreClosure`} element={<FcPage/>} />
                <Route path={`/submitRequest`} element={<SubmitRequestPage/>} />
                <Route path={`/about`} element={<AboutPage/>} />
                <Route path={`/learn`} element={<BlogPage/>} />
            </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
