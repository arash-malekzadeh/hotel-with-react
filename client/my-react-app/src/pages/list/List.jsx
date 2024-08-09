import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/Header/Header";

import "./list.css";
import { useLocation } from "react-router-dom";
import moment from "jalali-moment";
import SearchItem from "../../components/searchItems/SearchItem";

export default function List() {
  const location = useLocation();
  const { selectedDayRange, destination, options } = location.state || {};

  // Convert the received dates to Jalali
  const formatJalaliDate = (date) => {
    if (!date) return "";

    const gregorianDate = new Date(date);
    const jalaliDate = moment(gregorianDate).locale("fa").format("YYYY/MM/DD");
    return jalaliDate;
  };

  const fromDateJalali = formatJalaliDate(selectedDayRange?.from);
  const toDateJalali = formatJalaliDate(selectedDayRange?.to);

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">جستجو</h1>
            <div className="lsItem">
              <label>مقصد</label>
              <input type="text" placeholder={destination} readOnly />
            </div>
            <div className="lsItem">
              <label>تاریخ ورود</label>
              <span>{`${fromDateJalali} - ${toDateJalali}`}</span>
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.adult}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={options.children}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
}
