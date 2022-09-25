import React, { useState } from 'react';
import { Filters } from '../../components/filters/Filters';
import Nike from '../../assets/nike.png';
import Nike_Crocs from '../../assets/nike_crocs.png';
import Adidas_Crocs from '../../assets/adidas_crocs.png';
import hudi from '../../assets/hudi.png';
import Product from '../../components/product_card/Product';
import ButtonFilter from '../../components/ui/buttons/filter/ButtonFilter';
import './Market.sass';

interface Props {
  producer: string;
  title: string;
  gender: string;
  price: string;
  img: string;
}

const Market = () => {
  const [activeFilter, setActive] = useState(0);
  const products: Array<Props> = [
    {
      producer: 'NIKE',
      title: 'Nike Air Max 2022',
      gender: 'Мужская обувь',
      price: '1000',
      img: Nike,
    },
    {
      producer: 'Adidas',
      title: 'Adidas Alphabounce RC',
      gender: 'Мужская обувь',
      price: '1200',
      img: Nike_Crocs,
    },
    {
      producer: 'H&M',
      title: 'Nike Air Max 2021',
      gender: 'Мужское худи',
      price: '1000',
      img: hudi,
    },
    {
      producer: 'NIKE',
      title: 'Nike Air Force 1 Low',
      gender: 'Мужская обувь',
      price: '2100',
      img: Adidas_Crocs,
    },
  ];
  return (
    <div className="page-content market-content">
      <div className="market-header">
        <h1>ЭкоМаркет</h1>
        <div className="filters">
          <ButtonFilter
            title="По популярности"
            active={activeFilter === 0}
            id={0}
            onClick={setActive}
          />
          <ButtonFilter
            title="По цене"
            active={activeFilter === 1}
            id={1}
            onClick={setActive}
          />
          <ButtonFilter
            title="По новизне"
            active={activeFilter === 2}
            id={2}
            onClick={setActive}
          />
        </div>
      </div>
      <div className="table">
        <div className="filters-wrapper">
          <Filters />
        </div>
        <div className="table-products">
          {products.map((item) => (
            <Product
              key={item.title}
              title={item.title}
              gender={item.gender}
              price={item.price}
              path={item.img}
              producer={item.producer}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Market;
