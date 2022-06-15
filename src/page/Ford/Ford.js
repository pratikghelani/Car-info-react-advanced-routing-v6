import React from 'react';
import '../../App.css';
import { Link,Outlet, Route} from "react-router-dom";
import Carinfo from "../Carinfo"
const Ford = (props) => {
    return (

        <div class="container mt-3">
            <div class="row">
                        <div className='col'>  
                            <div className="card" style={{width: '18rem'}}>
                                <Link to="/Ford/Figo">
                                    <img src="https://imgd.aeplcdn.com/664x374/n/cw/ec/35463/figo-exterior-right-front-three-quarter-151689.jpeg" className="card-img-top" alt="..." />
                                </Link>
                                    <div className="card-body">
                                    <h6 className="fs-2 text-dark">Figo</h6>   <p>{props.brandname}</p>
                                </div>
                            </div>
                        </div>
                        <div className='col'> 
                            <div className="card" style={{width: '18rem'}}>
                                <Link to="/Ford/Aspire">
                                    <img src="https://imgd.aeplcdn.com/272x153/n/cw/ec/35583/aspire-exterior-right-front-three-quarter-2.jpeg" className="card-img-top" alt="..." />
                                </Link>
                                    <div className="card-body">
                                    <h6 className="fs-2 text-dark">Aspire</h6>   <p>{props.brandname}</p>
                                </div>
                            </div>
                        </div>


                        <div className='col'> 
                            <div className="card" style={{width: '18rem'}}>
                                <Link to="/Ford/EcoSport">
                                    <img src="https://imgd.aeplcdn.com/664x374/n/cw/ec/40369/ecosport-exterior-left-front-three-quarter.jpeg" className="card-img-top" alt="..." />
                                </Link>
                                    <div className="card-body">
                                    <h6 className="fs-2 text-dark">EcoSport</h6>   <p>{props.brandname}</p>
                                </div>
                            </div>
                        </div>
                        <div className='col'> 
                            <div className="card" style={{width: '18rem'}}>
                                <Link to="/Ford/Freestyle">
                                    <img src="https://imgd.aeplcdn.com/664x374/n/cw/ec/32698/freestyle-exterior-right-front-three-quarter-2.jpeg" className="card-img-top" alt="..." />
                                </Link>
                                    <div className="card-body">
                                    <h6 className="fs-2 text-dark">Freestyle</h6>   <p>{props.brandname}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>

                    <Outlet />
                    {/* <Routes>
                        <Route path="Ford/Figo" element={<Carinfo  name="Figo"  fullname="Volkswagen India Private Limited"  img="https://imgd.aeplcdn.com/664x374/n/cw/ec/35463/figo-exterior-right-front-three-quarter-151689.jpeg" />}/>
                        <Route path="Ford/Aspire" element={<Carinfo  name="Aspire"  fullname="Volkswagen India Private Limited"  img="https://imgd.aeplcdn.com/272x153/n/cw/ec/35583/aspire-exterior-right-front-three-quarter-2.jpeg" />}/>
                        <Route path="Ford/EcoSport" element={<Carinfo  name="EcoSport"  fullname="Volkswagen India Private Limited"  img="https://imgd.aeplcdn.com/664x374/n/cw/ec/40369/ecosport-exterior-left-front-three-quarter.jpeg" />}/>
                        <Route path="Ford/Freestyle" element={<Carinfo  name="Freestyle"  fullname="Volkswagen India Private Limited"  img="https://imgd.aeplcdn.com/664x374/n/cw/ec/32698/freestyle-exterior-right-front-three-quarter-2.jpeg" />}/>
                    </Routes> */}
                        </div>
                </div>
    );
}

export default Ford;
