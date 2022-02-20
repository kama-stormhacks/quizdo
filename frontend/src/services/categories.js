import http from "./index";

class CategoriesDataService {
  getName(categoryId) {
    return http.get(`/categories/${categoryId}/name/`);
  }

  getImg(categoryId) {
    return http.get(`/categories/${categoryId}/img/`);
  }
}

export default new CategoriesDataService();
