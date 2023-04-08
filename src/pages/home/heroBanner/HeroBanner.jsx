import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import "./heroBanner.scss";
import useFetch from "../../../hooks/useFetch";
import Img from "../../../components/lazyLoadImage/Img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

const HeroBanner = () => {
  const [backgroundImg, setBackgroundImg] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);

  const { data, loading } = useFetch("/movie/upcoming");

  useEffect(() => {
    const bgImg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackgroundImg(bgImg);
  }, [data]);

  const searchQueryHandler = (event) => {
    if ((event.key === "Enter" && query.length > 0) || (event.type === "click" && query.length > 0)) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <div className="hero-banner">
      {!loading && (
        <div className="backdrop-img">
          <Img src={backgroundImg} />
        </div>
      )}

      <div className="opacity-layer"></div>

      <ContentWrapper>
        <div className="hero-banner__content">
          <span className="title">Welcome</span>
          <span className="sub-title">
            Millions of movies, TV shows and people to discover. Explore now !!
          </span>

          <div className="search-input">
            <input
              type="text"
              placeholder="Search for movie or tv show..."
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
            />
            <button onClick={searchQueryHandler}>Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;
