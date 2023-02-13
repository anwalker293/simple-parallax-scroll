import img1 from "./images/bg1.jpeg";
import img2 from "./images/bg2.jpeg";
import img3 from "./images/bg3.jpeg";
import "./App.css";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function App() {
  return (
    <div className="App">
      <Parallax pages={4}>
        <ParallaxLayer
          speed={0.05}
          factor={1}
          style={{
            backgroundImage: `url(${img1})`,
            backgroundSize: "cover",
          }}
        >
          <h1>First layer</h1>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={1}>
          <h1>Second layer</h1>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
