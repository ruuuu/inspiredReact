import { useSelector } from 'react-redux';
import style from './ColorList.module.scss';  



export const ColorList = ({ colors }) => { // colors - массив цветов

      const { colorList } = useSelector(state => state.color);                // ответ от сервера  запишем в colorList 
      
      return (
            <ul className={style.color}>
                 {colors.map((id, i) => {
                        const color = colorList.find(color => color.id === id);
                        return <Color key={id} color /> 
                 })}
            </ul>
      )


};