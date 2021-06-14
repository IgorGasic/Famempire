import React, { useState } from "react";
import { DropdownItems } from "../../data/DropdownItems";
import { List, Item, LinkItem } from "./DropdownStyled";

const Dropdown = (props) => {
  const [click] = useState(false);

  return (
    <>
      <List click={click} onClick={props.closeMobile}>
        {DropdownItems.map((item, index) => {
          const { title, path, cName } = item;
          return (
            <Item key={index}>
              <LinkItem className={cName} to={path}>
                {title}
              </LinkItem>
            </Item>
          );
        })}
      </List>
    </>
  );
};

export default Dropdown;
