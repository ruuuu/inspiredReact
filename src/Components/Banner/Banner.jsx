import { NavLink } from 'react-router-dom';
import style from '../Banner/Banner.module.scss';
import { Container } from '../Layout/Container/Container.jsx';
import { API_URL } from '../../const.js';



export const Banner = ({ data }) => (    //  data = { description:  , id: , bg:{} }
      
      data &&            // если data есть 
            <section className={style.banner} style={{ "backgroundImage": `url(${API_URL}/${data.bg.desktop})` }} >
                  <Container>
                       <div className={style.content}>
                              <h2 className={style.title}> {data.description} </h2>
                              <NavLink className={style.link}  to={`/product/${data.id}`} > Перейти </NavLink>
                       </div>
                  </Container>
            </section>                      
); 

     

      
