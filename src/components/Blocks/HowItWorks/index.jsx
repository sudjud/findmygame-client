import block from "../block.module.sass";

function HowItWorks() {
  return (
    <div className={block.howItWorks}>
      <div className={block.howItWorks__title}>Как это работает?</div>
      <div className={block.howItWorks__items}>
        <div className={block.howItWorks__item_left}>Выбирайте</div>
        <div className={block.howItWorks__item_right}>
          Подбирайте площадки под удобные дату и&nbsp;время, используйте
          полезные фильтры по&nbsp;услугам, покрытию или месторасположению.
        </div>

        <div className={block.howItWorks__item_left}>Собирайте</div>
        <div className={block.howItWorks__item_right}>
          Создавайте лобби и&nbsp;собирайте команды по&nbsp;своим предпочтениям.
          Как только соберется команда, вам придет уведомление на&nbsp;telegram!
        </div>

        <div className={block.howItWorks__item_left}>Бронируйте</div>
        <div className={block.howItWorks__item_right}>
          Как только вы&nbsp;найдёте идеальное место: корт или площадку,
          выберите удобную дату и&nbsp;время&nbsp;&mdash; просто забронируйте.
        </div>

        <div className={block.howItWorks__item_left}>Играйте</div>
        <div className={block.howItWorks__item_right}>
          Наслаждайтесь! Приятной игры!
        </div>
      </div>
    </div>
  );
}
export default HowItWorks;
