import './Footer.sass';
import { Icon } from '../ui/icon/Icon';

export const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="mail">
          <Icon name="mail" height={24} width={24} />
          <p>info@ecorus.ru</p>
        </div>

        <div className="call">
          <Icon name="call" height={24} width={24} />
          <p>+7 (800) 880-88-88</p>
        </div>
      </div>
    </footer>
  );
};
