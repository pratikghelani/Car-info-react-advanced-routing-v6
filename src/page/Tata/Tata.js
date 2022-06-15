import React from 'react'
import '../../App.css';
import { Link,Outlet, Route} from "react-router-dom";
import Carinfo from "../Carinfo"

export default function Tata(props) {
  return (
        <div class="container mt-">
            <div class="row">
                    <div className='col'>  
                            <div className="card" style={{width: '18rem'}}>
                                <Link to="/Tata/Tiago">
                                    <img src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Tiago/7381/1617960171816/front-left-side-47.jpg" className="card-img-top" alt="..." />
                                </Link>
                                    <div className="card-body">
                                    <h6 className="fs-2 text-dark">Verito</h6>
                                    <p>{props.brandname}</p>
                                </div>
                            </div>
                        </div>

                        <div className='col'> 
                            <div className="card" style={{width: '18rem'}}>
                                <Link to="/Tata/Altroz">
                                    <img src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Altroz/8277/1648014589351/front-left-side-47.jpg" className="card-img-top" alt="..." />
                                </Link>
                                    <div className="card-body">
                                    <h6 className="fs-2 text-dark">Altroz</h6>
                                    <p>{props.brandname}</p>
                                </div>
                            </div>
                        </div>

                        <div className='col'>  
                            <div className="card" style={{width: '18rem'}}>
                                <Link to="/Tata/Nexon">
                                    <img src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Nexon/7384/1614326304397/front-left-side-47.jpg" className="card-img-top" alt="..." />
                                </Link>
                                    <div className="card-body">
                                    <h6 className="fs-2 text-dark">Nexon</h6>
                                    <p>{props.brandname}</p>
                                </div>
                            </div>
                        </div>

                        <div className='col'>  
                            <div className="card" style={{width: '18rem'}}>
                                <Link to="/Tata/Harrier">
                                    <img src="https://stimg.cardekho.com/images/car-images/930x620/Tata/Nexon/7749/1646813110826/226_foliage-green_657362.jpg" className="card-img-top" alt="..." />
                                </Link>
                                    <div className="card-body">
                                    <h6 className="fs-2 text-dark">Harrier</h6>
                                    <p>{props.brandname}</p>
                                </div>
                            </div>
                        </div>

                        <div className='row'>
                        <Outlet />
                            {/* <Routes>
                                <Route path="Tata/Tiago" element={<Carinfo  name="TATA Tiago" fullname="Tata Motors Limited" img="https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Tiago/7381/1617960171816/front-left-side-47.jpg"/>}/>
                                <Route path="Tata/Altroz" element={<Carinfo  name="TATA Altroz" fullname="Tata Motors Limited" img="https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Altroz/8277/1648014589351/front-left-side-47.jpg" />}/>
                                <Route path="Tata/Nexon" element={<Carinfo  name="TATA Nexon" fullname="Tata Motors Limited" img="https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Nexon/7384/1614326304397/front-left-side-47.jpg" />}/>
                                <Route path="Tata/Harrier" element={<Carinfo  name="TATA Harrier" fullname="Tata Motors Limited" img="https://stimg.cardekho.com/images/car-images/930x620/Tata/Nexon/7749/1646813110826/226_foliage-green_657362.jpg" />}/>
                            </Routes> */}
                        </div>
              </div>
        </div>

  )
}
