import http from "./index";

class CategoriesDataService {
  getName(categoryId) {
    return http.get(`/categories/${categoryId}/name/`);
  }

  getImg(categoryId) {
    return http.get(`/categories/${categoryId}/img/`);
  }
}

export const retrieveCategory = (id) => {
  CategoriesDataService.getName(id)
    .then((response) => {
      return response.data;
    })
    .catch((e) => {
      console.log(e);
      return null;
    });
}

export const retrieveImg = (id) => {
  CategoriesDataService.getImg(id)
    .then((response) => {
      return response.data;
    })
    .catch((e) => {
      console.log(e);
      return null;
    });
}
