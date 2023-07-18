import style from './ProductPage.module.scss';
import { Container } from '../../Layout/Container/Container.jsx';


//  станица товара:
export const ProductPage = () => {


      return (
            <section className={style.card}>
                  <Container className={style.container}>
                    <img className={style.image} src="" alt="" />
                  </Container>
            </section>
      )
};