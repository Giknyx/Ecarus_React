import { Cards } from '../../components/cards/Cards';
import { Footer } from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';
import { Slider } from '../../components/slider/Slider';

export const Home = () => {
  return (
    <div className="page-container">
      <div className="page-content">
        <Header />
        <Slider />
        <Cards />
      </div>
      <Footer />
    </div>
  );
};
