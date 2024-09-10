import React from "react";
import "./propertylist.css";
import useFetch from "../../hooks/useFetch";
export default function PropertyList() {
  const { data, loading, error } = useFetch(
    "http://127.0.0.1:3000/api/hotels/countByType"
  );
  const images = [
    "https://q-xx.bstatic.com/xdata/images/hotel/263x210/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o=",
    "https://q-xx.bstatic.com/xdata/images/hotel/263x210/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o=",
    "https://q-xx.bstatic.com/xdata/images/hotel/263x210/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o=",
    "https://q-xx.bstatic.com/xdata/images/hotel/263x210/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o=",
    "https://q-xx.bstatic.com/xdata/images/hotel/263x210/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o=",
  ];
  return (
    <div className="plist">
      {loading ? (
        "the page is loading"
      ) : (
        <>
          {data &&
            images.map((img, i) => (
              <div key={i} className="plistItem">
                <img src={img} alt="" className="plistImg" />
                <div className="plistTitle">
                  <h1> {data[i]?.type}</h1>
                  <h2>
                    {data[i]?.count} {data[i]?.type}
                  </h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
}
