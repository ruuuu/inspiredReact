import style from './Product.module.scss'; 
import { API_URL } from '../../const.js';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Like } from '../../assets/heart.svg';  // картинку импортировали как компанент, назвали его Like
import { ColorList } from '../ColorList/ColorLIst.jsx';


// вернет верстку картчоки товара для страницы товара

//                                 props
export const Product = ({ id, pic, title, price, colors, description }) => {  // props-   {id, title, category, size, name, description}
      //console.log('props ', props);

      return (
            <article className={style.product}>
                  <NavLink to={`/product/${id}`} className={style.link}>
                        <img className={style.image} src={`${API_URL}/${pic}`}  alt={`${title} ${description}`} />
                        <h3 className={style.title}> {title} </h3>  
                  </NavLink>

                  <div className={style.row}>
                        <p className={style.price}>руб {price}</p>
                        <button className={style.favorite}>
                              <Like />
                        </button>
                  </div>

                  <ColorList colors={colors} />   {/* ColorList принмиает параметр colors, поэтому добавчлпм props colors */} 
            </article>
      )
       
}






// <ColorList color={color}/> передаем {color} в компонент ColorList