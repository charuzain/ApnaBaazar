import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../context/filter_context'

const Filters = () => {
  const {
    filters: {
      text,
      category,
      price,
      min_price,
      max_price
    },
    updateFilters,
    clearFilters,
    all_products
  } = useFilterContext()

  const getUniqueValues = (data, type) => {
    let unique = data.map((item) => item[type])
    // console.log(unique)
    return ['all', ...new Set(unique)]

  }
  const categories = getUniqueValues(all_products, 'category')
  // console.log(categories)
  return (
    <Wrapper>
      <div className='content'>
        <form onSubmit={(e) => e.preventDefault()}>

          <div className='form-control'>
            <input
              type='text'
              name='text'
              placeholder='search'
              className='search-input'
              value={text}
              onChange={updateFilters}
            />
          </div>
          <div className='form-control'>
            <h5>category</h5>
            <div>
              {categories.map((c, index) => {
                return (
                  <button
                    key={index}
                    onClick={updateFilters}
                    type='button'
                    name='category'
                    className={`${category === c ? 'active' : null
                      }`}
                  >
                    {c}
                  </button>
                )
              })}
            </div>
          </div>

          <div className='form-control'>
            <h5>price</h5>
            <p className='price'>${price}.00</p>
            <input
              type='range'
              name='price'
              min={min_price}
              max={max_price}
              onChange={updateFilters}
              value={price}
            />
          </div>

        </form>
        <button type='button' className='clear-btn' onClick={clearFilters}>
          {' '}
          clear filters
        </button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.1rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }
  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  .active {
    border-color: var(--clr-grey-5);
    
  }

 
  .price {
    margin-bottom: 0.25rem;
  }

  .clear-btn {
    background: green;
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`
export default Filters;