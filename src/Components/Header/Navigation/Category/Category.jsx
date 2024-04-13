import cn from "classnames";
import style from './Category.module.scss';   // style={}
import { NavLink, useLocation } from 'react-router-dom';
import { useSelector } from "react-redux";



// компонент 
// атрибуты className и to - это props-ы
//                    
export const Category = () => {
      
      // извлекаем(диструктуризация) categories и activeGender:
      const { activeGender, categories } = useSelector(state => state.navigation);                    // state.navigation вернет объект { status, categories, error, activeGender, genderList }, из него получим свйосва activeGender, categories с помщью деструтуриазации 
     

      return (
            <ul className={style.category}>
                {/* list: [{'Пижамы', 'pijams'}, {'Халаты', 'wrobe'}] */}
                { categories[activeGender]?.list.map((item) => (                                   // возвращает верстку, у каждого элемента спсика долен быть key. NavLink -встроенный компнент в react-dom, вместо href используем to; className может приимать фукнию. Объект от reactRouter прилетае и у него есть свойство isActive(ссылка активная), дестурктрировали его
                        <li key={item.slug}>             
                              <NavLink  className={({ isActive }) => cn(style.link, isActive && style.linkActive)}  to={`/catalog/${activeGender}/${item.slug}`}> {item.title} </NavLink>                   {/* с NavLink станица не будет перезагружаться */}
                        </li>
                     )
                 )}
            </ul>
      );
};

