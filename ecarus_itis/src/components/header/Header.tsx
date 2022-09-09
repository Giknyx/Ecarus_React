import './Header.sass';
import { NavLink } from 'react-router-dom';
import logo from '../../svg-icons/logo.svg';
import { Icon } from '../ui/icon/Icon';

export const Header = () => {
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
              to="about"
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
          <NavLink to={'profile'} className="login">
            <Icon name="login" height="24" width="24" />
            <span className="header_span">Войти</span>
          </NavLink>
        </div>
      </div>
    </header>
  );
};
