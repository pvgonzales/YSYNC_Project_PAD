
import { userSignIn, userRegister, getAllUsers, 
    // testFunction 
} from '../controllers/userController.js'

const userRouter = (app) => {
    app.post('/api/auth/login', userSignIn);
    app.post('/api/auth/register', userRegister);
    app.get('/api/getAllUsers', getAllUsers);
    // app.get('/api/testFunction', testFunction);
};

export default userRouter;