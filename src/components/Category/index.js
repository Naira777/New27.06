import React, { useEffect } from "react";
import s from "./index.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getBread, getBreadandCakesAll, getCategories } from "../../redux/reducer";
import Item from "./Item/Item";
import vector from "../../assets/vector.png";
import { Link, useNavigate } from "react-router-dom";

function Category() {
  const categories = useSelector((state) => state.CategoryPage.categories);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getBreadandCakesAll());
    dispatch(getBread());
  }, []);

  const handleClick = () => {
    navigate("breadandcakes");
  };

  return (
    <div className={s.category}>
      <img src={vector} className={s.vector} />
      <div className={s.box}>
        <p className={s.text}>Բաժիններ</p>
        <p className={s.text1}>22 բաժին</p>
      </div>

      <div className={s.boxContent}>
        {categories.length > 0 &&
          categories.map((item, id) => {
            return (
              <div key={id}>
                <Item
                  text={item?.name}
                  url={item?.image?.url}
                  handleClick={handleClick}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Category;
