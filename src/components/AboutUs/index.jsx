import about from "./about.module.sass";
import logo from "./logooo.png";
import logo1 from "./logo3.png"
import logo2 from "./logo5.png";

function AboutUs() {
  return (
    <div className={about.about}>
      <div className={about.name}>
        <ul>
          <h1>FindMyGame - быстрый поиск и бронирование спортивных площадок</h1>
          <p>
            Находите нужные локации в Чеченской Республике с помощью десятков
            фильтров, бронируйте и оплачивайте аренду в несколько кликов
          </p>
        </ul>
        <img src={logo} alt="" />
      </div>
      <div className={about.orange}>
        <h1>Играй во что хочешь и где хочешь</h1>
      </div>
      <div className={about.data}>
        <img src={logo1} alt="" />
        <ul>
          <h1>Выбирайте дату и время</h1>
          <p>
            Мы предложим только те площадки, которые свободны в нужное вам
            время.
          </p>
        </ul>
      </div>
      <div className={about.orange}>
        <h1>Бронируйте площадку прямо на сайте</h1>
      </div>
      <div className={about.sport}>
        <img src={logo2} alt="" />
        <ul>
          <h1>Занимайтесь разными видами спорта</h1>
          <p>
            Отбирайте подходящие места для игры в футбол, баскетбол, воллейбол
            или теннис.
          </p>
        </ul>
      </div>
    </div>
  );
}

export default AboutUs;
