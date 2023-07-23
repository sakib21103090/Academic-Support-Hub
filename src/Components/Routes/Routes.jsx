import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Error from "../Error/Error";
import Colleges from "../Pages/Colleges/Colleges";
import Admission from "../Pages/Admission/Admission";
import MyCollege from "../Pages/MyCollege/MyCollege";
import Details from "../Pages/Home/PopularColleges/Details/Details";
import Login from "../Pages/UserLogin/Login/Login";
import SignUp from "../Pages/UserLogin/SignUp/SignUp";
import PrivateRoute from "./privateRoute/PrivateRoute";




const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main> ,
      errorElement:<Error></Error>,
      children :[
        {
            path : '/',
            element :<Home></Home>,
        },
        {
            path : 'colleges',
            element :<Colleges></Colleges>,
        },
        {
            path : 'details/:id',
            element :<PrivateRoute><Details></Details></PrivateRoute>,
            loader: ({params}) => fetch(`https://academic-support-hub-server.vercel.app/popularCollegeData/${params.id}`)
        },
        {
            path : 'admission',
            element :<Admission></Admission>,
        },
        {
            path : 'myCollege',
            element :<MyCollege></MyCollege>,
        },
        {
            path : '/login',
             element : <Login></Login>
            
            },
            {
                path : '/SignUp',
                  element : <SignUp></SignUp>
              },
      ]
    }
]);

export default router;