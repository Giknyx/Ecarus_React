import { FC } from 'react';

interface Props {
  name: string;
  height: number | string;
  width: number | string;
}

export const Icon: FC<Props> = ({ name, height, width }) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      <use xlinkHref={`/sprite.svg#${name}`} />
    </svg>
  );
};
