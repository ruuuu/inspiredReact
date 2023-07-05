import cn from "classnames";
import style from './Category.module.scss';   // style={}
import { NavLink } from 'react-router-dom';


const list = [
      {link: 'bras', title: 'Бюстгальтеры'},
      {link: 'panties', title: 'Трусы'},
      {link: 'socks', title: 'Носки'},
      {link: 'bathsrobes', title: 'Халаты'},
      {link: 'thermal', title: 'Термобелье'},
      {link: 'pijamas', title: 'Пижамы'}
];




// компонент
export const Category = () => (

      <ul className={style.category}>
          {list.map((item) => (                                   // возвращает верстку, у каждого элемента спсика долен быть key. NavLink -встроенный компнент в react-dom, вместо href используем to, className может приимать фукнию. Дестурктрировали встроенное свойоство isActive(ссылка активная)
                  <li key={item.link}>             
                        <NavLink className={({ isActive }) => cn(style.link, isActive && style.linkActive)} to={item.link}> {item.title} </NavLink>   
                  </li>
               )
           )}
      </ul>
);