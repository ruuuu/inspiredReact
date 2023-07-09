import { Top } from "./Top/Top.jsx";
import { Navigation } from "./Navigation/Navigation.jsx";


// компонент, возвращатет верстку
export const Header = ({ list }) => (    // с помщью деструткризации достаем объект list
      
      <header>
            <Top />
            <Navigation list={list} />  
      </header>
      
);


// <Navigation list={list}/>  передаем {list} ввиде props-а(объект) в компонент Navigation 