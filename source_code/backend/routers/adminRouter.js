import { editUser } from "../controllers/adminController.js";
const adminRouter = (app) => {
    app.post("/api/editUser", editUser);
}

export default adminRouter;