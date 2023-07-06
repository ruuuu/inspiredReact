import cn from "classnames";
import style from './Category.module.scss';   // style={}
import { NavLink, useLocation } from 'react-router-dom';




// const list = [
//       {link: 'bras', title: 'Бюстгальтеры'},
//       {link: 'panties', title: 'Трусы'},
//       {link: 'socks', title: 'Носки'},
//       {link: 'bathsrobes', title: 'Халаты'},
//       {link: 'thermal', title: 'Термобелье'},
//       {link: 'pijamas', title: 'Пижамы'}
// ];



//  атрибуты className, to это props-ы
// компонент
export const Category = ({ list }) => {
      console.log('list in Category  ', list )
      const location = useLocation();                                   // useLocation - хук встронный в react-router-dom             
      const gender = location.pathname.split('/')[1] || 'women';        // men/women
      //console.log('gender ', gender);            


      return (

            <ul className={style.category}>
                { list[0].map((item) => (                                   // возвращает верстку, у каждого элемента спсика долен быть key. NavLink -встроенный компнент в react-dom, вместо href используем to, className может приимать фукнию. Дестурктрировали встроенное свойоство isActive(ссылка активная)
                        <li key={item.link}>             
                              <NavLink className={({ isActive }) => cn(style.link, isActive && style.linkActive)} to={`${gender}/${item.link}`}> {item.title} </NavLink>   
                        </li>
                     )
                 )}
            </ul>
      )

};

