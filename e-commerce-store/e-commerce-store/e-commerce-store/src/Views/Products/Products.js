import React, { useEffect, useState, Suspense } from 'react'
import ProductProvider from '../../providers/ProductsProvider';
import './Products.css';
const ProductCard = React.lazy(() => import('../ProductCard/ProductCard'));


export default function Products() {
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        ProductProvider.getAllProduct(allProducts, setAllProducts)
    }, [,]);

    return (<>
        <h1>New Arrival</h1>
        <div className='products'>{
                allProducts.map((product, index) => {
                    return (<>
                        <div className='productDiv'>
                            <Suspense fallback={<h1>Loading...</h1>}>
                                <ProductCard props={product} />
                            </Suspense>
                        </div>
                    </>)
                })
            }
        </div>
    </>)
}
