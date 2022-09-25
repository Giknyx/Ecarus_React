import React, { FC, useEffect, useRef, useState } from 'react';
import { Checkbox } from '../checkboxes/Checkbox';
import { Icon } from '../icon/Icon';
import './DropDown.sass';

interface Item {
  name: string;
  checked: boolean;
}

interface DropDownProps {
  placeholder: string;
  plural: string;
  items: Item[];
}

function useOutsideAlerter(
  ref: React.MutableRefObject<any>,
  setIsActive: (a: boolean) => void
) {
  useEffect(() => {
    function handleClickOutside(event: { target: any }) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsActive(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, setIsActive]);
}

const DropDown: FC<DropDownProps> = ({ placeholder, plural, items }) => {
  const [isActive, setIsActive] = useState(false);
  const [itemList, setItemList] = useState(items);
  const [selected, setSelected] = useState<string[]>([]);
  const ref = useRef(null);
  useOutsideAlerter(ref, setIsActive);

  const checkItems = (index: number) => {
    setItemList(
      itemList.map((item: Item, currentIndex: number) =>
        currentIndex === index ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return (
    <div className="dropdown_container" ref={ref}>
      <button className="dropdown_btn" onClick={() => setIsActive(!isActive)}>
        {selected.length === 0
          ? placeholder
          : selected.length === 1
          ? selected[0]
          : `Выбрано ${selected.length} ${plural}`}
        <Icon width={16} height={16} name="keyboard_arrow_down"></Icon>
      </button>
      {isActive && (
        <div className="dropdown_content">
          {itemList.map((item, id) => (
            <Checkbox
              key={item.name}
              title={item.name}
              isChecked={item.checked}
              onChange={() => {
                selected.includes(item.name)
                  ? setSelected(selected.filter((obj) => obj !== item.name))
                  : selected.push(item.name);
                checkItems(id);
                console.log(selected);
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
