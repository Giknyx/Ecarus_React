import { Cards } from '../../components/cards/Cards';
import { Slider } from '../../components/slider/Slider';

export const Home = () => {
  return (
    <div className="page-content">
      <Slider />
      <Cards />
    </div>
  );
};
