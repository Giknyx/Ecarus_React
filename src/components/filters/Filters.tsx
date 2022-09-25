import React, { useState } from 'react';
import { Checkbox } from '../ui/checkboxes/Checkbox';

interface Product {
  name: string;
  checked: boolean;
}

const allGenders: Product[] = [
  { name: 'Мужской', checked: false },
  { name: 'Женский', checked: false },
];

const allTypes: Product[] = [
  { name: 'Одежда', checked: false },
  { name: 'Обувь', checked: false },
  { name: 'Аксессуары', checked: false },
];

const allBrands: Product[] = [
  { name: 'H&M', checked: false },
  { name: 'P&B', checked: false },
  { name: 'Adidas', checked: false },
  { name: 'Nike', checked: false },
  { name: 'Rebook', checked: false },
];

export const Filters = () => {
  const [genders, setGenders] = useState(allGenders);
  const [types, setTypes] = useState(allTypes);
  const [brands, setBrands] = useState(allBrands);
  const [allTypesChecked, setAllTypes] = useState(false);
  const [allBrandsChecked, setAllBrands] = useState(false);

  const checkStatusProducts = (
    index: number,
    setProducts: any,
    products: Product[]
  ) => {
    setProducts(
      products.map((product: Product, currentIndex: number) =>
        currentIndex === index
          ? { ...product, checked: !product.checked }
          : product
      )
    );
  };

  const checkStatusAllProducts = (
    isAllProducts: boolean,
    setAllProducts: any,
    setProducts: any,
    products: Product[]
  ) => {
    setAllProducts(!isAllProducts);
    setProducts(
      products.map((product: Product) =>
        isAllProducts
          ? { ...product, checked: false }
          : { ...product, checked: true }
      )
    );
  };

  return (
    <aside>
      <div className="block-of-filter">
        <h5 className="market_h5">Пол</h5>
        {genders.map((gender, index) => (
          <Checkbox
            key={index}
            isChecked={gender.checked}
            onChange={() => checkStatusProducts(index, setGenders, genders)}
            title={gender.name}
            index={index}
          />
        ))}
      </div>

      <div className="block-of-filter">
        <h5 className="market_h5">Тип товара</h5>
        <Checkbox
          isChecked={allTypesChecked}
          onChange={() =>
            checkStatusAllProducts(
              allTypesChecked,
              setAllTypes,
              setTypes,
              types
            )
          }
          title={'Выбрать все'}
        />
        {types.map((type, index) => (
          <Checkbox
            key={index}
            isChecked={type.checked}
            onChange={() => {
              if (type.checked) {
                setAllTypes(false);
              }
              checkStatusProducts(index, setTypes, types);
            }}
            title={type.name}
            index={index}
          />
        ))}
      </div>

      <div className="block-of-filter">
        <h5 className="market_h5">Бренд</h5>
        <Checkbox
          isChecked={allBrandsChecked}
          onChange={() =>
            checkStatusAllProducts(
              allBrandsChecked,
              setAllBrands,
              setBrands,
              brands
            )
          }
          title={'Выбрать все'}
        />
        {brands.map((brand, index) => (
          <Checkbox
            key={index}
            isChecked={brand.checked}
            onChange={() => {
              if (brand.checked) {
                setAllBrands(false);
              }
              checkStatusProducts(index, setBrands, brands);
            }}
            title={brand.name}
            index={index}
          />
        ))}
      </div>
    </aside>
  );
};
