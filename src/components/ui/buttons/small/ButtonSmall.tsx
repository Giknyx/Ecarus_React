import { FC } from 'react';
import './ButtonSmall.sass';
import cn from 'classnames';

interface Props {
  title: string;
  background: string;
  onClick?: any;
  type?: any;
}

export const ButtonSmall: FC<Props> = ({
  title,
  background,
  onClick,
  type,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={cn('btn-small', `btn-small-${background}`)}
    >
      {title}
    </button>
  );
};
