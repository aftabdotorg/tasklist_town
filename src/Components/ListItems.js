import React from 'react';
import '../Components/ListItems.css';
import FlipMove from 'react-flip-move';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

const ListItems = (props) => {
  const items = props.items;
  const listItems = items.map((item, index) => {
    // const handleEdit = (e) => {
    //   handleChange(e,item);
    // };

    // const handleChange = (e, item) => {
    //   props.setUpdate(e, item.key);
    // };

    return (
      <div className="list" key={index}>
        <p>
          <input
            type="text"
            id={item.key}
            value={item.text}
            onChange={(e) => props.setUpdate(e.target.value, item.key)}
            // onChange={(e) => handleChange(e.target.value,item.key)}
          />
          <span>
            <FontAwesomeIcon
              icon={faEdit}
              //  onClick={handleEdit}
            />
            <FontAwesomeIcon
              className="faicons"
              icon="trash"
              onClick={() => props.deleteItem(item.key)}
            ></FontAwesomeIcon>
          </span>
        </p>
      </div>
    );
  });

  return (
    <div>
      <FlipMove>{listItems}</FlipMove>;
    </div>
  );
};

export default ListItems;
