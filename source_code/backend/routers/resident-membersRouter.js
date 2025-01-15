import { getAllResi } from "../controllers/resMemController.js";

const getAllResiRouter = (app) => {
  app.get("/api/getAllResidentMembers", getAllResi);
};

export default getAllResiRouter;
