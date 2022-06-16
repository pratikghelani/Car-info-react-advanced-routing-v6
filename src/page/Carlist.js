import React from 'react'
import '../App.css';
import { Link } from "react-router-dom";
import { Outlet} from "react-router-dom";

export default function Carlist() {
  return (
    <>
   <div class="container mt-5">
            <div class="row">
                        <div className='col'> <div className="card" style={{width: '18rem'}}>
                                <Link to="/Tata"><img src="https://stimg.cardekho.com/pwa/img/brandLogo_168x84/tata.jpg" className="card-img-top" alt="..." /></Link>
                                    <div className="card-body"><h6 className="fs-2 text-dark">Tata Motors Ltd</h6> 
                                    </div></div></div>

                        <div className='col'>  <div className="card" style={{width: '18rem'}}>  
                                <Link to="/Mahindra"> <img src="https://stimg.cardekho.com/pwa/img/brandLogo_168x84/mahindra.jpg" className="card-img-top" alt="..." /> </Link>
                                    <div className="card-body"> <h6 className="fs-2 text-dark">Mahindra  Ltd</h6>
                                    </div></div></div>

                        <div className='col'> <div className="card" style={{width: '18rem'}}>
                            <Link to="/Volkswagen"><img src="https://stimg.cardekho.com/pwa/img/brandLogo_168x84/volkswagen.jpg " className="card-img-top" alt="..." /> </Link>
                                    <div className="card-body">
                                        <h6 className="fs-2 text-dark">Volkswagen India</h6>
                                    </div></div></div>

                        <div className='col'> <div className="card" style={{width: '18rem'}}> 
                            <Link to="/Ford">
                                    <img src="https://www.carlogos.org/car-logos/ford-logo-1976.png" className="card-img-top" alt="..." /></Link>
                                    <div className="card-body">
                                        <h6 className="fs-2 text-dark">Ford India</h6>
                                    </div></div></div>
                    </div>
                    <div class="row mt-3"> 
                        <Outlet />
                    </div>
                </div>
    </>
  )
}
