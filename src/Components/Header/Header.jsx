import { Top } from "./Top/Top.jsx";
import { Navigation } from "./Navigation/Navigation.jsx";
import style from './Header.module.scss';   // style={}


// компонент, возвращатет верстку
//                  {list} 
export const Header = () => (    // с помщью деструткризации достаем объект list
      
      <header className={style.header}>
            <Top />
            <Navigation />    {/*  <Navigation list={list}/>  передаем {list} в виде props-а(объект) в компонент Navigation   */}
      </header>
      
);

// либо так (с return):
// export const Header = () => {

//       return (
//             <header className={style.header}>
//                   <Top />
//                   <Navigation />  
//             </header>
//       )

// }    // с помщью деструткризации достаем объект list
      
      


