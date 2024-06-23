// import React from 'react'
import "./Encyclo_Single.css";

function Encyclo_single({ url, title, description }) {
  return (
    <div className="encyclo">
      <div className="card">
        <div className="image">
          <img className="encyclo-img" src={url} alt="Encyclopedia" />
        </div>
        <div className="hover-content">
          <div className="hover-title">{title}</div>
          <div className="hover-description">{description}</div>
        </div>
      </div>
    </div>
  );
}

export default Encyclo_single;
