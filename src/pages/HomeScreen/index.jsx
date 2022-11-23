import React from "react";

import Banner from "../../components/Banner";
import Nav from "../../components/Nav";
import Row from "../../components/Row";

import requests from "../../Requests";

import "./index.css";

function HomeScreen () {
  return (
    <div className="homescreen">
      <Nav/>
      <Banner/>
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
    </div>
  );
}

export default HomeScreen;
