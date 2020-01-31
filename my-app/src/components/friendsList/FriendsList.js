import React from "react";
import PropTypes from 'prop-types';
import FriendListItem from "./FriendListItem";
import css from "./FriendList.module.css"

const FriendsList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(elem => { 
     
        return(friends.length>0 && (<FriendListItem key={elem.id} className="item" itemChild={elem} >
          </FriendListItem>))
      })}

       
  
  

        {/* /* Произвольное кол-во FriendListItem, в зависимости от кол-ва объектов в
      // массиве  */}
    </ul>
  );
};

export default FriendsList;

FriendsList.propTypes= {
  items: PropTypes.arrayOf(PropTypes.shape({
    avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool
  }))
};
