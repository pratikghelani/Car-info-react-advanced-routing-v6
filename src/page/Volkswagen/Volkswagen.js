import React from 'react'
import '../../App.css';
import { Link,Outlet} from "react-router-dom";
export default function Volkswagen(props) {
  return (
    <div class="container mt-3">
    <div class="row">
                <div className='col'>  
                            <div className="card" style={{width: '18rem'}}>
                                <Link to="/Volkswagen/Virtus">
                                    <img src="https://imgd.aeplcdn.com/664x374/n/cw/ec/101055/virtus-exterior-right-front-three-quarter.jpeg" className="card-img-top" alt="..." />
                                </Link>
                                    <div className="card-body">
                                    <h6 className="fs-2 text-dark">Virtus</h6>   <p>{props.brandname}</p>
                                </div>
                            </div>
                        </div>
                        <div className='col'>  
                            <div className="card" style={{width: '18rem'}}>
                                <Link to="/Volkswagen/Polo">
                                    <img src="https://imgd.aeplcdn.com/664x374/n/cw/ec/29628/polo-exterior-right-front-three-quarter-2.jpeg" className="card-img-top" alt="..." />
                                </Link>
                                    <div className="card-body">
                                    <h6 className="fs-2 text-dark">Polo</h6>   <p>{props.brandname}</p>
                                </div>
                            </div>
                        </div>
                        <div className='col'>  
                            <div className="card" style={{width: '18rem'}}>
                                <Link to="/Volkswagen/Taigun">
                                    <img src="https://imgd.aeplcdn.com/664x374/n/cw/ec/45057/taigun-exterior-right-front-three-quarter-2.jpeg" className="card-img-top" alt="..." />
                                </Link>
                                    <div className="card-body">
                                    <h6 className="fs-2 text-dark">Taigun</h6>   <p>{props.brandname}</p>
                                </div>
                            </div>
                        </div>
                        <div className='col'>  
                            <div className="card" style={{width: '18rem'}}>
                                <Link to="/Volkswagen/Passat">
                                    <img src="https://imgd.aeplcdn.com/664x374/cw/ec/22548/Volkswagen-Passat-Headlamps-135233.jpg" className="card-img-top" alt="..." />
                                </Link>
                                    <div className="card-body">
                                    <h6 className="fs-2 text-dark">Passat</h6>   <p>{props.brandname}</p>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                        <Outlet />
                        </div>
                </div>
            </div>
  )
}
