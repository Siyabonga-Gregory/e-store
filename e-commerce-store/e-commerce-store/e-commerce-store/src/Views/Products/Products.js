import React, { useEffect, useState } from 'react'
import ProductCard from '../ProductCard/ProductCard';
import ProductProvider from '../../providers/ProductsProvider';
import './Products.css';

export default function Products() {
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        ProductProvider.getAllProduct(allProducts, setAllProducts)
    }, [,]);

    return (<>
        <h1>Products</h1>
        <div className='products'>
            {
                allProducts.map((product, index) => {
                    return (<>
                        <div className='productDiv'>
                            <ProductCard props={product} />
                        </div>
                    </>)
                })
            }
        </div>
    </>)
}
