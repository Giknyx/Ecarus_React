import { FC } from 'react';
import image from '../../../assets/recycling-place.png';
import { Icon } from '../../ui/icon/Icon';
import './RecyclingPlaceLarge.sass';

interface Props {
  onClick: (a: boolean) => void;
}

const RecyclingPlaceLarge: FC<Props> = ({ onClick }) => {
  return (
    <div className="rp-container">
      <button
        className="back_btn"
        onClick={() => {
          onClick(false);
        }}
      >
        <Icon name="back" width={15} height={20} />
        <p>Вернуться назад</p>
      </button>
      <div className="big_card_info">
        <div className="image">
          <img src={image} alt="Garbage" />
        </div>
        <div className="information">
          <div className="address">
            <h3>​Казань, Кремлёвская, 88</h3>
            <p>+7 (917) 888 88 88</p>
          </div>
          <div className="timetable">
            <p>Пн - Пт 08:00 - 20:00</p>
            <p>Сб - Вс 10:00 - 18:00</p>
          </div>
          <div className="places">
            <h3>H&M</h3>
            <div className="items">
              <div className="item">Пластик: от 5 кг</div>
              <div className="item">Стекло: от 2 кг</div>
              <div className="item">Бумага: от 10 кг</div>
              <div className="item">Батареи: от 2 кг</div>
            </div>
          </div>
          <div className="places">
            <h3>Adidas</h3>
            <div className="items">
              <div className="item">Пластик: от 5 кг</div>
              <div className="item">Стекло: от 2 кг</div>
              <div className="item">Бумага: от 10 кг</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecyclingPlaceLarge;
