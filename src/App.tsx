import React, { useEffect, useState } from 'react';
import { TourItem }  from './components/Tours';
import Tours from './components/Tours';
import Loading from './components/Loading';

const url = 'https://course-api.com/react-tours-project';
function App() {
  
  const [loading, setLoading] = useState<boolean>(true);
  const [tours, setTours] = useState<TourItem[]>([]);
  
  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = response.json();
      setTours(await data);
      console.log(tours);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return <Loading />
  }

  return (
    <Tours tours={tours} setTours={setTours}/>
  );
}

export default App;
