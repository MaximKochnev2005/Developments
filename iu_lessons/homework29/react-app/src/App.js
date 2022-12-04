import './App.css';
import {Header} from "./components/header/Header";
import {PageProduct} from "./components/page/PageProduct";
import {Footer} from "./components/footer/Footer";

function App() {
  return (
    <div >
        <body>
            <Header/>
            <PageProduct/>
        </body>
        <Footer/>
    </div>
  );
}

export default App;
