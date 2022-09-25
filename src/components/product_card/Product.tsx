import React, { FC } from 'react';
import './Product.sass';
import currency from '../../assets/currency.png';
import { useSpring, animated } from 'react-spring';

interface Props {
  producer: string;
  title: string;
  gender: string;
  price: string;
  path: string;
}

const Product: FC<Props> = ({ producer, title, gender, price, path }) => {
  const [isBooped, setIsBooped] = React.useState(false);

  const styling = useSpring({
    transform: isBooped ? 'translate(0px, 10px)' : 'translate(0px, 0px)',
    config: {
      tension: 300,
      friction: 10,
    },
  });

  return (
    <animated.div
      onMouseEnter={() => setIsBooped(true)}
      onMouseOut={() => setIsBooped(false)}
      style={styling}
      className="product"
    >
      <div className="producer">
        <p>{producer}</p>
      </div>
      <button className="img-button">
        <img className="img-product" src={path} alt="img-product" />
      </button>

      <h4>{title}</h4>
      <p className="description">{gender}</p>

      <div className="balance">
        <img className="logo-balance" src={currency} alt="img-product" />
        <p className="count">{price}</p>
      </div>
    </animated.div>
  );
};

export default Product;
