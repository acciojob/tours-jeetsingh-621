import React, { useState } from 'react';

const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="tour">
      <img src={image} alt={name} className="tour-img" />
      <div className="tour-info">
        <h4 className="tour-name">{name}</h4>
        <h4 className="tour-price">${price}</h4>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button className="read-more-btn" onClick={() => setReadMore(!readMore)}>
            {readMore ? 'See less' : 'Show more'}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeTour(id)}>
          Not Interested
        </button>
      </div>
    </article>
  );
};

export default Tour;
