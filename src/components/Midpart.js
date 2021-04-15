import React from 'react';
import './Midpart.css'
import {Link} from "react-router-dom";

function Midpart() {
    return (
      
      <div class="mid">
      <table className="ab">
          <tr>
              <td>
              <div className="imm">
              <img  className="enter" src="https://cdn2.iconfinder.com/data/icons/user-23/512/User_Customers.png" />
              
    
              </div>
              </td>
              <td>
              <div className="imm">
              <img  className="enter" src="https://img.etimg.com/thumb/width-640,height-480,imgsize-28918,resizemode-1,msid-64230667/wealth/invest/how-to-do-mutual-fund-transactions-using-upi/mobile-transaction-thinksto.jpg" />
              
              </div>
              </td>
          </tr>
          <tr className="myrow">
              <td>
              
             <Link to={"/customers"}><button class="btn btn-dark">View Customers</button></Link> 
    
             
              </td>
              <td>
             
             <Link to={'/transactionhistory'}> <button class="btn btn-dark">View History</button></Link>
    
              
              </td>
          </tr>
      </table>

      
      
  </div>
    )
}

export default Midpart
