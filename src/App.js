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
        <div>
          <Routes>
              <Route path="/" element={<Carlist/>}>
                    <Route path="/Tata" element={<Tata brandname="TATA"/>}>
                            <Route path="Tiago" element={<Carinfo  name="TATA Tiago" fullname="Tata Motors Limited" img="https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Tiago/7381/1617960171816/front-left-side-47.jpg"/>}/>
                            <Route path="Altroz" element={<Carinfo  name="TATA Altroz" fullname="Tata Motors Limited" img="https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Altroz/8277/1648014589351/front-left-side-47.jpg" />}/>
                            <Route path="Nexon" element={<Carinfo  name="TATA Nexon" fullname="Tata Motors Limited" img="https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Nexon/7384/1614326304397/front-left-side-47.jpg" />}/>
                            <Route path="Harrier" element={<Carinfo  name="TATA Harrier" fullname="Tata Motors Limited" img="https://stimg.cardekho.com/images/car-images/930x620/Tata/Nexon/7749/1646813110826/226_foliage-green_657362.jpg" />}/>
                    </Route>
                    <Route path="/Mahindra" element={<Mahindra brandname="Mahindra"/>}>
                            <Route path="Verito" element={<Carinfo fullname="Mahindra & Mahindra Limited"  name="Verito" img="https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/E-Verito/3526/1603712637421/front-left-side-47.jpg"/>}/>
                            <Route path="Thar" element={<Carinfo fullname="Mahindra & Mahindra Limited"  name="Thar" img="https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/Thar/8076/1601635839903/front-left-side-47.jpg"/>}/>
                            <Route path="Bolero" element={<Carinfo  fullname="Mahindra & Mahindra Limited" name="Bolero" img="https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/Bolero-Neo/8506/1626171866869/front-left-side-47.jpg"/>}/>
                            <Route path="SUV500" element={<Carinfo  fullname="Mahindra & Mahindra Limited" name="SUV500" img="https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/XUV700/8620/1633939302512/front-left-side-47.jpg"/>}/>
                    </Route>

                    <Route path="/Volkswagen" element={<Volkswagen brandname="Volkswagen"/>}>
                            <Route path="Virtus" element={<Carinfo fullname="Ford Motor Private Limited" name="Virtus" img="https://imgd.aeplcdn.com/664x374/n/cw/ec/101055/virtus-exterior-right-front-three-quarter.jpeg"/>}/>
                            <Route path="Polo" element={<Carinfo fullname="Ford Motor Private Limited" name="Polo" img="https://imgd.aeplcdn.com/664x374/n/cw/ec/29628/polo-exterior-right-front-three-quarter-2.jpeg"/>}/>
                            <Route path="Taigun" element={<Carinfo fullname="Ford Motor Private Limited" name="Taigun" img="https://imgd.aeplcdn.com/664x374/n/cw/ec/45057/taigun-exterior-right-front-three-quarter-2.jpeg"/>}/>
                            <Route path="Passat" element={<Carinfo fullname="Ford Motor Private Limited" name="Passat" img="https://imgd.aeplcdn.com/664x374/cw/ec/22548/Volkswagen-Passat-Headlamps-135233.jpg"/>}/>
                    </Route>

                    <Route path="/Ford" element={<Ford brandname="Ford"/>}>
                        <Route path="Figo" element={<Carinfo  name="Figo"  fullname="Volkswagen India Private Limited"  img="https://imgd.aeplcdn.com/664x374/n/cw/ec/35463/figo-exterior-right-front-three-quarter-151689.jpeg" />}/>
                        <Route path="Aspire" element={<Carinfo  name="Aspire"  fullname="Volkswagen India Private Limited"  img="https://imgd.aeplcdn.com/272x153/n/cw/ec/35583/aspire-exterior-right-front-three-quarter-2.jpeg" />}/>
                        <Route path="EcoSport" element={<Carinfo  name="EcoSport"  fullname="Volkswagen India Private Limited"  img="https://imgd.aeplcdn.com/664x374/n/cw/ec/40369/ecosport-exterior-left-front-three-quarter.jpeg" />}/>
                        <Route path="Freestyle" element={<Carinfo  name="Freestyle"  fullname="Volkswagen India Private Limited"  img="https://imgd.aeplcdn.com/664x374/n/cw/ec/32698/freestyle-exterior-right-front-three-quarter-2.jpeg" />}/>
                    </Route>

              </Route>
          </Routes>
        </div>
        
        </BrowserRouter>      
     </>
  );
}
export default App;
