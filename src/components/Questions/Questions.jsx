import React from "react";
import style from "./questions.module.sass";
import { FaTelegram } from "react-icons/fa";

const Questions = () => {
  return (
    <div>
      <div className={style.questionsContent}>
        <h2 className={style.header}>Вопросы и ответы</h2>
        <div className={style.questionDivContent}>
          <span className={style.title} role="presentation">
            <span className={style.question}>
              Стоимость бронирования на FindMyGame отличается от стоимости на
              площадке?
            </span>
          </span>
          <div aria-expanded="true">
            <div role="region">
              Наши цены идентичны ценам самих площадок. Если вы увидели у нас
              цену выше — сообщите нам. Мы исправим цену, а вам предоставим
              дополнительную скидку.
            </div>
          </div>
        </div>
        <div className={style.questionDivContent}>
          <span className={style.title} role="presentation">
            <span className={style.question}>
              В чём удобство бронирования через нас?
            </span>
          </span>
          <div aria-expanded="true">
            <div role="region">
              Мы помогаем искать доступное время по всем спортивным площадкам
              сразу. А цены даём такие же, как если бы вы бронировали на
              площадке. FindMyGame помогает экономить ваше время и деньги.
            </div>
          </div>
        </div>
        <div className={style.questionDivContent}>
          <span className={style.title} role="presentation">
            <span className={style.question}>
              После оплаты я сразу могу ехать на площадку?
            </span>
          </span>
          <div aria-expanded="true">
            <div role="region">
              Да, если у площадки есть знак ⚡. В остальных случаях нам нужно
              10-15 минут, чтобы подтвердить бронирование.
            </div>
          </div>
        </div>
        <div className={style.questionDivContent}>
          <span className={style.title} role="presentation">
            <span className={style.question}>
              Что будет, если площадка не подтвердит бронирование?
            </span>
          </span>
          <div aria-expanded="true">
            <div role="region">
              Наш менеджер либо предложит вам другой удобный вариант, либо мы
              вернём деньги.
            </div>
          </div>
        </div>
        <div className={style.questionDivContent}>
          <span className={style.title} role="presentation">
            <span className={style.question}>
              Как быстро возвращаются деньги в случае отмены?
            </span>
          </span>
          <div aria-expanded="true">
            <div role="region">
              Мы проводим возврат в течение 1 часа. Дальше всё зависит от вашего
              банка. Обычно операция отмены проходит на следующий рабочий день.
            </div>
          </div>
        </div>
        <div className={style.questionDivContent}>
          <span className={style.title} role="presentation">
            <span className={style.question}>
              Что нужно сообщить площадке для начала игры?
            </span>
          </span>
          <div aria-expanded="true">
            <div role="region">
              Мы отправим вам в SMS или E-mail секретный код. Именно его и нужно
              сообщить менеджеру площадки.
            </div>
          </div>
        </div>
        <div className={style.questionDivContent}>
          <span className={style.title} role="presentation">
            <span className={style.question}>Могу ли я отменить бронь?</span>
          </span>
          <div aria-expanded="true">
            <div role="region">Да, если до начала игры больше 24 часов.</div>
          </div>
        </div>
        <div className={style.questionDivContent}>
          <span className={style.title} role="presentation">
            <span className={style.question}>
              Можно ли перенести бронирование?
            </span>
          </span>
          <div aria-expanded="true">
            <div role="region">
              Да, если до начала игры больше 24 часов. Если меньше, то только с
              согласия спортивной площадки. Мы поможем вам в этом вопросе.
            </div>
          </div>
        </div>
        <div className={style.questionDivContent}>
          <span className={style.title} role="presentation">
            <span className={style.question}>
              Сколько человек может приехать на игру?
            </span>
          </span>
          <div aria-expanded="true">
            <div role="region">
              Зависит от площадки. Условия по максимальному количеству игроков
              написаны на странице площадки.
            </div>
          </div>
        </div>
      </div>
      <div className={style.telegramDiv}>
        <div className={style.telegramContent}>
          <h3>
            Если вы не нашли ответа на свой вопрос, вы можете задать его нам в
            <a href="https://web.telegram.org/z/#-1427067020" target="blank">
              Telegram
            </a>
          </h3>
          <FaTelegram className={style.iconTelegram} />
        </div>
      </div>
    </div>
  );
};

export default Questions;
