import React, { useState } from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

export default function Header() {
  const [openDate, setopenDate] = useState(false);
  const [selectedDayRange, setSelectedDayRange] = useState({
    from: null,
    to: null,
  });

  const formatDate = (day) => {
    if (!day) return "";
    return day.format("YYYY/MM/DD");
  };

  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerlist">
          <div className="headerListItems active">
            <FontAwesomeIcon icon={faBed} />
            <span> اسکان </span>
          </div>
          <div className="headerListItems">
            <FontAwesomeIcon icon={faPlane} />
            <span> هواپیما </span>
          </div>
          <div className="headerListItems">
            <FontAwesomeIcon icon={faCar} />
            <span> اجاره ماشین </span>
          </div>
          <div className="headerListItems">
            <FontAwesomeIcon icon={faBed} />
            <span> جاذبه ها </span>
          </div>

          <div className="headerListItems">
            <FontAwesomeIcon icon={faTaxi} />
            <span> تاکسی </span>
          </div>
        </div>
        <h1 className="headertitle">یک مکان مناسب برای اسکان </h1>
        <p className="headerDesc">
          برای سفرهایتان پاداش دریافت کنید، پس‌انداز فوری 10 درصد یا بیشتر با یک
          حساب رایگان
        </p>
        <button className="headerBtn">Sign In/Register</button>
        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} className="headerIcon" />
            <input
              type="text"
              placeholder="قصد سفر به کجا دارید؟"
              className="headerSearchInput"
            />
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
            <span
              onClick={() => setopenDate(!openDate)}
              className="headerSearchText"
            >
              {selectedDayRange.from && selectedDayRange.to
                ? `${formatDate(selectedDayRange.from)} - ${formatDate(
                    selectedDayRange.to
                  )}`
                : "از تاریخ تا تاریخ"}
            </span>
            {openDate && (
              <DatePicker
                value={selectedDayRange}
                onChange={setSelectedDayRange}
                range
                calendar={persian}
                locale={persian_fa}
              />
            )}
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className="headerIcon" />
            <span className="headerSearchText">2 بزرگسال 2 کودک 1 اتاق </span>
          </div>
          <div className="headerSearchItem">
            <button className="headerBtn">search</button>
          </div>
        </div>
      </div>
    </div>
  );
}
