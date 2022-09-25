import React, { FC } from 'react';
import './ButtonFilter.sass';
import cn from 'classnames';

interface Props {
  title: string;
  active: boolean;
  id: number;
  onClick: (active: number) => void;
}

const ButtonFilter: FC<Props> = ({ title, active, id, onClick }) => {
  return (
    <button
      className={cn('button-filter', { active: active })}
      onClick={() => onClick(id)}
    >
      {title}
    </button>
  );
};

export default ButtonFilter;
