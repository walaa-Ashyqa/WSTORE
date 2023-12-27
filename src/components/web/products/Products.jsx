import React from 'react'
 import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom'
import axios from "axios"
import '../categories/Categories.css';
function Products() {
  const pages=[1,2,3,4]
   const getAllProducts = async (page=1) => {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/products?page=${page}&limit=10`);
      console.log(data);
      return data.products;
  }
  const getProducts = async (page) => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/products?page=${page}&limit=10`);
    console.log(data);
    return data.products;
}
  const { data, isLoading } = useQuery('getAllProducts_details', getAllProducts)
  console.log(data)
  console.log(isLoading)
  if (isLoading) {
      return (
        <div className='container p-5'>
          <h3>All Products </h3>
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
            <h4 className='mb-5'>All Products </h4>
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
            <div className='row my-5'>
    <nav aria-label="Page navigation example ">
  <ul className="pagination justify-content-center">
    <li className="page-item disabled">
      <a className="page-link" href="#" tabIndex={-1} aria-disabled="true">Previous</a>
    </li>
    {pages.map((page)=>
        <li className="page-item"><a className="page-link" href="#" onClick={getAllProducts (page)}>{page}</a></li>

    )}
   
    <li className="page-item">
      <a className="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
</div>
        </div>
  )
}

export default Products