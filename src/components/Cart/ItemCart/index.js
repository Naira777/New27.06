import React from "react";
import s from "./index.module.css";
import x from "../../../assets/x.png";
import { useNavigate } from "react-router-dom";
import check from "../../../assets/check.png";



function ItemCart({url, price, prevPrice, title, qty}) {

const navigate = useNavigate()


  return (
    <div className={s.contentDesktop}>
   <div className={s.box1}>
     <img src={'https://cdn11.bigcommerce.com/s-uy53d3ztch/images/stencil/1280x1280/products/131/397/Product_Photos__83442.1625177189.jpg?c=1'}
      className={s.pic} />
<div className={s.boxPrice}>
      <div className={s.header}> Ապրանքի անունը</div>
 <div className={s.price}> 1հատ/<span className={s.pricespanline}>250֏ </span> <span  className={s.pricespan}>200֏</span></div>
    </div> </div>
<div className={s.boxqtyAll}>
{false && <span className={s.karmirtext}>Պահեստում առկա չէ </span>}
{true && <><button className={s.buttonqty}>-</button>
<span className={s.tooltiptext}>Պահեստում առկա է 10</span>
<div className={s.qty}>1</div>

<button className={s.buttonqty}>+</button>
</>}
</div>
    
   <div className={s.priceqty}>400֏</div>
   
   
<div  className={s.boxclose}>
<img src={x}  className={s.close}/>
  <img src={check}  className={s.check}/>

</div>

    </div>
  );
}

export default ItemCart;