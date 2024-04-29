import style from './ColorLabel.module.scss';
import cn from "classnames";
import { useEffect, useRef } from 'react';



// компонент, в него передаем 4 пропса:
export const ColorLabel = ({ color, check, selectedColor, handleColorChange }) => {                /*  передаваемые colorCode, check selectedColor, handleColorChange это атрибуты(props) у компонента ColorLabel */ 

      const colorRef = useRef(null);                                                // useRef хук, нач знаеие null. colorRef нужен чтобы заадть стили элементу
      //element.style.setProperty("--data-color", color);                              // в js(для реакт  useRef испльзуется) задаем дата-атрибут data-color, и задаем ему значение color 
      
      // когда работаем с элементами не из реакта или с  dom-деревом, то испольуем useEffect: 
      useEffect(() => {                          
            colorRef.current.style.setProperty("--data-color", color);  //  scss background-color: var(--data-color);  то есть  значение хранится  в переменной --data-color 
      }, [ color ]);                                 // при смене color, заупустится предаваемая функция(коллбэк)             



      return (
            <label className={style.color} ref={colorRef}> 
                  <input className={style.input} type='radio' name='color' value={color?.title} />
            </label> 
      );
};