import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredproperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
import Header from "../../components/Header/Header";
import MailList from "../../components/maillist/MailList";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertylist/PropertyList";
import "./home.css";
import React from "react";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="hometitle">مشاهده براساس نوع ویژگیها</h1>
        <PropertyList />
        <h1 className="hometitle">خانه های موردپسند مهمان ها </h1>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </div>
    </>
  );
}
