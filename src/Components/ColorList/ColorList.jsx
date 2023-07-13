import { useSelector } from 'react-redux';
import style from './ColorList.module.scss';  
import { Color } from './Color/Color.jsx';




//компонент
export const ColorList = ({ colors }) => { // colors - массив цветов

      const { colorList } = useSelector(state => state.color);                // ответ от сервера  [ {code: , id: , title: }, {} ]  запишем в colorList
      
      return (
            <ul className={style.color}>
                 {colors.map((id, i) => {             // colors = [ {code: , id: , title: }, {} ]
                        const color = colorList.find(color => color.id === id);                             // вернет {code: , id: , title: }
                        return <Color key={id} color={color?.code} check={!i} />                             // возвращаем компонент Color(<li>), props = {color, check}.   color?.code - проверяем есть ли свойстов code у color 
                 })}
            </ul>
      )
};