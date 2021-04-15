import React from 'react';
import { useSelector} from "react-redux";


function TransactionHistory() {

    const customers = useSelector(state => state.customer.history);
  
    return (
        <div className="container" >
         <div className="p-4">
    
    <table className="table border shadow">
      <thead className="thead-dark">
        <tr>
        <th scope="col"> Transaction Id</th>
          <th scope="col">Sender</th>
          <th scope="col">Receiver</th>
          <th scope="col">Amount</th>
          <th scope="col">Date</th>
        </tr>
      </thead>
      <tbody>
      
            {
               customers.map((transaction,index) => (
                <tr>
                <th scope="row" key={transaction.id}>{index+1}</th>
                  <td>{transaction.sender}</td>
                  <td>{transaction.receiver}</td>
                  <td>{transaction.amount}</td>
                  <td>{transaction.date}</td>
                </tr>
              ))
              }
              
        
      </tbody> 

    </table>
  </div>
  </div>
  
      
    )
}

export default TransactionHistory;
