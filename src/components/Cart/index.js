import React from "react";
import s from "./index.module.css";
import mycart from "../../assets/mycart.png";
import check from "../../assets/check.png";
import { NavLink, useNavigate } from "react-router-dom";
import ItemCart from "./ItemCart";
import cart from "../../assets/cart.png";



function Cart() {

const navigate = useNavigate()


const handleClick = () => {


navigate('/mycart/confirm')

}

  return (
    <div className={s.contentDesktop}>
         <p className={s.textpoqr}>Իմ զամբյուղը </p>
        <p className={s.header}>Իմ Զամբյուղը </p>
{false && <div className={s.box}>
      <img src={mycart} className={s.mycart} />

     <p className={s.text}> Հարգելի Անուն Ազգանուն, Ձեր զամբյուղը<br/> դեռևս դատարկ է </p>

   
    <button className={s.button} onClick={handleClick}>Կատարել գնումներ </button>
    
    </div>}
    <div className={s.links}>
    <NavLink
        to="/mycart"
        className={s.link}
        style={({ isActive }) => ({
          color: isActive ? "#fff" : "#545e6f",
          background: isActive ? "#3D9A85" : "#f0f0f0",
        })}
      >
       Սուպերմարկետ
      </NavLink>

      <NavLink
        to="/mycart/express"
        className={s.link}
        style={({ isActive }) => ({
          color: isActive ? "#fff" : "#545e6f",
          background: isActive ? "#3D9A85" : "#f0f0f0",
        })}
      >
     Էքսպրես
      </NavLink>
</div>
<div className={s.content}> 
<div className={s.boxpro1}>
  <div className={s.boxprodcount}>
<p className={s.prodcount}>3 ապրանք </p>
<div className={s.boxcheck}>
<p className={s.prodcount}>բոլորը </p>
<img src={check}  className={s.check}/>
</div>

</div>
     <ItemCart />
     <ItemCart />
     <ItemCart />
    </div>

    <div className={s.confirmbox}>
  
<div className={s.line1}>   
 <img src={cart}  className={s.cart}/>  
<p className={s.text}>Իմ Զամբյուղը </p> 

 </div>
<div className={s.boxprice}>
  <div className={s.box} >
<p className={s.prodcount}>Գին </p>
<p className={s.price}>1000 ֏  </p>
</div>

  <div className={s.box} >
<p className={s.prodcount}>Առաքում /Էքսպրես/ </p>
<p className={s.price}>1000 ֏ </p>

</div>

<div className={s.line2}></div>
</div>
<div className={s.box}> 
<p className={s.text1}>Ընդհանուր </p>
<p className={s.text1}>7000 ֏ </p>
</div>

<div className={s.box}> 
<p className={s.textkanach}>Հեռացնել </p>
<button className={s.button} onClick={handleClick}>Հաստատել </button>
</div>

</div>
</div>


    </div>
  );
}

export default Cart;