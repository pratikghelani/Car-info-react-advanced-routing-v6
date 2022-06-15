import React from 'react'

export default function Carinfo(prop) {
  return (
    <>
      <div class="container mt-5 mb-5">
        <div class="row">


          <div className='col-3'>
            <div className="card" style={{ width: '18rem' }}>
              <img src={prop.img} className="card-img-top" alt="..." />
              <div className="card-body">
                <h6 className="fs-2 text-dark"> {prop.name}  <p>{prop.brandname}</p></h6>
              </div>
            </div>
          </div>

          <div className='col-9 '>
            <div className='card p-2'>
              <div className='text-center'><h3> {prop.name} ({prop.fullname})</h3></div>      
              <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">Variant</th>
                      <th scope="col">Engine</th>
                      <th scope="col">Fuel capacity</th>
                      <th scope="col">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>A1</td>
                       <th>2000CC</th>
                        <th>50 Liter</th>
                      <td>Rs 15L</td>
                    </tr>
                    <tr>
                      <td>A2</td>
                       <th>1500CC</th>
                        <th>45 Liter</th>
                      <td>Rs 13L</td>
                    </tr>
                    <tr>
                      <td>A3</td>
                       <th>1200CC</th>
                        <th>35 Liter</th>
                      <td>Rs 10L</td>
                    </tr>
                    <tr>
                   
                    </tr>
                  </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
