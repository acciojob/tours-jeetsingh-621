import React, { useState } from 'react';

const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="tour">
      <img src={image} alt={name} className="tour-img" />
      <div className="tour-info">
        <h4 className="tour-name">{name}</h4>
        <h4 className="tour-price">${price}</h4>
        <p id={`tour-item-para-${id}`}>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button className="read-more-btn"  id={`see-more-${id}`}  onClick={() => setReadMore(!readMore)}>
            {readMore ? 'Show less' : 'See more'}
          </button>
        </p>
        <button className="delete-btn"  id={`delete-btn-${id}`} onClick={() => removeTour(id)}>
          Not Interested
        </button>
      </div>
    </article>
  );
};

export default Tour;
