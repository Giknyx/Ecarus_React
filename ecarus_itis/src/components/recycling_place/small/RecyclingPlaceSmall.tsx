import './RecyclingPlaceSmall.sass';
import image from '../../../assets/recycling-place.png';
import { FC } from 'react';

interface Props {
  address: string;
  description: string;
  onClick: (a: boolean) => void;
}

export const RecyclingPlaceSmall: FC<Props> = ({
  address,
  description,
  onClick,
}) => {
  return (
    <button className="recycling-place-container" onClick={() => onClick(true)}>
      <div className="recycling-place-content">
        <img src={image} alt="Recycling Place" />
        <div className="recycling-place-information">
          <h3>{address}</h3>
          <p>{description}</p>
        </div>
      </div>
    </button>
  );
};
