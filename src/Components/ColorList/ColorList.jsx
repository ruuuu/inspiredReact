import { useSelector } from 'react-redux';
import style from './ColorList.module.scss';  
import { Color } from './Color/Color.jsx';
import { ColorLabel } from './ColorLabel/ColorLabel.jsx';




//компонент
export const ColorList = ({ colors, selectedColor, handleColorChange }) => {                                    // colors - массив цветов [1, 2, 5] у
      

      const { colorList } = useSelector(state => state.color);                // список всех цветов, ответ от сервера [ { id: , title: , code: }, {} ]  запишем в colorList
     

      return handleColorChange ? (                           // если есть handleColorChange, то вернем одну верстку, иначе др верстка    
            <div className={style.colorList}>
                  { colors?.map((colorsElem, i) => {                  // colors = [ 2, 3, 6 ] - цвета в карточке товара
                        const color = colorList.find(colorItem => colorItem.id === colorsElem);                             // вернет {id: , title: , code: }
                        return <ColorLabel  key={colorsElem}  color={color?.code}  check={!i}  selectedColor={selectedColor}   handleColorChange={handleColorChange } />   // ColorLabel принимает {selectedColor, handleColorChange}, поэтому передаем их как props-ы 
                  })}
            </div>
            ) : (                              
                  <ul className={style.colorList}>
                        { colors.map((colorsElem, i) => {             // colors = [ 1, 2, 5 ] - цвета в карточке товара
                              const color = colorList.find(color => color.id === colorsElem);                             // вернет {id: , title: , code: }
                              return <Color  key={colorsElem}  colorCode={color?.code}  check={!i} />             // возвращаем компонент Color(<li>), props = {colorCode, check}.   color?.code - проверяем есть ли свойстов code у объекта  color .
                              // Color принимает {color, check}, поэтому передаем их как props-ы color и check
                        })}
                  </ul>
               )
};