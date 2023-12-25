import React from 'react'
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom'
import axios from "axios"
import './Categories.css';
function CategoriesDetails() {
    const { categoryID } = useParams();
    const getCategoriesDetails = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/products/category/${categoryID}`);
        console.log(data);
        return data.products;
    }
    const { data, isLoading } = useQuery('categories_details', getCategoriesDetails)
    console.log(data)
    console.log(isLoading)
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
        <div className='container p-5 '>
            <h4 className='mb-5'>Category Details</h4>
            <div className='row'>
                {data ? data.map((product) =>
                    <div className='col-lg-4' key={product._id} >
                      
<Link to={`/product/${product._id}`}>
                        <div className="card1" >
                            <img src={product.mainImage.secure_url}  alt="Denim Jeans" style={{ width: '100%' }} />
                            <h5 className='p-2'>{product.name}</h5>
                            <p className="price1">{product.price}.0$</p>
                            <button >Add to Cart</button>
                        </div>
                        </Link>

                    </div>
                ) : '<h2>no product found</h2>'}
            </div>
        </div>
    )
}

export default CategoriesDetails