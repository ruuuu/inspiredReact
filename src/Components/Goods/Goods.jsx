import { Container } from '../Layout/Container/Container.jsx';
import { Product } from '../Product/Product.jsx';
import { useSelector } from 'react-redux';
import style from '../Goods/Goods.module.scss'




export const Goods = ({ categoryData }) => {                      // categoryData  = { title: ,  slug: }
      console.log('categoryData  in Goods ', categoryData );
      
      // получаем goodsList  [{}, {}, {}] с сервера:
      const { goodsList } = useSelector(state => state.goods);   // goods это name в goodsSlice, state.goods вернет  объект { goodsList, status, error }, и звлечем из него  goodsList пр помощи деструтруизауии  
      
      
      const title = categoryData?.title ?? 'Новинки';             // ?? значит что, если categoryData.title  есть, то будет оно, если нет то Новинки

      return (
            <section className={style.goods}>
                  <Container>
                        <h2 className={style.title}> {title} </h2>
                        <ul className={style.list}>
                              {goodsList.map((goodItem) => (
                                    <li key={goodItem.id}>
                                          <Product  {...goodItem} />                {/*  Product это <article>, передаем все свойтсва  {id, title, category, size, name, description} товара  путем {...goodItem}  */}
                                    </li>
                                 )
                              )}                          
                        </ul>
                  </Container>
            </section> 
      )     
};

