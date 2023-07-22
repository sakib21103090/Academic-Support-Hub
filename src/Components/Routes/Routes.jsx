import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Error from "../Error/Error";
import Colleges from "../Pages/Colleges/Colleges";
import Admission from "../Pages/Admission/Admission";
import MyCollege from "../Pages/MyCollege/MyCollege";




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
            path : 'admission',
            element :<Admission></Admission>,
        },
        {
            path : 'myCollege',
            element :<MyCollege></MyCollege>,
        },
      ]
    }
]);

export default router;