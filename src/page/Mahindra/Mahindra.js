import React from 'react'
import { Link,Routes, Route} from "react-router-dom";
import Carinfo from "../Carinfo"
import '../../App.css';
export default function Mahindra(props) {
  return (
    <div class="container mt-5">
    <div class="row">                        
                        <div className='col'>  
                            <div className="card" style={{width: '18rem'}}>
                                <Link to="Mahindra/Verito">
                                    <img src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/E-Verito/3526/1603712637421/front-left-side-47.jpg" className="card-img-top" alt="..." />
                                </Link>
                                    <div className="card-body">
                                    <h6 className="fs-2 text-dark">Verito</h6> <p>{props.brandname}</p>
                                </div>
                            </div>
                        </div>
                         
                        <div className='col'> 
                            <div className="card" style={{width: '18rem'}}>
                                <Link to="Mahindra/Thar">
                                    <img src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/Thar/8076/1601635839903/front-left-side-47.jpg" className="card-img-top" alt="..." />
                                </Link>
                                    <div className="card-body">
                                    <h6 className="fs-2 text-dark">Thar</h6> <p>{props.brandname}</p>
                                </div>
                            </div>
                        </div>

                        <div className='col'> 
                            <div className="card" style={{width: '18rem'}}>
                                <Link to="Mahindra/Bolero">
                                    <img src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/Bolero-Neo/8506/1626171866869/front-left-side-47.jpg" className="card-img-top" alt="..." />
                                </Link>
                                    <div className="card-body">
                                    <h6 className="fs-2 text-dark">Bolero</h6> <p>{props.brandname}</p>
                                </div>
                            </div>
                        </div>

                        <div className='col'> 
                            <div className="card" style={{width: '18rem'}}>
                                <Link to="Mahindra/SUV500">
                                    <img src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/XUV700/8620/1633939302512/front-left-side-47.jpg" className="card-img-top" alt="..." />
                                </Link>
                                    <div className="card-body">
                                    <h6 className="fs-2 text-dark">SUV500</h6> <p>{props.brandname}</p>
                                </div>
                            </div>
                        </div>

                        <div className='row'>
                            <Routes>
                            <Route path="Mahindra/Verito" element={<Carinfo fullname="Mahindra & Mahindra Limited"  name="Verito" img="https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/E-Verito/3526/1603712637421/front-left-side-47.jpg"/>}/>
                            <Route path="Mahindra/Thar" element={<Carinfo fullname="Mahindra & Mahindra Limited"  name="Thar" img="https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/Thar/8076/1601635839903/front-left-side-47.jpg"/>}/>
                            <Route path="Mahindra/Bolero" element={<Carinfo  fullname="Mahindra & Mahindra Limited" name="Bolero" img="https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/Bolero-Neo/8506/1626171866869/front-left-side-47.jpg"/>}/>
                            <Route path="Mahindra/SUV500" element={<Carinfo  fullname="Mahindra & Mahindra Limited" name="SUV500" img="https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/XUV700/8620/1633939302512/front-left-side-47.jpg"/>}/>
                        </Routes>
                        </div>
                    </div>

        </div>
  )
}
