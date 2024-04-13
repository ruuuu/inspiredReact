import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { Root } from "./routes/Root.jsx";
import { MainPage } from "./Components/MainPage/MainPage.jsx";
import { ErrorPage } from "./Components/ErrorPage/ErrrorPage.jsx";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchNavigation } from "./features/navigationSlice.js";
import { fetchColors } from "./features/colorSlice.js";
import { ProductPage } from "./Components/ProductPage/ProductPage.jsx";



// роутинг: npm i react-router-dom -s:
const router = createBrowserRouter(
     createRoutesFromElements(
          <Route path='/' element={<Root />}>     
               <Route  index element={<MainPage />} />
               <Route  path='catalog/:gender/:category?' element={<MainPage />} />            
               <Route  path='product/:id?' element={<ProductPage />} />                    {/*  при переходе path='product/:id?' отобразится компонент  ProductPage */}
                {/* <Route  path='women' element={<MainPage gender='women' />} /> */}           {/* gender='men' это props */}
               {/* <Route  path='men' element={<MainPage gender='men' />} />
               <Route  path='women/:category' element={<MainPage gender='women' />} />
               <Route  path='men/:category' element={<MainPage gender='men' />} />
               <Route  path='*' element={<ErrorPage />} />
               <Route  path='kids' element={<MainPage gender='kids' />} />
               <Route  path='kids/:category' element={<MainPage gender='kids' />} /> */}
          </Route>
     )
);

//  category? - категрии можебть а может не быть

export const App = () => {
     const dispatch = useDispatch();

     useEffect(() => {
          dispatch(fetchNavigation());  // отправка запроса на сервер(полуенеи категорий)
          dispatch(fetchColors());     // отправка запроса на сервер(полуение цветв)
          
     }, [dispatch]);


     return <RouterProvider router={router}></RouterProvider>;

}; 




// export const App = () => {  // создали компонент App
//      return (
//       <> 
//            <Header />
//            <Footer />
//       </>
//      ) 
// };

