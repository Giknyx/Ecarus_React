import './Cards.sass';
import { Icon } from '../ui/icon/Icon';
import { useNavigate } from 'react-router-dom';

export const Cards = () => {
  const router = useNavigate();

  return (
    <div className="сards-container">
      <div className="card">
        <h3 className="card_h3">Пункты сбора</h3>
        <p className="card_p">
          Посмотри, где в твоем городе
          <br />
          можно сдать вторсырье <br />
          на переработку
        </p>
        <button className="btn-arrow" onClick={() => router('/map')}>
          <Icon name="arrow_button" height={24} width={24} />
        </button>
      </div>

      <div className="card">
        <h3 className="card_h3">Экомаркет</h3>
        <p className="card_p">
          Используй заработанные
          <br />
          экокоины для покупки товаров <br />
          из переработанных материалов
        </p>
        <button className="btn-arrow" onClick={() => router('/market')}>
          <Icon name="arrow_button" height={24} width={24} />
        </button>
      </div>
    </div>
  );
};
