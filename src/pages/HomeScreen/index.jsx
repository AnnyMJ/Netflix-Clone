import React from 'react';
import Banner from '../../components/Banner';
import Nav from '../../components/Nav';

import './index.css';

function HomeScreen () {
  return (
    <div className="homescreen">
      <Nav/>
      <Banner/>
    </div>
  );
}

export default HomeScreen;
