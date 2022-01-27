import './App.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {Route} from "react-router-dom";

// Importing HOC
import DefaultHoc from './hoc/default.hoc';

// Importing pages
import homepage from './pages/homepage';

function App() {
  return (
    <>
      
        <DefaultHoc path="/" exact component={homepage} />
      
    </>
  );
}

export default App;
