import { Top } from "./Top/Top.jsx";
import { Navigation } from "./Navigation/Navigation.jsx";


// компонент, возвращатет верстку
//                  {list} 
export const Header = () => (    // с помщью деструткризации достаем объект list
      
      <header>
            <Top />
            <Navigation  />  
      </header>
      
);


// <Navigation list={list}/>  передаем {list} ввиде props-а(объект) в компонент Navigation 