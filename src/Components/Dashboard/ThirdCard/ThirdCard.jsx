import React from "react";
import data from "./Data";
import "./ThirdCard.scss";

function ThirdCard() {
  return (
    <div className="cart-car">
      {data.map((cart) => {
        return (
          <div className="inside-cart" style={{ backgroundColor: cart.color }}>
            <div className="up">
              <img src={cart.reload} alt="" />
              <p>{cart.percent}</p>
            </div>
            <img src={cart.imgCar} alt="" width={"100%"} height={"135px"} />
            <div className="under">
              <p>{cart.title}</p>
              <div className="bottom">
                <div className="left-under">
                  <img src={cart.share} alt="" />
                  <span>{cart.price}</span>
                  <img src={cart.star} alt="" />
                  <img src={cart.energy} alt="" />
                </div>
                <div className="right-under">
                  <span>{cart.speed}</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ThirdCard;
