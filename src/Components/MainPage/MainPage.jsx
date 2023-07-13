import style from './MainPage.module.scss';  
import { Container } from '../Layout/Container/Container.jsx';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchGoods } from '../../features/goodsSlice.js';
import { useSelector } from 'react-redux';
import { Product } from '../Product/Product.jsx';



//  компонент, возвращает верстку
export const MainPage = ({ gender = 'women' }) => {                     // по умолчнию  gender = 'women'
      
      const { category } = useParams();   // хук useParams

      const dispatch = useDispatch();

     
      // получаем goodsList  [{}, {}, {}] с сервера:
      const { goodsList } = useSelector(state => state.goods);     

      useEffect(() => {
            dispatch(fetchGoods(gender))
      }, [gender, dispatch]);                        // при смене gender, вызовется переданная функция


      return (
            <section className={style.goods}>
                  <Container>
                        <h2 className={style.title}>Новинки</h2>
                        <ul className={style.list}>
                              {goodsList.map((goodItem) => (
                                    <li key={goodItem.id}>
                                          <Product  {...goodItem} />
                                    </li>
                                    )
                              )}                             
                        </ul>
                  </Container>
            </section>    
      );

};    


//   Product это <li>, передаем все свойтсва товара {id, title, category, size, name, description} путем {...goodItem}