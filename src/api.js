import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://api.thecatapi.com/v1/",
});

export const API = {
  getCategories() {
    return instance
      .get(`breeds`)

      .then((response) => {
        return response.data;
      });
  },

  getBread() {
    return instance
      .get(`images/search?limit=40&category_ids=1`)

      .then((response) => {
        return response.data;
      });
  },

  getBreadandCakesAll() {
    return instance
      .get(`images/search?limit=40&category_ids=7`)

      .then((response) => {
        return response.data;
      });
  },
};
