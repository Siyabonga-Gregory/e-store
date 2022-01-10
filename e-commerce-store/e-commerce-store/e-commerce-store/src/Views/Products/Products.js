import React,{useEffect,useState} from 'react'
import ProductCard from '../ProductCard/ProductCard';
import ProductProvider from '../../providers/ProductsProvider';

export default function Products() {
    const [allProducts,setAllProducts]=useState([]);
   
    useEffect(() => {
        ProductProvider.getAllProduct(allProducts,setAllProducts)
      }, [,]);

    return (<>
        <div>
            <h1>Products</h1>
            {
                allProducts.map((product,index) => {
                    return (
                        <table key={index}>
                            <tbody>
                                <tr>
                                    <td> Item </td>
                                    <td> 
                                    <table>
                                            <tbody>
                                                <tr >
                                                        <td>
                                                            <pre className='pre'> 
                                                                <br/><span className="title">Title : </span><span className="content">{product.title} </span>
                                                                <br/><span className="heading">price : </span><span className="content">{product.price} </span> 
                                                                <br/><span className="heading">description :</span><span className="content">{product.description}</span>
                                                                <br/><span className='heading'>category : </span><span className="content">{product.category}</span>
                                                                <br/><span className='heading'>image : </span><span className="content"><img src= {product.image} /></span>
                                                                <br/><span className='heading'>Rating Rate : </span><span className="content">{product['rating'].rate}</span>
                                                                <br/><span className='heading'>Rating Count : </span><span className="content">{product['rating'].count}</span>

                                                            </pre>
                                                        </td>
                                                    </tr>
                                            </tbody>
                                        </table> 

                                    </td>
                                </tr>
                        </tbody>
                    </table>
                )
                })}
        </div>
    </>)
}
