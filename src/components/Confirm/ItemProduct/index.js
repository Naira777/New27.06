import React from "react";
import s from "./index.module.css";
import qty from "../../../assets/qty.png";
import close from "../../../assets/x.png";
import { NavLink, useNavigate } from "react-router-dom";





function ItemProduct() {

const navigate = useNavigate()


const handleClick = () => {


navigate('/')

}

  return (
 
          <div className={s.itembox}>
            <img src={`https://st2.depositphotos.com/1031343/5599/v/950/depositphotos_55990397-stock-illustration-top-product-stamp.jpg`} className={s.pic}/>
           <div className={s.titlebox}> <p className={s.title}>
            Ապրանքի անունը
</p></div>
<div className={s.qtyboxall}>
  
    <div className={s.qtybox} >

                <img src={qty}className={s.qty} />
                                   <p className={s.title}>
                      2
</p> 
  </div>
<div className={s.qtyboxall1}>
                       <p className={s.title}>
                       2000 ֏
</p> </div>
</div>
            <img src={close}className={s.close} />
            
             </div> 
             
            

   
  );
}

export default ItemProduct;