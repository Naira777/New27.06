import React from "react";
import s from "./index.module.css";
import qty from "../../assets/qty.png";
import close from "../../assets/x.png";
import { NavLink, useNavigate } from "react-router-dom";

import v_right from "../../assets/v_right.png";
import ItemProduct from "./ItemProduct";



function Confirm() {

const navigate = useNavigate()


const handleClick = () => {


navigate('/')

}

  return (
    <div className={s.contentDesktop}>
      <div className={s.leftside}>
           <p className={s.textpoqr}>Իմ զամբյուղը  <img src={v_right} className={s.vector} /> Հաստատում </p>
        <p className={s.header}>Խնդրում ենք հաստատել գնումը </p>
 <p className={s.text1}>Առաքման հասցե </p>
 <div className={s.hasce}>
  Կոմիտասի պող․ 50/5, Հարկ՝ 4, Մուտք՝ 4, Բն․/Տուն` 46

   </div>

    <div className={s.hasce}>
  Կոմիտասի պող․ 50/5, Հարկ՝ 4, Մուտք՝ 4, Բն․/Տուն` 46
   </div>


   <div className={s.hasce}>
  Կոմիտասի պող․ 50/5, Հարկ՝ 4, Մուտք՝ 4, Բն․/Տուն` 46
   </div>
  
  
   <div className={s.hasce}>
  Կոմիտասի պող․ 50/5, Հարկ՝ 4, Մուտք՝ 4, Բն․/Տուն` 46
   </div>
   <div className={s.boxline}>
   <div className={s.line}> </div>
<p className={s.textpoqr}> կամ </p>
 <div className={s.line}> </div>
</div>
<p className={s.textkapuyt}>
Ավելացնել մեկանգամյա հասցե
</p>
<div className={s.boxline}>
<p className={s.textkanach}>
Զամբյուղ
</p>
<button className={s.button}>
Հաստատել
</button>
</div>
</div>
      <div className={s.rightside}>
         <ItemProduct />
    </div>
    </div>
  );
}

export default Confirm;