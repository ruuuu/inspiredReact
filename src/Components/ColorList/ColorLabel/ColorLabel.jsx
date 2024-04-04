import style from './ColorLabel.module.scss';
import cn from "classnames";
import { useEffect, useRef } from 'react';



// компонент, в него передаем 4 пропса:
export const ColorLabel = ({ color, check, selectedColor, handleColorChange }) => {                /* color = {code: , id: , title: }, передаваемые color, check это атрибуты(props) у компонента Color */ 

      const colorRef = useRef(null);                                                // useRef хук, нач знаеие null. colorRef нужен чтобы заадть стили элементу
      //element.style.setProperty("--data-color", color);                              // в js(для реакт  useRef испльзуется) задаем дата-атрибут data-color, и задаем ему значение color 
      
      // если изменения происходят напрямую у элемента, то испольуем useEffect: 
      useEffect(() => {                          
            colorRef.current.style.setProperty("--data-color", color);   
      }, [color]);                                 // при смене color, заупустится предаваемая функция             



      return (
            <label className={style.color} ref={colorRef}> 
                  <input className={style.input} type='radio' name='color' value={color?.title}/>
            </label> 
      );
};