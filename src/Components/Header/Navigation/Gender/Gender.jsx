import cn from 'classnames';  
import style from './Gender.module.scss';   // style={}
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';


// const list = [
//       {link: 'women', title: 'Женщины'},
//       {link: 'men', title: 'Мужчины'}
// ];



// компонент, js код оборачиваем в {}
export const Gender = () => {
      const { activeGender, genderList, categories } = useSelector(state => state.navigation)  //state.navigation вернет объект, из него изклекаем свойства activeGender, genderList, categories.  Доcтаем из initialState, для этого исползуем useSelector


      // const location = useLocation();                       // useLocation - хук встронный в react-router-dom
      // //console.log('location ', location);                  
      // const gender = location.pathname.split('/')[1] || 'women';            // split() в строке ищет '/', получаем  массив строк ['', 'men', 'bathrobes']

      return (                                     // возвращает верстку
                  <ul className={style.gender}>
                        {genderList.map((gender) => (                                   // возвращает верстку, у каждого элемента спсика долен быть key. NavLink -встроенный компнент в react-dom, вместо href используем to, className может приимать фукнию. Дестурктрировали встроенное свойоство isActive(ссылка активная)
                                    <li className={style.item} key={gender}>             
                                          <NavLink className={ ({ isActive }) => cn(style.link, (isActive || gender === activeGender) && style.linkActive) } to={gender}> {categories[gender].title} </NavLink>   
                                    </li>
                              )
                        )}
                  </ul>
            )
};



//  npm install react-router-dom -S  https://reactrouter.com/en/main/start/tutorial