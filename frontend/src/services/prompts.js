import http from "./index";

class PromptsDataService {
  getQuestion(promptId) {
    return http.get(`/prompts/${promptId}/question/`);
  }

  getAnswers(promptId) {
    return http.get(`/prompts/${promptId}/answers/`);
  }
}

export const retrieveQuestion = (id) => {
  PromptsDataService.getQuestion(id)
    .then((response) => {
      return response.data;
    })
    .catch((e) => {
      console.log(e);
      return null;
    });
};

export const retrieveAnswers = (id) => {
  PromptsDataService.getQuestion(id)
    .then((response) => {
      return response.data;
    })
    .catch((e) => {
      console.log(e);
      return null;
    });
};
