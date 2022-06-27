import { API } from "../api";
import { getNameAndCategory, getNameandUrl } from "../utiles";
const SET_CATEGORIES = "SET_CATEGORIES";
const SET_BREAD = "SET_BREAD";
const SET_BREADANDCAKES = 'SET_BREADANDCAKES';


const initialState = {
  categories: [],
  bread: [],
  breadandcakes: []
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      return {
        ...state,

        categories: action.payload,
      };

    case SET_BREAD:
      return {
        ...state,

        bread: action.payload,
      };

       case SET_BREADANDCAKES:

      return {
        ...state,

        breadandcakes: action.payload,
       
      };


    default:
      return state;
  }
};

export const setCategories = (payload) => ({ type: SET_CATEGORIES, payload });
export const setBreadandCakes = (payload) => ({ type: SET_BREADANDCAKES, payload });
export const setBread = (payload) => ({ type: SET_BREAD, payload });

export const getCategories = () => async (dispatch) => {
  const response = await API.getCategories();
  const arr = getNameAndCategory(response);
  dispatch(setCategories(arr));

};

export const getBread = () => async (dispatch) => {
  const response = await API.getBread();
  const arr = getNameandUrl(response);
  dispatch(setBread(arr));

};

export const getBreadandCakesAll= () => async (dispatch) => {

  const response = await API.getBreadandCakesAll();
  const arr = getNameandUrl(response);
  dispatch(setBreadandCakes(arr));

};


export default categoryReducer;
