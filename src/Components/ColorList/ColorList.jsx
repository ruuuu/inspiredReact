import { useSelector } from 'react-redux';
import style from './ColorList.module.scss';  
import { Color } from './Color/Color.jsx';
import { ColorLabel } from './ColorLabel/ColorLabel.jsx';




//компонент
export const ColorList = ({ colors, selectedColor, handleColorChange  }) => {                                    // colors - массив цветов [1, 2, 5]
      

      const { colorList } = useSelector(state => state.color);                // ответ от сервера colorList = [ {code: , id: , title: }, {} ]  запишем в colorList
      

      return handleColorChange ? (                           // если есть handleColorChange, то вернем ону верстку, иначе др верстка    
            <div className={style.colorList}>
                  {colors?.map((id, i) => {
                        const color = colorList.find(color => color.id === id);                             // вернет {code: , id: , title: }
                        return <ColorLabel  key={id}  color={color?.code}  check={!i}  selectedColor={selectedColor}   handleColorChange={handleColorChange } />   // ColorLabel принимает {selectedColor, handleColorChange}, поэтому передаем их как props-ы 
                  })}
            </div>
            ) : (                              
            <ul className={style.colorList}>
                 {colors.map((id, i) => {             // colors = [ {code: , id: , title: }, {} ]
                        const color = colorList.find(color => color.id === id);                             // вернет {code: , id: , title: }
                        return <Color  key={id}  color={color?.code}  check={!i} />             // возвращаем компонент Color(<li>), props = {color, check}.   color?.code - проверяем есть ли свойстов code у объекта  color .
                            // Color принимает {color, check}, поэтому передаем их как props-ы color и check
                 })}
            </ul>
      )
};