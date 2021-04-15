import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useHistory,useParams} from "react-router-dom";
import {updateCustomer,historyadd} from "../action";
import shortid from "shortid";
import './Transfer.css'



    const Transfer = () =>{
      const customers =useSelector(state => state.customer.customers);

      let {id} = useParams();
      let history=useHistory();
      const dispatch = useDispatch();

      const[amount,setamount]=useState("");
      const [mysender,setsender]=useState({});
      const[receiverlist,setreceiverlist]=useState([]);
      const[receiverid,setreceiverid]=useState({});
      const [myreceiver,setreceiver]=useState({});

      useEffect(() => {
        const selectedsender = customers.find(customer => customer.id === Number(id))
        setsender(selectedsender);
        const listReceiver = customers.filter(customer => customer.id !== Number(id))
        setreceiverlist(listReceiver); 
    }, [id, customers])

    useEffect(()=> {
      const selectedreceiver =customers.find(customer => customer.id ===Number(receiverid));
      setreceiver(selectedreceiver);
    },[receiverid,customers])


    const handleSubmit = (e) =>{
      if(Number(amount)===0)
      {
          alert("Oops!Zero value cannot be transfered");
      }
      else if(Number(amount)<0)
      {
          alert("Oops!Negative value cannot be transfered");
      }
      else if(Number(mysender?.balance) < Number(amount))
      {
          alert("Oops!current balance is very low")
      }
      else{
      const receiver = {
          id: myreceiver.id,
          name:myreceiver.name,
          username:myreceiver.username,
          email:myreceiver.email,
          balance:Number(myreceiver.balance)+ Number(amount)
      }
      const sender = Object.assign(
          mysender,{
          balance:Number(mysender?.balance)- Number(amount)}
      );
      const historydetails = {
          id:shortid.generate(),
          sender : mysender?.name,
          receiver: myreceiver?.name,
          amount: amount,
           date: new Date().toLocaleString(),
      } 
     
      
       dispatch(updateCustomer(sender));
       dispatch(updateCustomer(receiver));
       dispatch(historyadd(historydetails));
      
       alert("Successful Transaction of Rs." +amount);
       history.push("/customers");
    }}

    

    return (
      <div className="trans">
      <div className ='container'>
        <div className='py-15'>
    <div className="card border-0 shadow">
    <div className="card-body">
    <form>
    <div class="form-group">
    <label for="exampleFormControlSelect1">Sender:</label>
    <h5>{mysender.name}</h5>
    </div>

    <div class="form-group">
    <label for="exampleFormControlSelect1">Sender's Current Balance:</label>
    <h5>{mysender.balance}</h5>
    </div>
  
  <div class="form-group">
    <label for="exampleFormControlSelect1">Receiver:</label>
    <select class="form-control" id="exampleFormControlSelect1" onChange={(e) => setreceiverid(e.target.value)}>
    <option value="" disabled selected hidden>-Please Select receiver-</option>
    { receiverlist.map((rec) => ( 
      <option value={ rec.id} > {rec.name} </option>
                                   
    ))}
    </select>
  </div>
  
 <div class="form-group">
    <label for="exampleFormControlInput1">Transfer Amount:</label>
    <input type="text" class="form-control" id="exampleFormControlInput1" 
    placeholder="0" value={amount} onChange={(e) => setamount(e.target.value)}/>
  </div>

  <div class="form-group row">
    <div class="col-sm-10">
      <button  type="submit" class="btn btn-dark"  onClick={e=> handleSubmit(e)}>Transfer</button>
    </div>
  </div>
</form>
</div>
</div>
 </div>
      </div>
      </div>
    )
}

export default Transfer
