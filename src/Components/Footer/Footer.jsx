import cn from 'classnames';  
import { Container } from '../Layout/Container/Container.jsx';
import style from './Footer.module.scss';   // style={}
//import logo from '../../../assets/logo.svg';


// компонент
export const Footer = () => ( 
      <footer>  
            <Container>  
                  <div className={style.container}>
                        <div className={style.category}>
                              <h2 className={style.categoryTitle}>Каталог</h2>
                              <ul className={style.categoryList}>
                                    <li>
                                          <h3 className={style.categorySubtitle}>Женское</h3>
                                          <ul className={style.categorySublist}>
                                                <li>
                                                      <a className={style.link}>Бюстгальтеры</a>
                                                </li>
                                                <li>
                                                      <a className={style.link}>Трусы</a>
                                                </li>
                                                <li>
                                                      <a className={style.link}>Носки </a>
                                                </li>
                                                <li>
                                                      <a className={style.link}>Халаты</a>
                                                </li>
                                                <li>
                                                      <a className={style.link}>Термобелье</a>
                                                </li>
                                                <li>
                                                      <a className={style.link}>Пижамы</a>
                                                </li>
                                          </ul>
                                    </li>
                                    <li>
                                          <h3 className={style.categorySubtitle}>Мужское</h3>
                                          <ul className={style.categorySublist}>
                                                <li>
                                                      <a className={style.link}>Трусы</a>
                                                </li>
                                                <li>
                                                      <a className={style.link}>Носки </a>
                                                </li>
                                                <li>
                                                      <a className={style.link}>Халаты</a>
                                                </li>
                                                <li>
                                                      <a className={style.link}>Термобелье</a>
                                                </li>
                                                <li>
                                                      <a className={style.link}>Пижамы</a>
                                                </li>
                                          </ul>
                                    </li>
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
      
)
      
