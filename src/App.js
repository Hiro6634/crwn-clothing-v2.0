import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";


const App = () => {

  const Shop = () => {
    return(
      <h1>Shop Page</h1>
    );
  }
  return (
    <Routes>
      <Route path='/home' element={<Home/>}>
        <Route path='shop' element={<Shop/>}/>
      </Route>
    </Routes>

  );
}

export default App;
 