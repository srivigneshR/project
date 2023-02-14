

//Components
import SignIn from '../components/pages/SignIn'
import Forget from '../components/pages/SignIn/forget';
import Signup from '../components/pages/SignIn/signup';

const routes = [
    {
        path: "/",
        component: SignIn,
        protectedRoute: false,
    },
    {
        path: "/forget",
        component: Forget,
        protectedRoute: false,
        
    },
    {
        path: "/signup",
        component: Signup,
        protectedRoute: false,
    },

]


export default routes;