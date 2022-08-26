import welcome from './welcome.module.sass';

function Welcome() {

  return (
    <div className={welcome.welcome}>
      <div className={welcome.title}>
        Все спортивные площадки Грозного в&nbsp;одном месте
      </div>
      <div className={welcome.subtitle}>
        Лучший способ забронировать или найти команду в&nbsp;нашем городе
      </div>
      <div className={welcome.filtration}>

      </div>
    </div>
  )
};
export default Welcome;