import { FC } from 'react';
import './Checkbox.sass';

interface Props {
  title: string;
  isChecked: boolean;
  onChange: any;
  index?: number;
}

export const Checkbox: FC<Props> = ({ title, isChecked, onChange, index }) => {
  return (
    <div className="checkbox-wrapper">
      <label className="checkbox">
        <input
          type="checkbox"
          id={`checkbox-${index}`}
          checked={isChecked}
          onChange={onChange}
        />
        <span>{title}</span>
      </label>
    </div>
  );
};
