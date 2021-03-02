import React from 'react'
import Product from '../../components/Product'
import products from '../../products'
const Categories = (props) => {
  var categoryProduct = products.filter((product) =>
    product.category === props.match.params.category
  )
  //console.log(categoryProduct)
  return (
    <div>
      <div class='rowCard'>
        {categoryProduct.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Categories
