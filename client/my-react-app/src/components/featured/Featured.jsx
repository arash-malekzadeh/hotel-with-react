import React from "react";
import "./featured.css";

export default function Featured() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/600x600/653231.jpg?k=526fe3dd8fc78cbaccaee3be9e675b624e73b666ab757ecb0ebf31c7f7d96264&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>یاسوج</h1>
          <h2>123 جاذبه ها</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/600x600/653231.jpg?k=526fe3dd8fc78cbaccaee3be9e675b624e73b666ab757ecb0ebf31c7f7d96264&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>تهران</h1>
          <h2>123 جاذبه ها</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/600x600/653231.jpg?k=526fe3dd8fc78cbaccaee3be9e675b624e73b666ab757ecb0ebf31c7f7d96264&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>اصفهان</h1>
          <h2>123 جاذبه ها</h2>
        </div>
      </div>
    </div>
  );
}
