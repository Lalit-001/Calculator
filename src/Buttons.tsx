import React, { FC, ReactNode } from "react";
type props = { items: string; ClickButton(e: any): void };
const Buttons: FC<props> = ({ items, ClickButton }) => {
  return (
    <div
      className="text-3xl font-bold border border-black rounded-md text-center hover:cursor-pointer"
      onClick={ClickButton}
      data-cell-index={items}
      key={items}
    >
      {items}
    </div>
  );
};

export default Buttons;
