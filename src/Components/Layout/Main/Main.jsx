import style from './Main.module.scss'; 


// атрибут className это props
//  компонент, возвращает верстку
export const Main = ({ children }) => (         // children - внутренность main 
     
      <div className={style.main}> 
            {children}                     {/* children-встроенный пропс  */}
      </div> 
);