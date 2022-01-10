import React from 'react'
import "@material-ui/core/card";
import './ProductCard.css'
import product from "../../assets/images/phone.svg";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import ShoppingBagIcon from '@material-ui/icons/Shop';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Typography from '@material-ui/core/Typography';

export default function ProductCard(props) {
    console.log(props['props'].id);
    return (<>
        <div class="my-card__media mdc-card__media mdc-card__media--16-9"></div>
        <div class="my-card">
            <div className='card-image'>
                <img src={props['props'].image} />
            </div>
            <div class="card-actions">
                <ShoppingCartIcon className='Icon' />
                <ZoomInIcon className='Icon' />
                <ShoppingBagIcon className='Icon' />
                <FavoriteBorderIcon className='Icon' />
            </div> 
            <div className='price'>
                <h1>R{props['props'].price}</h1>
                <hr/>
            </div>
           
        </div>
    </>)
}
