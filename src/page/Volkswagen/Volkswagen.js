import React from 'react'
import '../../App.css';
import { Link,Routes, Route} from "react-router-dom";
import Carinfo from "../Carinfo"
export default function Volkswagen(props) {
  return (
    <div class="container mt-5">
    <div class="row">
                <div className='col'>  
                            <div className="card" style={{width: '18rem'}}>
                                <Link to="Volkswagen/Virtus">
                                    <img src="https://imgd.aeplcdn.com/664x374/n/cw/ec/101055/virtus-exterior-right-front-three-quarter.jpeg" className="card-img-top" alt="..." />
                                </Link>
                                    <div className="card-body">
                                    <h6 className="fs-2 text-dark">Virtus</h6>   <p>{props.brandname}</p>
                                </div>
                            </div>
                        </div>
                        <div className='col'>  
                            <div className="card" style={{width: '18rem'}}>
                                <Link to="Volkswagen/Polo">
                                    <img src="https://imgd.aeplcdn.com/664x374/n/cw/ec/29628/polo-exterior-right-front-three-quarter-2.jpeg" className="card-img-top" alt="..." />
                                </Link>
                                    <div className="card-body">
                                    <h6 className="fs-2 text-dark">Polo</h6>   <p>{props.brandname}</p>
                                </div>
                            </div>
                        </div>
                        <div className='col'>  
                            <div className="card" style={{width: '18rem'}}>
                                <Link to="Volkswagen/Taigun">
                                    <img src="https://imgd.aeplcdn.com/664x374/n/cw/ec/45057/taigun-exterior-right-front-three-quarter-2.jpeg" className="card-img-top" alt="..." />
                                </Link>
                                    <div className="card-body">
                                    <h6 className="fs-2 text-dark">Taigun</h6>   <p>{props.brandname}</p>
                                </div>
                            </div>
                        </div>
                        <div className='col'>  
                            <div className="card" style={{width: '18rem'}}>
                                <Link to="Volkswagen/Passat">
                                    <img src="https://imgd.aeplcdn.com/664x374/cw/ec/22548/Volkswagen-Passat-Headlamps-135233.jpg" className="card-img-top" alt="..." />
                                </Link>
                                    <div className="card-body">
                                    <h6 className="fs-2 text-dark">Passat</h6>   <p>{props.brandname}</p>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <Routes>
                                <Route path="Volkswagen/Virtus" element={<Carinfo fullname="Ford Motor Private Limited" name="Virtus" img="https://imgd.aeplcdn.com/664x374/n/cw/ec/101055/virtus-exterior-right-front-three-quarter.jpeg"/>}/>
                                <Route path="Volkswagen/Polo" element={<Carinfo fullname="Ford Motor Private Limited" name="Polo" img="https://imgd.aeplcdn.com/664x374/n/cw/ec/29628/polo-exterior-right-front-three-quarter-2.jpeg"/>}/>
                                <Route path="Volkswagen/Taigun" element={<Carinfo fullname="Ford Motor Private Limited" name="Taigun" img="https://imgd.aeplcdn.com/664x374/n/cw/ec/45057/taigun-exterior-right-front-three-quarter-2.jpeg"/>}/>
                                <Route path="Volkswagen/Passat" element={<Carinfo fullname="Ford Motor Private Limited" name="Passat" img="https://imgd.aeplcdn.com/664x374/cw/ec/22548/Volkswagen-Passat-Headlamps-135233.jpg"/>}/>
                            </Routes>
                        </div>
                </div>
            </div>

  )
}
