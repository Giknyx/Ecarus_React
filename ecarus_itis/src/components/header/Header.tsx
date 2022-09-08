import './Header.sass';
import { Link } from 'react-router-dom';
import logo from '../../svg-icons/logo.svg';
import { Icon } from '../ui/icon/Icon';

export const Header = () => {
  return (
    <header>
      <div className="header_wrapper">
        <div className="header_nav">
          <img src={logo} alt="logo" className="logo" />
          <nav>
            <Link to="/" className="main">
              Главная
            </Link>
            <Link to="map">Пункты сбора</Link>
            <Link to="market">ЭкоМаркет</Link>
            <Link to="about">О сервисе</Link>
          </nav>
        </div>

        <div className="header_controls">
          <button className="location">
            <Icon name="location" height="24" width="24" />
            <span>Казань</span>
          </button>
          <button className="login">
            <Icon name="login" height="24" width="24" />
            <span>Войти</span>
          </button>
        </div>
      </div>
    </header>
  );
};
