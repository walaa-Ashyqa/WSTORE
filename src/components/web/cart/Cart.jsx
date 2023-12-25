import React, { useContext } from 'react'
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faXmark } from '@fortawesome/free-solid-svg-icons'
import { CartContext } from './CartContextProvider';
import { useQuery } from 'react-query';
function Cart() {
    const {getCartContext,removeCartItem}=useContext(CartContext);
 let totalPrice=0
let Subtotal=0
const discount =.2
    const getCart = async () => {
        const  res = await getCartContext();
        console.log(res);
        return res;
    }
    const removeItem = async (productId) => {
        const  res = await removeCartItem(productId);
        console.log(res);
        if(res.massage=='success'){
            toast.success('Remove Item Done', {
              position: "top-left",
              autoClose: false,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              });
        return res;
    }}
    const { data, isLoading } = useQuery('getCart_details', getCart)
    console.log(data)
    console.log(isLoading)
    data?.products?.map((product)=>{
        Subtotal += product.details.price*product.quantity;
        totalPrice=Subtotal-Subtotal*discount;
        console.log(Subtotal)
        console.log(totalPrice)
    }
   
    )
    if (isLoading) {
        return (
          <div className='container p-5'>
            <h3>Shopping cart</h3>
            <div className="row py-4">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        )
      }
  return (
   <section className="h-100  h-custom" style={{backgroundColor: '#eee'}}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col">
        <div className="card">
          <div className="card-body p-4">
            <div className="row">
              <div className="col-lg-7">
                <h5 className="mb-3"><a href="#!" className="text-body"><i className="fas fa-long-arrow-alt-left me-2" />Continue shopping</a></h5>
                <hr />
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div>
                    <p className="mb-1">Shopping cart</p>
                    <p className="mb-0">You have {data?.count} items in your cart</p>
                  </div>
                  <div>
                    <p className="mb-0"><span className="text-muted">Sort by:</span> <a href="#!" className="text-body">price <i className="fas fa-angle-down mt-1" /></a></p>
                  </div>
                </div>
{data?.products?(data.products.map((product)=>
    <div className="card mb-3 " key={product.productId}>
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex flex-row align-items-center">
                        <div>
                          <img src={product.details.mainImage.secure_url  } className="img-fluid rounded-3" alt="Shopping item" style={{width: 65}} />
                        </div>
                        <div className="ms-3 px-2">
                          <p>{product.details.name }</p>
                         </div>
                      </div>
                      <div className="d-flex flex-row align-items-center">
                        <div style={{width: 50}}>
                          <h5 className="fw-normal mb-0">{product.quantity}</h5>
                        </div>
                        <div style={{width: 80}}>
                          <h5 className="mb-0">${product.details.price }</h5>
                        </div>
                        <a href="#!" style={{color: '#cecece'}} onClick={()=>removeItem(product.productId)}><FontAwesomeIcon icon={faTrash} /></a>
                      </div>
                    </div>
                  </div>
                </div>
)):<h2 className='p-5 m-5'>Its Empty Cart</h2>

}
                
               
              </div>
              <div className="col-lg-5">
                <div className="card bg-dark text-white rounded-3">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <h5 className="mb-0">Card details</h5>
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp" className="img-fluid rounded-3" style={{width: 45}} alt="Avatar" />
                    </div>
                    <p className="small mb-2">Card type</p>
                    <a href="#!" type="submit" className="text-white"><i className="fab fa-cc-mastercard fa-2x me-2" /></a>
                    <a href="#!" type="submit" className="text-white"><i className="fab fa-cc-visa fa-2x me-2" /></a>
                    <a href="#!" type="submit" className="text-white"><i className="fab fa-cc-amex fa-2x me-2" /></a>
                    <a href="#!" type="submit" className="text-white"><i className="fab fa-cc-paypal fa-2x" /></a>
                    <form className="mt-4">
                      <div className="form-outline form-white mb-4">
                        <input type="text" id="typeName" className="form-control form-control-lg" siez={17} placeholder="Cardholder's Name" />
                        <label className="form-label" htmlFor="typeName">Cardholder's Name</label>
                      </div>
                      <div className="form-outline form-white mb-4">
                        <input type="text" id="typeText" className="form-control form-control-lg" siez={17} placeholder="1234 5678 9012 3457" minLength={19} maxLength={19} />
                        <label className="form-label" htmlFor="typeText">Card Number</label>
                      </div>
                      <div className="row mb-4">
                        <div className="col-md-6">
                          <div className="form-outline form-white">
                            <input type="text" id="typeExp" className="form-control form-control-lg" placeholder="MM/YYYY" size={7} minLength={7} maxLength={7} />
                            <label className="form-label" htmlFor="typeExp">Expiration</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-outline form-white">
                            <input type="password" id="typeText" className="form-control form-control-lg" placeholder="●●●" size={1} minLength={3} maxLength={3} />
                            <label className="form-label" htmlFor="typeText">Cvv</label>
                          </div>
                        </div>
                      </div>
                    </form>
                    <hr className="my-4" />
                    <div className="d-flex justify-content-between">
                      <p className="mb-2">Subtotal</p>
                      <p className="mb-2">${Subtotal}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="mb-2">Discount</p>
                      <p className="mb-2">{discount*100}%</p>
                    </div>
                    <div className="d-flex justify-content-between mb-4">
                      <p className="mb-2">Total(Incl. taxes)</p>
                      <p className="mb-2">${totalPrice}</p>
                    </div>
                    <button type="button" className="btn btn-warning btn-block btn-lg">
                      <div className="d-flex justify-content-between">
                         
                        <span>Checkout <i className="fas fa-long-arrow-alt-right ms-2" /></span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    
    
    
  )
}

export default Cart