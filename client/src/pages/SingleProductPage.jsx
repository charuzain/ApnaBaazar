import React, { useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useProductsContext } from '../context/products_context'
import Loading from '../components/Loading';
import Error from '../components/Error';
import styled from 'styled-components'
import PageHero from '../components/PageHero';
import AddToCart from '../components/AddToCart';

export default function SingleProductPage() {
  const params = useParams()
  const id = params.id
  let navigate = useNavigate();
  const url = `http://localhost:3001/api/products/${id}`
  const { single_product_loading, single_product_error, single_product:product, fetchSingleProduct } = useProductsContext()
  
  useEffect(()=>{
    fetchSingleProduct(url)
    console.log(product)
  },[id])
 
  // Navigate back to home page if there is an error using navigate hook
  useEffect(() => {
    if (single_product_error){
     setTimeout(()=>{
       navigate("/products")
     },3000)
   }
   
  }, [single_product_error] )

  const {name, price, description ,id:productId,quantity,weight,image } = product
  return (
    
    <div>
      {single_product_loading && <Loading/>}
      {single_product_error && <Error/>}
      <Wrapper>
      <PageHero title ={name} product/>
      <div className="section section-center page">
        <Link to = "/products" className='btn'>
          Back
        </Link>
        <div className="products-center">
          <img src={image}/>
          <section className="content">
            <h2>{name}</h2>
            <h5 className="price">${price}.00</h5>
            <p className="desc">{description}</p>
              <p className="info">
                <span>Weight:</span>
              {weight}
              </p>
            <p className="info">
              <span>Available:</span>
              {quantity>0 ? "In stock" : "Out of Stock"}
            </p>
            <hr />
            {quantity > 0 && <AddToCart product={product}/>}
          </section>
        </div>
      
        </div> 

      </Wrapper>
    </div>
  )
}

const Wrapper = styled.main`
img{
   
    width:75%;
    height: 400 px
    display: block;
    object-fit: cover;
    border-radius: var(--radius);
}
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: green;
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }
  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`
