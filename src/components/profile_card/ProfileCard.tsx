import './ProfileCard.sass';
import { FC } from 'react';
import { Button } from '../ui/buttons/large/Button';

interface Props {
  image: string;
  name: string;
  telephone: string;
  email: string;
}

export const ProfileCard: FC<Props> = ({ image, name, telephone, email }) => {
  return (
    <div className="profile-card-wrapper">
      <div className="information-profile-wrapper">
        <img src={image} alt="Фото профиля" />
        <div className="information-about-user">
          <h3>{name}</h3>
          <p>{telephone}</p>
          <p>{email}</p>
        </div>
        <Button title={'Редактировать'} background={'grey'} />
      </div>
    </div>
  );
};
