import React, { useEffect, useState } from 'react';

import {Link} from "react-router-dom";
import {useSelector} from "react-redux";



const Customers = () =>{
  const customers = useSelector((state) => state.customer.customers );


    return (
        
         <div className="container " >
         <div className="p-3">
<table class=" table border shadow" >
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email Id</th>
      <th scope="col">Current Balance</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  
  <tbody>

      {
        customers.map(customer => (
    <tr>
      <th scope="row">{customer.id}</th>
      <td>{customer.name}</td>
      <td>{customer.email}</td>
      <td>{customer.balance}</td>
      <td className=' justify-content-center'><Link to={`/customers/transfer/${customer.id}`}><button  className="btn btn-dark">Transfer money</button></Link></td>
    </tr>

        ))
      }
  
  </tbody>
</table>
</div>
</div>

    );
};

export default Customers;
