import './App.css';
import {Header} from "./components/header/Header";
import {PageProduct} from "./components/page/PageProduct";
import {Footer} from "./components/footer/Footer";
import {Route, Routes} from "react-router-dom";
import {Home} from "./Home";

function App() {
  return (
    <div >
        <body>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path={"/product"} element={<PageProduct/>}/>
            </Routes>
        </body>
        <Footer/>
    </div>
  );
}

export default App;
