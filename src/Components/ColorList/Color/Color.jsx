import s from './Color.module.scss';
import cn from "classnames";
import { useEffect, useRef } from 'react';



// компонент, деструткрировали props:
export const Color = ({ colorCode, check }) => {   

      // const colorRef = useRef(null);  // useRef хук, нач знаеие null. colorRef нужен чтобы заадть стили элементу
      // element.style.setProperty("--data-color", colorCode);                              // в js(для реакт  useRef испльзуется) задаем дата-атрибут data-color=color элементу element
      
      // если изменения происходят напрямую у элемента(dom-элемента),нереакт-элемента,  то испольуем useEffect: 
      // useEffect(() => {                          
      //       colorRef.current.style.setProperty("--data-color", colorCode);   
      // }, [colorCode]);                                 // при смене colorCode, запускается передаваемая функция             

      return (
            //<li className={cn(s.color, check ? s.colorCheck : '')}  ref={colorRef} />                 //  Задаем ref={colorRef}, чтобы добавить элементу li  стили
            // либо так без ref={colorRef}: 
            <li className={cn(s.color, check ? s.colorCheck : '')}  style={{ "--data-color": colorCode }} />  
      );
};