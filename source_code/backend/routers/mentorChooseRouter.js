import {
  getAllTrainees,
  getMentors,
  getMentorReco,
} from "../controllers/mentorChoosingController.js";

const mentorChooseRouter = (app) => {
  app.get("/api/getAllTrainees", getAllTrainees);
  app.get("/api/getMentors", getMentors);
  app.post("/api/getMentorRecommendations", getMentorReco);
};

export default mentorChooseRouter;
