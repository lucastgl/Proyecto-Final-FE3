import './App.css'
import StateContextProvider from './Context/StateContext';
import { ProtectedRoutes } from './Navigation/ProtectedRoutes';
import { routes, Login, Navbar, Footer} from "./Navigation/Routes";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

function App() {

  return (
    <StateContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route element={<ProtectedRoutes/>}>
            <Route element={<Navbar/>}>
              {
                routes.map(({id, path, Component}) =>(
                  <Route key={id} path={path} element={<Component/>}/>
                ))
              }
            </Route>
          </Route>
          <Route path='/' element={<Navigate to="/login" />}/>
        </Routes>
        <Footer>
        </Footer>
      </BrowserRouter>
    </StateContextProvider>
  )
}

export default App