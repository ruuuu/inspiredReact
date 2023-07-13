import style from './Product.module.scss'; 
import { API_URL } from '../../const.js';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Like } from '../../assets/heart.svg';  // картинку импортировали как компанент, назвали его Like
import { ColorList } from '../ColorList/ColorLIst.jsx';


//                                 props
export const Product = ({ id, pic, title, price, colors }) => {  // props-   {id, title, category, size, name, description}
      //console.log('props ', props);

      return (
            <article className={style.product}>
                  <NavLink to={`product/${id}`} className={style.link}>
                        <img className={style.image} src={`${API_URL}/${pic}`} />
                        <h3 className={style.title}> {title} </h3>  

                  </NavLink>

                  <div className={style.row}>
                        <p className={style.price}>руб {price}</p>
                        <button className={style.favorite}>
                              <Like />
                        </button>
                  </div>

                  <ColorList colors={colors} /> 
            </article>
      )
       
}






// <ColorList color={color}/> передаем {color} в компонент ColorList