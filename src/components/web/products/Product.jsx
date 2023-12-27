import React, { useContext, useState } from 'react'
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom'
import axios from "axios"
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus ,faStar,faLocationDot} from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../cart/CartContextProvider';
import './Product.css'
   function Product() {
    const { productID } = useParams();
    const[quntiy,setQuntiy]=useState(1)
    const {addToCartContext,Increaseqty,Decreaseqty}= useContext(CartContext)
    const getProduct = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/products/${productID}`);
        console.log(data.product);
        return data.product;
    }
    const { data, isLoading } = useQuery('getproduct_details', getProduct)
    console.log(data)
    console.log(isLoading)


    const addToCart= async (productId)=>{
      const res = await addToCartContext(productId);
      console.log(res)
    } 

    const changQty=async()=>{
      var x = document.getElementById("quantity");
        console.log(x.value)
        if(quntiy>x.value){
          const res = await Decreaseqty(productID);
          console.log(res)
        }else if(quntiy<x.value){
          const res = await Increaseqty(productID);
          console.log(res)
        }
        setQuntiy(x.value);
    }
    if (isLoading) {
        return (
          <div className='container p-5'>
            <h3>Category Details</h3>
            <div className="row py-4">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        )
      }
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-lg-5 p-5 ">
                <Carousel fade className='w-100'>
      <Carousel.Item >
      <Image src={data.mainImage.secure_url} width={450}  />
      </Carousel.Item>
      <Carousel.Item>
      <Image src={data.subImages[0].secure_url} width={450}   />
      </Carousel.Item>
      <Carousel.Item>
      <Image src={data.subImages[1].secure_url} width={450} />
     
      </Carousel.Item>
    </Carousel>
                </div>
                <div className="col-lg-6 p-5 ">
                     <h3 className="text-dark">{data.name}</h3>
                    <h1 className="text-secondary">${data.price}</h1>
                    <p className="py-2">{data.description}
                    </p><div className="mb-4">
                        <span className="text-warning"> <FontAwesomeIcon icon={faStar} /></span>
                        <span className="text-warning"> <FontAwesomeIcon icon={faStar} /></span>
                        <span className="text-warning"> <FontAwesomeIcon icon={faStar} /></span>
                        <span className="text-warning"> <FontAwesomeIcon icon={faStar} /></span>
                        <span className="text-dark"> <FontAwesomeIcon icon={faStar} /></span>
                    </div>
                    <label htmlFor="quantity">Quantity:</label>
                    <input type="number" id="quantity" name="quantity" min={1} max={99} defaultValue={1} onChange={()=>changQty()} /><br /><br />
                    <button onClick={()=>addToCart(data._id)} className="btn btn-warning px-4"> <FontAwesomeIcon icon={faCartPlus} /> Add to Cart</button>
                    <p />
                </div>
            </div>
          
        <div className="container">
  <div id="reviews" className="review-section">
    <div className="d-flex align-items-center justify-content-between mb-4">
      <h4 className="m-0">{data.reviews.length} Reviews</h4>
      <select className="custom-select custom-select-sm border-0 shadow-sm ml-2 select2-hidden-accessible" data-select2-id={1} tabIndex={-1} aria-hidden="true">
        <option data-select2-id={3}>Most Relevant</option>
        <option>Most Recent</option>
      </select>
      <span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id={2} style={{width: 188}}>
        <span className="selection">
          <span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={0} aria-labelledby="select2-qd66-container">
            <span className="select2-selection__rendered" id="select2-qd66-container" role="textbox" aria-readonly="true" title="Most Relevant">Most Relevant</span>
            <span className="select2-selection__arrow" role="presentation"><b role="presentation" /></span>
          </span>
        </span>
        <span className="dropdown-wrapper" aria-hidden="true" />
      </span>
    </div>
    <div className="row">
      <div className="col-md-6">
        <table className="stars-counters">
          <tbody>
            <tr className>
              <td>
                <span>
                  <button className="fit-button fit-button-color-blue fit-button-fill-ghost fit-button-size-medium stars-filter">5 Stars</button>
                </span>
              </td>
              <td className="progress-bar-container">
                <div className="fit-progressbar fit-progressbar-bar star-progress-bar">
                  <div className="fit-progressbar-background">
                    <span className="progress-fill" style={{width: '97.2973%'}} />
                  </div>
                </div>
              </td>
              <td className="star-num">(36)</td>
            </tr>
            <tr className>
              <td>
                <span>
                  <button className="fit-button fit-button-color-blue fit-button-fill-ghost fit-button-size-medium stars-filter">5 Stars</button>
                </span>
              </td>
              <td className="progress-bar-container">
                <div className="fit-progressbar fit-progressbar-bar star-progress-bar">
                  <div className="fit-progressbar-background">
                    <span className="progress-fill" style={{width: '2.2973%'}} />
                  </div>
                </div>
              </td>
              <td className="star-num">(2)</td>
            </tr>
            <tr className>
              <td>
                <span>
                  <button className="fit-button fit-button-color-blue fit-button-fill-ghost fit-button-size-medium stars-filter">5 Stars</button>
                </span>
              </td>
              <td className="progress-bar-container">
                <div className="fit-progressbar fit-progressbar-bar star-progress-bar">
                  <div className="fit-progressbar-background">
                    <span className="progress-fill" style={{width: 0}} />
                  </div>
                </div>
              </td>
              <td className="star-num">(0)</td>
            </tr>
            <tr className>
              <td>
                <span>
                  <button className="fit-button fit-button-color-blue fit-button-fill-ghost fit-button-size-medium stars-filter">5 Stars</button>
                </span>
              </td>
              <td className="progress-bar-container">
                <div className="fit-progressbar fit-progressbar-bar star-progress-bar">
                  <div className="fit-progressbar-background">
                    <span className="progress-fill" style={{width: 0}} />
                  </div>
                </div>
              </td>
              <td className="star-num">(0)</td>
            </tr>
            <tr className>
              <td>
                <span>
                  <button className="fit-button fit-button-color-blue fit-button-fill-ghost fit-button-size-medium stars-filter">5 Stars</button>
                </span>
              </td>
              <td className="progress-bar-container">
                <div className="fit-progressbar fit-progressbar-bar star-progress-bar">
                  <div className="fit-progressbar-background">
                    <span className="progress-fill" style={{width: 0}} />
                  </div>
                </div>
              </td>
              <td className="star-num">(0)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="col-md-6">
        <div className="ranking">
          <h6 className="text-display-7">Rating Breakdown</h6>
          <ul>
            <li>
              Seller communication level<span>5<span className="review-star rate-10 show-one" /></span>
            </li>
            <li>
              Recommend to a friend<span>5<span className="review-star rate-10 show-one" /></span>
            </li>
            <li>
              Service as described<span>4.9<span className="review-star rate-10 show-one" /></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div className="review-list">
    <ul>
     
      {data.reviews ? data.reviews.map((review) =>
                  <li key={review._id}>
                      <div className="d-flex">
                   <div className="left">
                     <span>
                       <img src={review.createdBy.image.secure_url} className="profile-pict-img img-fluid" alt />
                     </span>
                   </div>
                   <div className="right">
                     <h4>
                       {review.createdBy.userName}
                       <span className="gig-rating text-body-2">
                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width={15} height={15}>
                           <path fill="currentColor" d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z" />
                         </svg>
                         {review.rating}.0
                       </span>
                     </h4>
                     <div className="country d-flex align-items-center">
                       <span>

                       <FontAwesomeIcon icon={faLocationDot} size="xs" /> 

                       </span>
                       
                       <div className="country-name font-accent">{review.createdBy.address}</div>
                     </div>
                     <div className="review-description">
                       <p>
                         {review.comment}
                       </p>
                     </div>
                     <span className="publish py-3 d-inline-block w-100">Published 4 weeks ago</span>
                  
                   
                   </div>
                 </div>
               </li>
                ) : '<h2>we Dont have any review</h2>'}
       
    </ul>
  </div>
</div>


        </div>


    )
}

export default Product