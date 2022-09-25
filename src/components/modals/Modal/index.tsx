import './index.sass';
import { FC } from 'react';

interface Props {
  onClose?: () => void;
}

export const Modal: FC<Props> = ({ onClose, children }) => {
  return (
    <div className="overlay">
      <div className="modal-signIn-wrapper">{children}</div>
    </div>
  );
};
