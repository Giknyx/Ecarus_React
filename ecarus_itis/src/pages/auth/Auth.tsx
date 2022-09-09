import './Auth.sass';
import { NavLink, Outlet } from 'react-router-dom';
import profileImg from '../../assets/profile1.png';
import { ProfileCard } from '../../components/profile_card/ProfileCard';

export const Auth = () => {
  return (
    <div className="auth-page-wrapper page-content">
      <h1>Личный кабинет</h1>
      <div className="auth-information-wrapper">
        <ProfileCard
          image={profileImg}
          name={'Алексей Петрович'}
          telephone={'+7 (917) 888 88 88'}
          email={'ivanov@gmail.com'}
        />
        <div className="promocode-and-history-wrapper">
          <div className="promocode-history-nav">
            <NavLink
              to={'promocodes'}
              className={({ isActive }) => (isActive ? 'active' : 'no-active')}
              children={'Промокоды'}
            />
            <NavLink
              to={'histories'}
              className={({ isActive }) => (isActive ? 'active' : 'no-active')}
              children={'История'}
            />
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
