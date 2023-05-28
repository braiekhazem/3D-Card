import React, { useState } from "react";
import { Tilt } from "react-tilt";
import { ReactComponent as EmptyStarIcon } from "../../assests/icons/star-regular (1).svg";
import { ReactComponent as StarIcon } from "../../assests/icons/star-solid.svg";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";

const defaultOptions = {
  reverse: false,
  max: 35,
  perspective: 1000,
  scale: 1.05,
  speed: 500,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
};

function CardItem({ card }) {
  const [showDetails, setDetails] = useState(false);
  const [activeColor, setActiveColor] = useState(card?.colors[0]);
  const [activeSize, setActiveSize] = useState(card?.sizes[0]);

  const showDetailsHandler = () => {
    setDetails(true);
  };
  const hideDetailsHandler = () => {
    setDetails(false);
  };
  const setActiveColorHandler = (name) => {
    setActiveColor(name);
  };
  const setActiveSizeHandler = (name) => {
    setActiveSize(name);
  };

  return (
    <Tilt options={defaultOptions} className="card-item flip-card">
      <div
        className={`flip-card-inner ${showDetails ? "flip-card-active" : ""}`}
      >
        <div className="card-item-info flip-card-front">
          <div
            className="card-item-header"
            style={{
              background: `linear-gradient(135deg, ${card?.product_card_colors[0]} 8%, ${card?.product_card_colors[1]} 83%)`,
            }}
          >
            <p className="card-item-title">{card?.product_name}</p>
            <div className="card-item-photo">
              <img src={card?.thubnail} alt="produc error" />
            </div>
          </div>
          <div className="card-item-body">
            <p className="card-item-title">
              {card?.product_name}
              {card?.isNew ? <span>New</span> : null}
            </p>
            <div className="card-item-stars">
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <span>
                    {card?.stars < i + 1 ? <EmptyStarIcon /> : <StarIcon />}
                  </span>
                ))}
            </div>
            <div className="card-item-sizes">
              <p>szes</p>
              <div className="card-item-sizes--list">
                {card?.sizes?.map((size, i) => (
                  <span
                    key={i}
                    id={activeSize === size ? "activeSize" : ""}
                    onClick={() => setActiveSizeHandler(size)}
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>
            <div className="card-item-colors">
              <p>colors</p>
              <div className="card-item-colors--list">
                {card?.colors?.map((color, i) => (
                  <div
                    className="color"
                    id={activeColor === color ? "activeColor" : ""}
                    onClick={() => setActiveColorHandler(color)}
                  >
                    <span key={i} style={{ borderColor: color }} />
                    <span style={{ backgroundColor: color }} />
                  </div>
                ))}
              </div>
            </div>
            <div className="card-item-button">
              <div className="card-item-button--price">
                <p>${card?.price}</p>
                <p>{card?.unit}</p>
              </div>
              <p
                className="card-item-button--add "
                onClick={showDetailsHandler}
              >
                More Details
              </p>
            </div>
            {/* <div className="card-item-button" onClick={showDetailsHandler}>
              more details...
            </div> */}
          </div>
        </div>
        <div className="card-item-details flip-card-back">
          <Tooltip title="Hide Details">
            <div className="go-back" onClick={hideDetailsHandler}>
              <ArrowLeftOutlined />
            </div>
          </Tooltip>
          <div className="card-item-details-section-one">
            <div className="card-item-photo">
              <img src={card?.thubnail} alt="produc error" />
            </div>
            <p className="card-item-title">{card?.product_name}</p>
            <div className="card-item-details--description">
              <p>{card?.description}</p>
            </div>
          </div>
          <div className="card-item-button">
            <div className="card-item-button--price">
              <p>${card?.price}</p>
              <p>{card?.unit}</p>
            </div>
            <p className="card-item-button--add " onClick={hideDetailsHandler}>
              Buy Now
            </p>
          </div>
        </div>
      </div>
    </Tilt>
  );
}

export default CardItem;
