import http from "./index";

class UsersDataService {
  getAll() {
    return http.get(`users/all`);
  }

  getUser(userId) {
    return http.get(`users/${userId}`);
  }

  // postTotalWins(userId, totalWins){
  //     const body = totalWins;
  //     return http.put(`users/${userId}`, body);
  // }
}

export default new UsersDataService();
