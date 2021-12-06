import React from "react";
import Tour from "./Tour";

export interface TourItem {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
}

interface IProps {
  tours: TourItem[];
  setTours: Function
}

const Tours: React.FC<IProps> = ({ tours, setTours }) => {
  console.log(tours);

  const deleteSelf = (id: string) => {
    const newTours = tours.filter(item => item.id !== id);
    setTours(newTours);
  }

  return (
    <div className='tour-container'>
      <h2 className='tour-header'>Our Tours</h2>
      <div className='underline'></div>
      {tours.map(item => <Tour tour={item} deleteSelf={deleteSelf} key={item.id}/>)}
    </div>
  )
}

export default Tours;