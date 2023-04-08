import React, { useState } from "react";

import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../components/carousel/Carousel";

const Upcoming = () => {
  const [endPoint, setEndPoint] = useState("movie");

  const onTabChange = (tab) => {
    setEndPoint(tab === "Movies" ? "movie" : "tv");
  };

  const { data, loading } = useFetch(`${(endPoint === "movie") ? `/${endPoint}/upcoming` : `/${endPoint}/on_the_air`}`);

  return (
    <div className="carousel-section">
      <ContentWrapper>
        <span className="carousel-title">Upcoming Movies / On the Air TV Shows</span>
        <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange}/>
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} endPoint={endPoint} />
    </div>
  );
};

export default Upcoming;
