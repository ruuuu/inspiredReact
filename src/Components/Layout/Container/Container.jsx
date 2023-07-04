import cn from 'classnames';   // сами установили плагин эот
import style from './Container.module.scss';  // style={}

//console.log('style ', style);


// компонент
export const Container = ({ className, children }) => (  // props = { className, children }  объект

   // <div className={`container ${props.className}`}>
   // .container-класс в Container.module.scss:
   <div className={cn(style.container, className)}> {children} </div> 
      /* children - встроенное свойство  */
   
)