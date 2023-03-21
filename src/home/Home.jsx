import React from 'react';
import Feactured from '../components/feactured/Feactured';
import Navbar from '../components/navbar/Navbar'
import '../Home.scss';

function Home() {
  return (
    <div className='home'>
        <Navbar/>
        <Feactured type="movie"/>
    </div>
  )
}

export default Home