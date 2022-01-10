import React from 'react'
import "@material-ui/core/card";
import './ProductCard.css'
import product from "../../assets/images/phone.svg";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import ShoppingBagIcon from '@material-ui/icons/Shop';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

export default function ProductCard() {
    return (<>
    <div class="my-card__media mdc-card__media mdc-card__media--16-9"></div>
        <div class="my-card">
          <div className='card-image'>
               <img src={product}/>
          </div>
          <div class="card-actions">
                 <ShoppingCartIcon className='Icon'/>
                 <ZoomInIcon className='Icon'/>
                 <ShoppingBagIcon className='Icon'/>
                 <FavoriteBorderIcon className='Icon'/>
            </div>
        </div>
    </>)
}
