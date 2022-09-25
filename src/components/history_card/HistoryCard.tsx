import './HistoryCard.sass';
import { FC } from 'react';
import currency from '../../assets/currency.png';

interface Props {
  address?: string;
  material?: string;
  date?: string;
  cost?: number;
}

export const HistoryCard: FC<Props> = ({ address, material, date, cost }) => {
  return (
    <div className="history-card-wrapper">
      <div className="history-information-wrapper">
        <span>
          <h5>Адрес</h5>
          <p>{address ?? 'Казань, Кремлёвская, 88'}</p>
        </span>
        <span>
          <h5>Материал</h5>
          <p>{material ?? 'Пластик: 1 кг'}</p>
        </span>
        <span>
          <h5>Дата</h5>
          <p>{date ?? '25.09.2021'}</p>
        </span>
      </div>
      <div className="cost-wrapper">
        <img src={currency} alt="currency" />
        <h4>{cost ?? '1000'}</h4>
      </div>
    </div>
  );
};
