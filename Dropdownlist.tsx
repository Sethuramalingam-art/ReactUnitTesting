import React, { useEffect, useState } from "react";
import { Button } from "./Button";

export interface DataItem {
  value: string;
  label: string;
}

export interface DropdownlistProps {
  data: DataItem[];
  onRemoveItem: (item: DataItem, index: number) => void;
  labels: {
    show: string;
    hide: string;
  };
}

export const Dropdownlist = ({
  data,
  onRemoveItem,
  labels,
}: DropdownlistProps) => {
  const [dropdownOpened, setDropdownOpened] = useState<Boolean>(false);
  const toggleVisibiltiy = () => setDropdownOpened((opened) => !opened);
  return (
    <div>
      <Button
        onClick={toggleVisibiltiy}
        label={dropdownOpened ? labels.hide : labels.show}
      ></Button>

      {dropdownOpened && (
        <ul data-testid="dropdown-ul">
          {data.map((item, index) => (
            <li key={item.value} data-testid={`dropdown-li-${item.value}`}>
              {item.label}
              <button onClick={() => onRemoveItem(item, index)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
