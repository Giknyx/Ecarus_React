import cn from 'classnames';
import { FC } from 'react';
import './Button.sass';

interface Props {
  title: string;
  background: string;
  onClick?: any;
  type?: any;
}

export const Button: FC<Props> = ({ title, background, onClick, type }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={cn('btn', `btn-${background}`)}
    >
      {title}
    </button>
  );
};
