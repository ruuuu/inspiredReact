import cn from "classnames";
import style from './Category.module.scss';   // style={}
import { NavLink, useLocation } from 'react-router-dom';
import { useSelector } from "react-redux";


//  атрибуты className, to - это props-ы
// компонент          {list}
export const Category = () => {
      // console.log('list in Category  ', list );
      // const location = useLocation();                                   // useLocation - хук встронный в react-router-dom             
      // const gender = location.pathname.split("/")[1] || "women";        // men/women
      //console.log('gender ', gender);            
      
      const { activeGender, categories } = useSelector(state => state.navigation);  
     

      return (
            <ul className={style.category}>
                { categories[activeGender]?.list.map((item) => (                                   // возвращает верстку, у каждого элемента спсика долен быть key. NavLink -встроенный компнент в react-dom, вместо href используем to, className может приимать фукнию. Дестурктрировали встроенное свойоство isActive(ссылка активная)
                        <li key={item.slug}>             
                              <NavLink className={({ isActive }) => cn(style.link, isActive && style.linkActive)} to={`${activeGender}/${item.slug}`}> {item.title} </NavLink>   
                        </li>
                     )
                 )}
            </ul>
      );
};

