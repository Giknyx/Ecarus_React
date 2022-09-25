import SwiperCore, { Navigation } from 'swiper';
import { Icon } from '../ui/icon/Icon';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Slider.sass';
import 'swiper/css';
import 'swiper/css/navigation';

SwiperCore.use([Navigation]);

export const Slider = () => {
  return (
    <div className="slider">
      <div className="swiper-button-prev-new">
        <Icon name="arrow_left" height={24} width={24} />
      </div>
      <Swiper
        navigation={{
          nextEl: '.swiper-button-next-new',
          prevEl: '.swiper-button-prev-new',
        }}
        pagination
        speed={500}
        spaceBetween={300}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <div className="background-first">
            <div className="info">
              <h2 className="slider_h2">Сделаем мир чище</h2>
              <p className="slider_p">
                Сдай макулатуру или старую одежду и получи скидку
                <br />
                на покупку товаров из переработанных материалов
              </p>
              <button className="btn-slide">Условия сервиса</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="background-second">
            <div className="info">
              <h2 className="slider_h2">А вы знали...</h2>
              <p className="slider_p">
                Что среднее время разложения пластмассовых изделий колеблется
                <br />
                от 400 до 700 лет, а полиэтиленовых пакетов — от 100 до 200 лет?
              </p>
              <button className="btn-slide">Узнать больше</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="background-third">
            <div className="info">
              <h2 className="slider_h2">Что с масками?</h2>
              <p className="slider_p">
                Медицинские маски не обязательно должны становиться отходами.
                <br />
                Их тоже можно сдать на переработку.
              </p>
              <button className="btn-slide">Пункты сбора масок</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="swiper-button-next-new">
        <Icon name="arrow_right" height={24} width={24} />
      </div>
    </div>
  );
};
