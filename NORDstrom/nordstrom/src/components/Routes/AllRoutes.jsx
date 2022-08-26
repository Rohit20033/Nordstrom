
import {Routes,Route} from "react-router-dom"
import NavBar from "../Navbar/Navbar"
import SignInPass from "../Signups/signinPass"
import SignIn from "../Signups/signin"
import CreateAcc from "../Signups/createacc"
import HomePage from "../Dashboard/homepage"
function AllRoutes(){

    return(
         <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/signin" element={<SignIn/>}/>
            <Route path="/signin2" element={<SignInPass/>}/>
            <Route path="/signup" element={<CreateAcc/>}/>

         </Routes>
    )
}
export default AllRoutes