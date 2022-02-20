import http from "./index";

class CategoriesDataService {
  getAll(){
    return http.get(`categories/all`);
  }

  getName(categoryId) {
    return http.get(`categories/${categoryId}`);
  }

  getImg(categoryId) {
    return http.get(`categories/${categoryId}`);
  }
}

export default new CategoriesDataService();
