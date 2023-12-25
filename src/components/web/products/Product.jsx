import React, { useContext } from 'react'
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom'
import axios from "axios"
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus ,faStar} from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../cart/CartContextProvider';

   function Product() {
    const { productID } = useParams();
    const {addToCartContext}= useContext(CartContext)
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
                    <input type="number" id="quantity" name="quantity" min={1} max={99} defaultValue={1} /><br /><br />
                    <button onClick={()=>addToCart(data._id)} className="btn btn-warning px-4"> <FontAwesomeIcon icon={faCartPlus} /> Add to Cart</button>
                    <p />
                </div>
            </div>
          
       

        </div>


    )
}

export default Product