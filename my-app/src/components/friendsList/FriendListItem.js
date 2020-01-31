import React from "react";
import css from "./FriendList.module.css";

const FriendListItem = ({ itemChild }) => {
  return (
    <>
      <li className={css.item}>
        <span
          className={itemChild.isOnline === true ? css.inactive : css.active}
        >
          {itemChild.isOnline}
        </span>
        <img className={css.avatar} src={itemChild.avatar} alt="" width="48" />
        <p className={css.name}>{itemChild.name}</p>
      </li>
    </>
  );
};

export default FriendListItem;
