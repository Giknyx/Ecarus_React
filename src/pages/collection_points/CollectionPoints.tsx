import React, { useState } from 'react';
import DropDown from '../../components/ui/dropdown/DropDown';
import SearchBar from '../../components/ui/search_bar/SearchBar';
import './CollectionPoints.sass';
import Map from '../../components/map/Map';
import { RecyclingPlaceSmall } from '../../components/recycling_place/small/RecyclingPlaceSmall';
import RecyclingPlaceLarge from '../../components/recycling_place/large/RecyclingPlaceLarge';

export const CollectionPoints = () => {
  const [placeOpened, setPlaceOpened] = useState(false);

  return (
    <div className="page-content">
      <div className="container">
        <div className="controls">
          <SearchBar />
          <DropDown
            placeholder="Магазины"
            plural="магазинов"
            items={[
              { name: 'H&M', checked: false },
              { name: 'P&B', checked: false },
              { name: 'Adidas', checked: false },
              { name: 'Nike', checked: false },
              { name: 'Reebok', checked: false },
            ]}
          />
          <DropDown
            placeholder="Материалы"
            plural="материалов"
            items={[
              { name: 'Пластик', checked: false },
              { name: 'Бумага', checked: false },
              { name: 'Металл', checked: false },
            ]}
          />
        </div>
        {placeOpened ? (
          <div className="large_card">
            <RecyclingPlaceLarge onClick={setPlaceOpened} />
          </div>
        ) : (
          <div className="cards-container">
            <RecyclingPlaceSmall
              address={'ул.Кремлёвская, 88'}
              description={'Стекло, бумага, металл, старая одежда, батареи'}
              onClick={setPlaceOpened}
            />
            <RecyclingPlaceSmall
              address={'ул.Кремлёвская, 88'}
              description={'Стекло, бумага, металл, старая одежда, батареи'}
              onClick={setPlaceOpened}
            />
            <RecyclingPlaceSmall
              address={'ул.Кремлёвская, 88'}
              description={'Стекло, бумага, металл, старая одежда, батареи'}
              onClick={setPlaceOpened}
            />
          </div>
        )}
      </div>
      <Map />
    </div>
  );
};
