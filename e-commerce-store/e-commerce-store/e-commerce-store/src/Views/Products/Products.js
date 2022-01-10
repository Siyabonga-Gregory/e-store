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
        <div>
            <h1>Products</h1>
            {
                allProducts.map((product, index) => {
                    return (<>
                        <div>
                            <ProductCard props={product} />
                        </div>
                    </>)
                })}
        </div>
    </>)
}
