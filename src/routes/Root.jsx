import { Header } from "../Components/Header/Header.jsx";
import { Footer } from "../Components/Footer/Footer.jsx";
import { Main } from "../Components/Layout/Main/Main.jsx";
import { Outlet } from "react-router-dom";


const list = [ 
      {link: 'women', title: 'Женщины', categories: [
            {link: 'bras', title: 'Бюстгальтеры'},
            {link: 'panties', title: 'Трусы'},
            {link: 'socks', title: 'Носки'},
            {link: 'bathsrobes', title: 'Халаты'},
            {link: 'thermal', title: 'Термобелье'},
            {link: 'pijamas', title: 'Пижамы'},
         ],  
      },

      {link: 'men', title: 'Мужчины', categories: [
            {link: 'panties', title: 'Трусы'},
            {link: 'socks', title: 'Носки'},
            {link: 'bathsrobes', title: 'Халаты'},
            {link: 'thermal', title: 'Термобелье'},
         ],
      },
      {link: 'kids', title: 'Детские', categories: [
            {link: 'girlss', title: 'Девочки'},
            {link: 'boys', title: 'Мальчики'},
         ],
      }
];


// компонент, возврашает верстку: 
export const Root = () => (
      <>
            <Header list={list} />
            <Main>
                  <Outlet />
            </Main>
            <Footer list={list} />
      </>
);


// передаем list в Header/Footer в виде props-а(объект)

// билиотека react-redux контролирует state

