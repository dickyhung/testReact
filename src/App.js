import{
  BrowserRouter as Router,
  Routes,
  Route,
  // Navigate,
} from "react-router-dom"
import Login from "./Component/Login";
import Register from "./Component/Register";

function App(){
  return(
    <Register />
      // <>
      // <Router>
      //   <Routes>
      //        <Route path="/" element={<Login/>}/>
      //        <Route path="/register" element={<Register/>}/>
      //   </Routes>
      // </Router>
      // </>
  )
}

export default App;