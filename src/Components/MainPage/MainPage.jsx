import style from './MainPage.module.scss';  
import { Container } from '../Layout/Container/Container.jsx';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchGoods } from '../../features/goodsSlice.js';
import { useSelector } from "react-redux";


//  компонент, возвращает верстку
export const MainPage = ({ gender = 'women' }) => {                     // по умолчнию  gender = 'women'
      
      const { category } = useParams();   // хук useParams

      const dispatch = useDispatch();
      
      // получаем goodsList :
      const { goodsList } = useSelector(state => state.goodsList);

      useEffect(() => {
            dispatch(fetchGoods(gender))
      }, [gender, dispatch]);                         // при смене gender, вызовется переданная функция



      return (
            <section className={style.goods}>
                  <Container>
                        <h2 className={style.title}> </h2>
                        <ul className={style.list}>
                              {goodsList.map((goodItem) => (                                   // возвращает верстку, у каждого элемента спсика долен быть key. 
                                          <Product key={goodItem.id} {...goodItem} />           // <li>, передаем все свойтсва товара путем {...goodItem}
                                    )
                              )}  
                        </ul>
                  </Container>
            </section>
           
      )


      // return (
      //       <Container>
      //             <div>MainPage { gender }</div>
      //             { category && <p> Категория: { category } </p> }  
      //       </Container>
      // )

};    