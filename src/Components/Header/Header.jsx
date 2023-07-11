import { Top } from "./Top/Top.jsx";
import { Navigation } from "./Navigation.jsx";
import style from './Header.module.scss';   // style={}

// компонент, возвращатет верстку
//                  {list} 
export const Header = () => (    // с помщью деструткризации достаем объект list
      
      <header className={style.header}>
            <Top />
            <Navigation />  
      </header>
      
);


// <Navigation list={list}/>  передаем {list} ввиде props-а(объект) в компонент Navigation 