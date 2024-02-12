import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Website/HomePage";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import SendOtp from './Pages/Auth/SendOtp';
import VerifyOtp from './Pages/Auth/VerifyOtp';
import ResetPassword from './Pages/Auth/ResetPassword';
import Dashboard from "./Pages/Dashboard/Dashboard";
import RequireAuth from "./Pages/Auth/RequireAuth";
// import Err403 from './Pages/Auth/403';
import Err404 from "./Pages/Auth/404";
import PlantDetalis from './Pages/Website/PlantDetalis';
import Consultation from './Pages/Website/Consultation';
import SUitablePlant from './Pages/Website/SuitablePlant';
import PlantDiseases from './Pages/Website/PlantDiseases';
import Services from './Pages/Website/Services';
import Contact from './Pages/Website/Contact';
import RequireBack from "./Pages/Auth/RequireBack";
import Posts from "./Pages/Dashboard/Posts";
import AddPost from "./Pages/Dashboard/AddPost";
import Post from "./Pages/Dashboard/Post";
import Test from "./Pages/Website/Test";
import { DISEASE, PLANT } from "./Api/Api";
import ResetSuccess from "./Pages/Auth/ResetSuccess";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* public Route */}
        <Route path="/" element={<HomePage />}></Route>
        <Route element={<RequireBack></RequireBack>}>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/test" element={<Test />}></Route>
        </Route>
        <Route path="/*" element={<Err404></Err404>}></Route>
        <Route path='/sendotp' element={<SendOtp />}></Route>
          <Route path='/verifyotp' element={<VerifyOtp />}></Route>
          <Route path='/resetpassword' element={<ResetPassword />}></Route>
          <Route path='/resetsuccess' element={<ResetSuccess />}></Route>
          <Route path='/Services' element={<Services></Services>}></Route>
          <Route path='/suitableplant' element={<SUitablePlant></SUitablePlant>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          {/* <Route path='/plantdiseases' element={<PlantDiseases></PlantDiseases>}></Route> */}

          {/* <Route path='/plantdetials' element={<PlantDetalis></PlantDetalis>}></Route> */}
          <Route path={`${PLANT}/:plantId`} element={<PlantDetalis></PlantDetalis>}></Route>
          <Route path={`${DISEASE}/:diseaseId`} element={<PlantDiseases></PlantDiseases>}></Route>
          <Route path='/consultation' element={<Consultation></Consultation>}></Route>


        {/* Protected Route */}
        <Route
          element={
            <RequireAuth allowedRole={[1]}></RequireAuth>
          }
        >
          <Route path="/dashboard" element={<Dashboard></Dashboard>}>
              <Route
                path="posts"
                element={<Posts></Posts>}
              ></Route>
              <Route
                path="posts/:id"
                element={<Post></Post>}
              ></Route>
              <Route
                path="create_post"
                element={<AddPost></AddPost>}
              ></Route>
            </Route>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
