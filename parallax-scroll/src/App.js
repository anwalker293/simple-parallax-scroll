import { Parallax } from "react-parallax";
import img1 from "./images/bg1.jpeg";
import img2 from "./images/bg2.jpeg";
import img3 from "./images/bg3.jpeg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Parallax strength={300} blur={{ min: -15, max: 15 }} bgImage={img1}>
        <div className="content">
          <div className="text-content">Parallax</div>
        </div>
      </Parallax>

      <Parallax strength={300} blur={{ min: -15, max: 15 }} bgImage={img2}>
        <div className="content">
          <div className="text-content">Parallax</div>
        </div>
      </Parallax>

      <Parallax strength={300} blur={{ min: -15, max: 15 }} bgImage={img3}>
        <div className="content">
          <div className="text-content">Parallax</div>
        </div>
      </Parallax>
    </div>
  );
}

export default App;
