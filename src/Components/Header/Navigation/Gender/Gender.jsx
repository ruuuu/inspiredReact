import cn from 'classnames';  
import style from './Gender.module.scss';   // style={}
import { NavLink } from 'react-router-dom';


const list = [
      {link: 'women', title: 'Женщины'},
      {link: 'men', title: 'Мужчины'}
];



// компонент, js код оборачиваем в {}
export const Gender = () => (                                     // возвращает верстку
      <ul className={style.gender}>
          {list.map((item) => (                                   // возвращает верстку, у каждого элемента спсика долен быть key. NavLink -строенный компнент в react-dom
                  <li className={style.item} key={item.link}>             
                        <NavLink className={style.link} to={item.link}> {item.title} </NavLink>  
                  </li>
               )
           )}
      </ul>
);


//  npm install react-router-dom -S  https://reactrouter.com/en/main/start/tutorial