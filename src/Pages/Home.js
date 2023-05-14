import React,{useState} from 'react';
import '../Assets/css/bootstrap.css';
import '../Assets/css/tooplate-style.css';
import '../Assets/css/fontAwesome.css';
import SearchFlight from './Components/SearchFlight';
import Services from './Components/Services';
import MostVisitedPlaces from './Components/MostVisitedPlaces';
import MostRecomendedHotels from './Components/MostRecomendedHotels';
import Footer from './Components/Footer';

function Home() {
  return (
   <div>
    <SearchFlight/>
    <Services/>
    <MostVisitedPlaces/>
    <MostRecomendedHotels/>
    <Footer/>
   </div>

  )
}

export default Home