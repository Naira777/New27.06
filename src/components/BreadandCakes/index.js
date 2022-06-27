import React, {
  useEffect,
  useRef,
  useState,
  useLayoutEffect
} from "react";
import s from "./index.module.css";
import { useDispatch, useSelector } from "react-redux";
import vector from "../../assets/vector.png";
import Item from "./Item/index";
import { getBread, getBreadandCakesAll } from "../../redux/reducer";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import BreadMenu from "./BreadMenu/index";
import Pagination from "./Pagination";

function BreadandCakes() {
  
  const breadandcakes = useSelector(
    (state) => state.CategoryPage.breadandcakes
  );
  const bread = useSelector((state) => state.CategoryPage.bread);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { filtertype } = useParams();
  const [arrayBread, setArrayBread] = useState([]);
  const [arrayAll, setArrayAll] = useState([]);
  const refArray = useRef([]);
  const [page, setPage] = useState(1);


  useEffect(() => {
    const getPageItems = (page) => {
      setArrayAll(breadandcakes.slice(page * 6, 6 + 6 * page));
      setArrayBread(bread.slice(page * 6, 6 + 6 * page));
    };

    getPageItems(page);
  }, [page, filtertype]);

  

  const handleClick = () => {
    navigate(-1);
  };

  const handlePage = (id) => {
    let num = ++id;
    setPage(num);
  };

  useEffect(() => {
    setPage(1);
  }, [navigate]);
   

  useEffect(() => {
    dispatch(getBread())
    dispatch(getBreadandCakesAll())
  
  }, []);

  return (
    <div className={s.Content}>
      <img src={vector} className={s.vector} onClick={handleClick} />

      <p className={s.text}>{filtertype == "bread" && `Հաց`}</p>
      <p className={s.text}>
        {(typeof filtertype == "undefined" || filtertype == "all") &&
          `Հացաբուլկեղեն և թխվածք`}
      </p>

      <BreadMenu />

      <div className={s.boxContent}> {console.log(arrayAll.length)}
        {arrayAll.length > 0 && (typeof filtertype == "undefined" || filtertype == "all") &&
          arrayAll.map((item, id) => {
            return (
              <div key={id}>
                <Item
                  text={item?.name}
                  url={item?.image}
                  price={"200"}
                  prevPrice={"250"}
                />
              </div>
            );
          })}

        {arrayAll.length > 0 &&
          (typeof filtertype == "undefined" || filtertype == "all") && (
            <Pagination
              handlePage={handlePage}
              refArray={refArray}
              page={page}
            />
          )}

        {arrayBread.length > 0 &&
          filtertype == "bread" &&
          arrayBread.map((item, id) => {
            return (
              <div key={id}>
                <Item
                  text={item?.name}
                  url={item?.image}
                  price={"200"}
                  prevPrice={"250"}
                />
              </div>
            );
          })}
        {arrayBread.length > 0 && filtertype == "bread" && (
          <Pagination handlePage={handlePage} refArray={refArray} page={page} />
        )}
      </div>
     
    </div>
  );
}

export default React.memo(BreadandCakes);
