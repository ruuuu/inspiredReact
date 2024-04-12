import cn from "classnames";
import style from './Category.module.scss';   // style={}
import { NavLink, useLocation } from 'react-router-dom';
import { useSelector } from "react-redux";



// компонент 
// атрибуты className и to - это props-ы
//                     {list}
export const Category = () => {
      // console.log('list in Category  ', list );
      // const location = useLocation();                                   // useLocation - хук встронный в react-router-dom             
      // const gender = location.pathname.split("/")[1] || "women";        // men/women
      //console.log('gender ', gender);   
      
      
      // извлекаем(диструктуризация) categories и activeGender:
      const { activeGender, categories } = useSelector(state => state.navigation);                    // state.navigation вернет объект { status, categories, error, activeGender, genderList }, из него получим свйосва activeGender, categories с помщью деструтуриазации 
     

      return (
            <ul className={style.category}>
                { categories[activeGender]?.list.map((item) => (                                   // возвращает верстку, у каждого элемента спсика долен быть key. NavLink -встроенный компнент в react-dom, вместо href используем to, className может приимать фукнию. Дестурктрировали встроенное свойоство isActive(ссылка активная)
                        <li key={item.slug}>             
                              <NavLink  className={({ isActive }) => cn(style.link, isActive && style.linkActive)}  to={`/catalog/${activeGender}/${item.slug}`}> {item.title} </NavLink>   
                        </li>
                     )
                 )}
            </ul>
      );
};

