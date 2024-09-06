import React, { useState } from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCalendarDays,
  faPlane,
  faPerson,
  faTaxi,
  faCar,
} from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { useNavigate } from "react-router-dom";

export default function Header({ type }) {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [selectedDayRange, setSelectedDayRange] = useState({
    from: new Date(),
    to: new Date(),
  });

  // Function to format date for display
  function formatDate(day) {
    if (!day) return "";
    const date = new Date(day);
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  }

  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const [openOptions, setOpenOptions] = useState(false);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (selectedDayRange.from && selectedDayRange.to) {
      navigate("/hotels", {
        state: { destination, selectedDayRange, options },
      });
    } else {
      alert("Please select a valid date range.");
    }
  };

  const handleOption = (name, operation) => {
    setOptions((prev) => ({
      ...prev,
      [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
    }));
  };

  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            <h1 className="headertitle">یک مکان مناسب برای اسکان</h1>
            <p className="headerDesc">
              برای سفرهایتان پاداش دریافت کنید، پس‌انداز فوری 10 درصد یا بیشتر
              با یک حساب رایگان
            </p>
            <button className="headerBtn">ورود/ثبت‌نام</button>
            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <input
                  type="text"
                  placeholder="قصد سفر به کجا دارید؟"
                  className="headerSearchInput"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="headerSearchText"
                >
                  {`${formatDate(selectedDayRange.from)} تا ${formatDate(
                    selectedDayRange.to
                  )}`}
                </span>
                {openDate && (
                  <DatePicker
                    range
                    value={[selectedDayRange.from, selectedDayRange.to]}
                    onChange={(range) => {
                      if (range && range.length === 2) {
                        setSelectedDayRange({
                          from: new Date(range[0]), // Convert to Date object
                          to: new Date(range[1]), // Convert to Date object
                        });
                      }
                    }}
                    calendar={persian}
                    locale={persian_fa}
                  />
                )}
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="headerSearchText"
                >
                  {`${options.adult} بزرگسال - ${options.children} کودک - ${options.room} اتاق`}
                </span>
                {openOptions && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">بزرگسال</span>
                      <div className="optionCounter">
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.adult}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">کودک</span>
                      <div className="optionCounter">
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.children}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">اتاق</span>
                      <div className="optionCounter">
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.room}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="headerSearchItem">
                <button className="headerBtn" onClick={handleSearch}>
                  جستجو
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
