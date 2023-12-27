import React, { useContext } from 'react'
import { OrderContext } from '../context/Orders';
import { useQuery } from 'react-query';

function UserContact() {
    let {order,getOrderContext}=useContext(OrderContext);
    console.log("UserContact",order);
    const getorder = async () => {
        const {data} = await getOrderContext();
        console.log("getorder",data);
        return data;
    }
    const { orderData,isLoading } = useQuery('getorder_details', getorder)
    console.log("orderData",orderData);
if(isLoading){
    return(<div className="row py-4">
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>)
}
 
  return (

    <div className="col-md-8">
    <div className="tab-content profile-tab" id="myTabContent">
      <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">

          {/* {order.forEach(element => {
           (<div className="row">
           <div className="col-md-4">
             <p>{element.adress}/{element.phone}</p>
           </div>
           <div className="col-md-4">
             <p>{element.status}</p>
           </div>
           <div className="col-md-4">
             <p>{element.finalPrice} </p>
           </div>
         </div>)
          })} */}
          
          <div className="row">
          <div className="col-md-3">
            <label>Order#</label>
          </div>
          <div className="col-md-3">
            <p>Info</p>
          </div>
          <div className="col-md-3">
            <p>Status</p>
          </div>
          <div className="col-md-3">
            <p>Price</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <label>Order</label>
          </div>
          <div className="col-md-3">
            <p>{order[0].address}/ {order[0].phoneNumber}</p>
          </div>
          <div className="col-md-3">
            <p>{order[0].status}</p>
          </div>
          <div className="col-md-3">
            <p>{order[0].finalPrice}</p>
          </div>
        </div>
    
      </div>
      
    </div>
  </div>

   )
}

export default UserContact