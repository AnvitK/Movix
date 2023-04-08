import React from "react";
import { useSelector } from "react-redux";

import "./cast.scss";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import Img from "../../../components/lazyLoadImage/Img";
import avatar from "../../../assets/avatar.png";

const Cast = ({ data, loading }) => {
  const { url } = useSelector((state) => state.home);

  const skeleton = () => {
    return (
      <div className="skeleton-item">
        <div className="circle skeleton"></div>
        <div className="row skeleton"></div>
        <div className="row2 skeleton"></div>
      </div>
    );
  };
  return (
    <div className="cast-section">
      <ContentWrapper>
        <div className="section-heading">Cast</div>
        {!loading ? (
          <div className="list-items">
            {data?.map((person) => {
              let imgUrl = person.profile_path ? url.profile + person.profile_path : avatar;

              return (
                <div className="list-item" key={person.id}>
                  <div className="profile-img">
                    <Img src={imgUrl} />
                  </div>

                  <div className="name">{person.name}</div>
                  <div className="character">{person.character}</div>
                </div>
              )
            })}
          </div>
        ) : (
          <div className="castSkeleton">
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
          </div>
        )}
      </ContentWrapper>
    </div>
  );
};

export default Cast;
