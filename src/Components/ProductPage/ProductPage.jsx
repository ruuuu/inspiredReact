import style from './ProductPage.module.scss';
import { Container } from '../Layout/Container/Container.jsx';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProduct } from '../../features/productSlice.js';
import { API_URL } from '../../const.js';
import cn from 'classnames';
import { ColorList } from '../ColorList/ColorList.jsx';



//  станица товара:
export const ProductPage = () => {

      const dispatch = useDispatch();
      const { id }  = useParams();                    // id товара берем из адресной строки
      const { product } = useSelector(state => {       // state.product вернет объект { status:success, product: {}, error: null  }, из него получим свйосвj product с помщью деструтуриазации 
            console.log('state.product ', state.product)
            return state.product;
      });       
      
      const [ selectedColor, setSelectedColor ] = useState('');         //  создает state,  selectedColor -выбранный цвет, чтоб его отметить ободком
     
      const handleColorChange = (e) => {
            console.log('e.target.value ', e.target.value)
            setSelectedColor(e.target.value);
      }
     
    
      console.log('product ', product)

      useEffect(() => {
            dispatch(fetchProduct(id))  // запрос на сервер
      }, [id, dispatch]);                 // при  смене id  будет вызываться переданная функция


      return (
            <section className={style.card}>
                  <Container className={style.container}>
                        <img className={style.image} src={`${API_URL}/${product.pic}`} alt={`${product.title} ${product.description}`} />

                        <form className={style.content}>
                              <h2 className={style.title}>{product.title}</h2>
                              <p className={style.price}>{product.price} РУБ</p>
                              <div className={style.vendorCode}>
                                    <span className={style.subtitle}>Aртикул</span>
                                    <span className={style.id}>{product.id}</span>
                              </div>

                              <div className={style.color}>
                                    <span className={cn(style.subtitle, style.colorTitle)}>Цвет</span>
                                    <ColorList colors={product.colors}  selectedColor={selectedColor} handleColorChange={handleColorChange} />                      {/* перелаем props colors */}
                              </div>
                        </form>
                  </Container>
            </section>
      )
};