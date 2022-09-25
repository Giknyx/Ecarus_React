import './Header.sass';
import { NavLink } from 'react-router-dom';
import logo from '../../svg-icons/logo.svg';
import { Icon } from '../ui/icon/Icon';
import { useStores } from '../../utils/use-stores-hook';
import { SignInModal } from '../modals/SignInModal/SignInModal';
import { observer } from 'mobx-react';
import profileImg from '../../assets/profile1.png';
import currency from '../../assets/currency.png';
import { useState } from 'react';

export const Header = observer(() => {
  const [logged, setLogged] = useState(false);

  const {
    modalStore: { setCurrentModal },
  } = useStores();

  const openModal = () => {
    setCurrentModal(SignInModal);
  };

  return (
    <header>
      <div className="header_wrapper">
        <div className="header_nav_container">
          <img src={logo} alt="logo" className="logo" />
          <nav className="header_nav">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'header_a activated' : 'header_a'
              }
            >
              Главная
            </NavLink>
            <NavLink
              to="map"
              className={({ isActive }) =>
                isActive ? 'header_a activated' : 'header_a'
              }
            >
              Пункты сбора
            </NavLink>
            <NavLink
              to="market"
              className={({ isActive }) =>
                isActive ? 'header_a activated' : 'header_a'
              }
            >
              ЭкоМаркет
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? 'header_a activated' : 'header_a'
              }
            >
              О сервисе
            </NavLink>
          </nav>
        </div>

        <div className="header_controls">
          <button className="location">
            <Icon name="location" height="24" width="24" />
            <span className="header_span">Казань</span>
          </button>
          {!logged ? (
            <button className="login" onClick={openModal}>
              <Icon name="login" height="24" width="24" />
              <span className="header_span">Войти</span>
            </button>
          ) : (
            <>
              <img
                src={currency}
                alt="currency"
                height="24"
                width="24"
                className="header_img"
              />
              <span className="header_span">1000</span>

              <img
                src={profileImg}
                alt="Профиль"
                height="24"
                width="24"
                className="header_img"
              />
              <span className="header_span">Алексей</span>
            </>
          )}
        </div>
      </div>
    </header>
  );
});
