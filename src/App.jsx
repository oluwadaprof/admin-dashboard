
import './App.css';
import Home from './page/home/Home';
import Login from './page/login/Login';
import List from './page/list/List';
import Single from './page/single/Single';
import New from './page/new/New';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" >
            <Route path='home' element={<Home />} />
            <Route path='login' element={<Login />} />
            {/* users */}
            <Route path='users' >
              <Route index element={<List />} />
              <Route path=':userId' element={<Single />} />
              <Route path='new' element={<New />} />
            </Route>
            {/* product */}
            <Route path='products' >
              <Route index element={<List />} />
              <Route path=':productId' element={<Single />} />
              <Route path='new' element={<New />} />
            </Route>
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
