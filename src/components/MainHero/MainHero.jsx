import React from "react";
import { Link } from "react-router-dom";
import { UilTemperatureQuarter } from "@iconscout/react-unicons";
import { UilTrees } from "@iconscout/react-unicons";
import { UilFlask } from "@iconscout/react-unicons";
import { UilShieldCheck } from "@iconscout/react-unicons";

import "./MainHero.styles.scss";

const MainHero = () => {
  return (
    <header className="main-hero container">
      <div className="row">
        <div className="col">
          <div className="main-hero__text-box">
            <h1 className="main-hero__heading">Seven Vital</h1>
            <h3 className="main-hero__description">Premium CBD Products</h3>
            <Link className="main-hero__link">View Popular Products</Link>
          </div>
        </div>
      </div>
      <div className="row mb-5">
        <div className="col-3">
          <div className="main-hero__future-box">
            <UilTemperatureQuarter size="32" />
            <span className="main-hero__future-title">Gentle extraction</span>
          </div>
        </div>
        <div className="col-3">
          <div className="main-hero__future-box">
            <UilTrees size="32" />
            <span className="main-hero__future-title">
              100% organic farming
            </span>
          </div>
        </div>
        <div className="col-3">
          <div className="main-hero__future-box">
            <UilFlask size="32" />
            <span className="main-hero__future-title">Carefully tested</span>
          </div>
        </div>
        <div className="col-3">
          <div className="main-hero__future-box">
            <UilShieldCheck size="32" />
            <span className="main-hero__future-title">Certified quality</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHero;
