import http from "./index";

class PromptsDataService {
  getQuestion(promptId) {
    return http.get(`/prompts/${promptId}/question/`);
  }

  getAnswers(promptId) {
    return http.get(`/prompts/${promptId}/answers/`);
  }
}

export default new PromptsDataService();
