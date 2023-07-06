import cn from 'classnames';  
import { Container } from '../Layout/Container/Container.jsx';
import style from './Footer.module.scss';   // style={}
import { NavLink } from 'react-router-dom';


const list = [ 
      {link: 'women', title: 'Женщины', categories: [
            {link: 'bras', title: 'Бюстгальтеры'},
            {link: 'panties', title: 'Трусы'},
            {link: 'socks', title: 'Носки'},
            {link: 'bathsrobes', title: 'Халаты'},
            {link: 'thermal', title: 'Термобелье'},
            {link: 'pijamas', title: 'Пижамы'},
         ],  
      },

      {link: 'men', title: 'Мужчины', categories: [
            {link: 'panties', title: 'Трусы'},
            {link: 'socks', title: 'Носки'},
            {link: 'bathsrobes', title: 'Халаты'},
            {link: 'thermal', title: 'Термобелье'},
         ],
      }
];





// компонент, возвращает верстку
export const Footer = () => ( 
      <footer>  
            <Container>  
                  <div className={style.container}>
                        <div className={style.category}>
                              <h2 className={cn(style.title, style.categoryTitle)}>Каталог</h2>
                              <ul className={style.categoryList}>
                                    { list.map((item) => (
                                          <li key={item.link}>
                                                <h3 className={style.categorySubtitle}>
                                                      <NavLink className={style.link} to={item.link}> {item.title} </NavLink>
                                                </h3>
                                               
                                                <ul className={style.categorySublist}>
                                                      { item.categories.map((categoryItem) => (                                   // возвращает верстку, у каждого элемента спсика долен быть key. NavLink -встроенный компнент в react-dom, вместо href используем to, className может приимать фукнию. Дестурктрировали встроенное свойоство isActive(ссылка активная)
                                                            <li key={categoryItem.link}>
                                                                  <NavLink className={style.link} to={`${item.link}/${categoryItem.link}`}> {categoryItem.title} </NavLink>
                                                            </li>
                                                         )
                                                      )}    
                                                </ul>
                                          </li>
                                    )) }   
                              </ul>
                        </div>

                        <div className={style.social}> 
                              <h2 className={style.socialTitle}>Связаться с нами</h2>
                              <p className={style.socialSubtitle}>Контакты и адреса магазинов </p>
                              <ul className={style.socialList}>
                                    <li>
                                          <a className={style.socialLinkFB}></a>
                                    </li>
                                    <li>
                                          <a className={style.socialLinkVK}></a>
                                    </li>
                              </ul>
                        </div>

                        <div className={style.contacts}>
                              <a className={style.link} href="mailto:Inspired@gmail.com">inspired@gmail.com</a>
                              <a className={style.link} href="tel:89304902620">8 930 490 26 20</a>
                        </div>

                        <div className={style.copyright}>
                              <p>© INSPIRED, 2023</p>
                        </div>

                        <div className={style.development}>
                              <ul className={style.developmentList}>
                                    <li className={style.link}>Designer: Anastasia Ilina</li>
                                    <li className={style.link}>Руфина</li>
                              </ul>
                        </div>
                  </div>
            </Container>
      </footer>
      
);
      
