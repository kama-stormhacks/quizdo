import http from "./index";

class CategoriesDataService {
  getName(categoryId) {
    return http.get(`categories/${categoryId}`);
  }

  getImg(categoryId) {
    return http.get(`categories/${categoryId}`);
  }
}

export default new CategoriesDataService();
