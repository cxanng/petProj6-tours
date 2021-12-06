import React, { useState } from "react";
import { TourItem } from "./Tours";

interface IProps {
  tour: TourItem;
  deleteSelf: Function
} 

const Tour: React.FC<IProps> = ({ tour, deleteSelf }) => {

  const [readMore, setReadMore] = useState<boolean>(false);

  return (
    <article className='tour-item'>
      <img src={tour.image} alt={`tour-${tour.id}`} />
      <footer>
        <div className='tour-info'>
          <h4 className='tour-name'>{tour.name}</h4>
          <h4 className='price-tag'>${tour.price}</h4>
        </div>
        <div className='tour-content'>
          <p>{
            readMore ?
            tour.info :
            `${tour.info.substring(0, 200)}...`  
          }
          <button className='read-more-btn' onClick={() => setReadMore(!readMore)}>{readMore? 'Show less' : 'Read more'}</button>
          </p>
          <button className='not-interested-btn' onClick={() => deleteSelf(tour.id)}>Not Interested</button>
        </div>
      </footer>
      
    </article>
  )
}

export default Tour;