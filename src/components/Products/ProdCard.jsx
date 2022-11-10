import React from "react";

const ProdCard = ({item}) => {
  return (
    <div data-testid={`watch-card-wrapper-${item.id}`}>
      <div style={{border:"1px solid grey",padding:"10px",padding:"10px",margin:"auto",justifyContent:"center"}}>
        <img style={{height:"250px"}}data-testid="watch-card-image" src={item.image}alt="" />
      </div>
      <div>
        <div >{item.name}</div>
        <div >{item.category}</div>
        <div>{item.price}</div>
      </div>
    </div>
  );
};

export default ProdCard;
