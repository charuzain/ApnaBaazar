import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function PageHero({ title, product}) {
  return (
    <Wrapper>
    <div className="section-center">
    <Link to = '/'>Home</Link>{product && <Link to ="/products">/
    Products</Link>}/{title}
      </div >
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: #10b04a;
  width: 100%;
  min-height: 20vh;
  display: flex;
  align-items: center;
  color: var(--clr-primary-1);
  a {
    color: black;
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: black;
  }
`