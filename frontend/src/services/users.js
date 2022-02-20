import http from "./index";

class UsersDataService {
  getAll() {
    return http.get(`users/all`);
  }

  getUser(userId) {
    return http.get(`users/${userId}`);
  }

  postTotalWins(userId, totalWins){
      const body = totalWins;
      return http.put(`users/${userId}`, body);
  }
}

export const retrieveAllUsers = () => {
  UsersDataService.getAll()
    .then((response) => {
      return response.data;
    })
    .catch((e) => {
      console.log(e);
      return null;
    });
};

export const retrieveUserById = (id) => {
  UsersDataService.getUser(id)
    .then((response) => {
      return response.data;
    })
    .catch((e) => {
      console.log(e);
      return null;
    });
};

export const postWins = (id) => {
  UsersDataService.postTotalWins(id)
    .then((response) => {
      return response.data;
    })
    .catch((e) => {
      console.log(e);
      return null;
    });
};