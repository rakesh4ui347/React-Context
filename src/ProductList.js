import React from 'react';
import Cars from './Cars';

const ProductList= () =>(
<div className="product-list">
    <h2>Product List :</h2>
    {/*Pass props twice */}
    <Cars />
    {/* Other potential product categories which we will skip for this demo */}
    {/*<Electronics /> */}
    {/*<Clothes /> */}
    {/*<Shoes /> */}
</div>
)

export default ProductList;