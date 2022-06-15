import './App.css';

import Tata from "./page/Tata/Tata.js"
import Mahindra from "./page/Mahindra/Mahindra.js"
import Volkswagen from "./page/Volkswagen/Volkswagen.js"
import Ford from "./page/Ford/Ford.js"
import Home from  './page/Home';
import Carlist from "./page/Carlist";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Carinfo from "./page/Carinfo";

function App() {
  return (
     <>
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home/>}/>
          </Routes>

          <Routes>
              <Route path="/carlist/*" element={<Carlist/>}/>
          </Routes>

          {/* <Routes>
              <Route path="/Tata/Tiago" element={<Carinfo  name="TATA Tiago" img="https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Tiago/7381/1617960171816/front-left-side-47.jpg"/>}/>
              <Route path="/Tata/Altroz" element={<Carinfo  name="TATA Altroz" img="https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Altroz/8277/1648014589351/front-left-side-47.jpg" />}/>
              <Route path="/Tata/Nexon" element={<Carinfo  name="TATA Nexon" img="https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Nexon/7384/1614326304397/front-left-side-47.jpg" />}/>
              <Route path="/Tata/Harrier" element={<Carinfo  name="TATA Harrier" img="https://stimg.cardekho.com/images/car-images/930x620/Tata/Nexon/7749/1646813110826/226_foliage-green_657362.jpg" />}/>
          </Routes> */}

        {/* 
          <Routes>
              <Route path="/Mahindra/Verito" element={<Carinfo  name="Verito" img="https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/E-Verito/3526/1603712637421/front-left-side-47.jpg"/>}/>
              <Route path="/Mahindra/Thar" element={<Carinfo  name  "Thar" img="https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/Thar/8076/1601635839903/front-left-side-47.jpg"/>}/>
              <Route path="/Mahindra/Bolero" element={<Carinfo  name="Bolero" img="https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/Bolero-Neo/8506/1626171866869/front-left-side-47.jpg"/>}/>
              <Route path="/Mahindra/SUV500" element={<Carinfo  name="SUV500" img="https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/XUV700/8620/1633939302512/front-left-side-47.jpg"/>}/>
          </Routes>

          <Routes>
              <Route path="/Volkswagen/Virtus" element={<Carinfo  name="Virtus" img="https://imgd.aeplcdn.com/664x374/n/cw/ec/101055/virtus-exterior-right-front-three-quarter.jpeg"/>}/>
              <Route path="/Volkswagen/Polo" element={<Carinfo  name="Polo" img="https://imgd.aeplcdn.com/664x374/n/cw/ec/29628/polo-exterior-right-front-three-quarter-2.jpeg"/>}/>
              <Route path="/Volkswagen/Taigun" element={<Carinfo  name="Taigun" img="https://imgd.aeplcdn.com/664x374/n/cw/ec/45057/taigun-exterior-right-front-three-quarter-2.jpeg"/>}/>
              <Route path="/Volkswagen/Passat" element={<Carinfo  name="Passat" img="https://imgd.aeplcdn.com/664x374/cw/ec/22548/Volkswagen-Passat-Headlamps-135233.jpg"/>}/>
          </Routes>

          <Routes>
              <Route path="/Ford/Figo" element={<Carinfo  name="Figo"  img="https://imgd.aeplcdn.com/664x374/n/cw/ec/35463/figo-exterior-right-front-three-quarter-151689.jpeg" />}/>
              <Route path="/Ford/Aspire" element={<Carinfo  name="Aspire"  img="https://imgd.aeplcdn.com/272x153/n/cw/ec/35583/aspire-exterior-right-front-three-quarter-2.jpeg" />}/>
              <Route path="/Ford/EcoSport" element={<Carinfo  name="EcoSport"  img="https://imgd.aeplcdn.com/664x374/n/cw/ec/40369/ecosport-exterior-left-front-three-quarter.jpeg" />}/>
              <Route path="/Ford/Freestyle" element={<Carinfo  name="Freestyle"  img="https://imgd.aeplcdn.com/664x374/n/cw/ec/32698/freestyle-exterior-right-front-three-quarter-2.jpeg" />}/>
          </Routes> */}

        </BrowserRouter>      
     </>
  );
}
export default App;
