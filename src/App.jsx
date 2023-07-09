import { Header } from "./Components/Header/Header.jsx";
import { Footer } from "./Components/Footer/Footer.jsx";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { Root } from "./routes/Root.jsx";
import { MainPage } from "./Components/MainPage/MainPage.jsx";
import { ErrorPage } from "./Components/ErrorPage/ErrrorPage.jsx";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchNavigation } from "./features/navigationSlice.js";


// при переходе path='/' отобразится компонент  MainPage, gender='men' это props:

const router = createBrowserRouter(
     createRoutesFromElements(
          <Route path='/' element={<Root />}>     
               <Route  index element={<MainPage />} />
               <Route  path='women' element={<MainPage gender='women' />} />
               <Route  path='men' element={<MainPage gender='men' />} />
               <Route  path='women/:category' element={<MainPage gender='women' />} />
               <Route  path='men/:category' element={<MainPage gender='men' />} />
               <Route  path='*' element={<ErrorPage />} />
          </Route>
     )
);


export const App = () => {
     const dispatch = useDispatch();

     useEffect(() => {
          dispatch(fetchNavigation());  // отправка запрос на сервет
     }, [dispatch]);


     return  <RouterProvider router={router}></RouterProvider>;

}; 




// export const App = () => {  // создали компонент App
//      return (
//       <> 
//            <Header />
//            <Footer />
//       </>
//      ) 
// };

