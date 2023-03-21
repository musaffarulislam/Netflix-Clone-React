import React from 'react';
import Feactured from '../components/feactured/Feactured';
import List from '../components/list/List';
import Navbar from '../components/navbar/Navbar'
import '../Home.scss';

function Home() {
  return (
    <div className='home'>
        <Navbar/>
        <Feactured type="series"/>
        <List/>
        <List/>
        <List/>
        <List/>
    </div>
  )
}

export default Home