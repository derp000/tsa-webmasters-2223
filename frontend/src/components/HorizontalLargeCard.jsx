import React from "react";

const HorizontalLargeCard = ({title, body}) => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img
          src="http://cdn.cnn.com/cnnnext/dam/assets/220727110543-06-space-perspective-super-tease.jpg"
          alt="SpaceHotel"
        />
      </figure>
      <div className="card-body bg-purple-50 rounded-r-lg">
        <h2 className="card-title">{title}</h2>
        <div className="py-20">
          <h3>{body}</h3>
        </div>
      </div>
    </div>
  );
};

export default HorizontalLargeCard;
