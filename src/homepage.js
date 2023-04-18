import React from "react";
import "./home.css";
import p1 from "./photographer1.jpg";
import p2 from "./photographer2.jpg";
import p3 from "./photographer1.jpg";
import p4 from "./photographer2.jpg";
import c1 from "./cat1.jpg";
import c2 from "./cat2.jpg";
import c3 from "./cat1.jpg";
import c4 from "./cat2.jpg";
import mk1 from "./makeup1.jpg";
import mk2 from "./makeup2.jpg";
import mk3 from "./makeup1.jpg";
import mk4 from "./makeup2.jpg";
import mn1 from "./mehndi1.jpg";
import mn2 from "./mehndi2.jpg";
import mn3 from "./mehndi1.jpg";
import mn4 from "./mehndi2.jpg";
import ht1 from "./hotel1.jpg";
import ht2 from "./hotel2.jpg";
import ht3 from "./hotel1.jpg";
import ht4 from "./hotel2.jpg";

function Vendors({ type, vendors }) {
  return (
    <div style={{ marginBottom: "30px" }}>
      <h3
        style={{
          textAlign: "center",
          marginBottom: "20px",
          color: "#FF69B4",
          fontSize: "2rem",
          textShadow: "2px 2px 4px #000000",
          zIndex: 1,
        }}
      >
        {type}
      </h3>
      <div className="vendor-cards">
        {vendors.map((vendor) => (
          <div className="vendor-card" key={vendor.name}>
            <img
              src={vendor.image}
              alt={vendor.name}
              className="vendor-image"
            />
            <div className="vendor-details">
              <p className="vendor-name">
                {type}: {vendor.name}
              </p>
              <p className="vendor-venue">Address: {vendor.venue}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Homepage({ data }) {
  const { firstName, lastName, phone, email, date, location } = data;
  const myInfo = {
    name: firstName + " " + lastName,
    // image: "./your-image.jpg",
    date: date,
    venue: location,
  };

  const partnerInfo = {
    name: "Sneha",
    // image: "./your-image.jpg",
    date: date,
    venue: location,
  };
  const vendors = {
    photographers: [
      {
        name: "John Smith",
        image: p1,
        venue: "City Hall",
      },
      {
        name: "Jane Doe",
        image: p2,
        venue: "Beach",
      },
      {
        name: "John Smith",
        image: p1,
        venue: "City Hall",
      },
      {
        name: "Jane Doe",
        image: p2,
        venue: "Beach",
      },
    ],
    makeup: [
      {
        name: "Sarah Johnson",
        image: mk1,
        venue: "Hotel",
      },
      {
        name: "Emily Davis",
        image: mk2,
        venue: "Banquet Hall",
      },
      {
        name: "Sarah Johnson",
        image: mk1,
        venue: "Hotel",
      },
      {
        name: "Emily Davis",
        image: mk2,
        venue: "Banquet Hall",
      },
    ],
    catering: [
      {
        name: "Tom Lee",
        image: c1,
        venue: "Backyard",
      },
      {
        name: "Amy Chen",
        image: c2,
        venue: "Garden",
      },
      {
        name: "Tom Lee",
        image: c1,
        venue: "Backyard",
      },
      {
        name: "Amy Chen",
        image: c2,
        venue: "Garden",
      },
    ],
    hotels: [
      {
        name: "Hotel 1",
        image: ht1,
        venue: "City Center",
      },
      {
        name: "Hotel 2",
        image: ht2,
        venue: "Beach Front",
      },
      {
        name: "Hotel 1",
        image: ht1,
        venue: "City Center",
      },
      {
        name: "Hotel 2",
        image: ht2,
        venue: "Beach Front",
      },
    ],
    mehndi: [
      {
        name: "Samantha Lee",
        image: mn1,
        venue: "Banquet Hall",
      },
      {
        name: "Mary Williams",
        image: mn2,
        venue: "Hotel",
      },
      {
        name: "Samantha Lee",
        image: mn1,
        venue: "Banquet Hall",
      },
      {
        name: "Mary Williams",
        image: mn2,
        venue: "Hotel",
      },
    ],
  };

  return (
    <div className="homepage">
      <h2
        className="coor h2c"
        style={{
          textAlign: "center",
          marginBottom: "20px",
          position: "relative",
          color: "#fffffff",
          textShadow: "2px 2px 4px #ff5a89",
        }}
      >
        Welcome to our Wedding Planning page!
        <span
          style={{
            position: "absolute",
            bottom: "-10px",
            left: "50%",
            transform: "translateX(-50%)",
            borderBottom: "2px solid pink",
            width: "100vw",
          }}
        ></span>
      </h2>
      <div
        style={{
          borderRadius: "100px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "0px",
          maxHeight: "500px",
          overflowY: "scroll",
          position: "relative",
        }}
      >
        <div
          className="information coor"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "50px",
            maxHeight: "500px",
            position: "relative",
            width: "80%",
            height: "500px",
          }}
        >
          <h3
            style={{
              textAlign: "center",
              marginBottom: "20px",
              color: "#FF69B4",
              fontSize: "2rem",
              textShadow: "2px 2px 4px #000000",
              zIndex: 1,
            }}
          >
            Your Information
          </h3>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1,
            }}
          >
            <p
              style={{
                textAlign: "center",
                fontWeight: "bold",
                marginBottom: "10px",
                color: "#FF69B4",
                fontSize: "1.5rem",
              }}
            >
              Your name: {myInfo.name}
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p
                style={{
                  textAlign: "center",
                  marginBottom: "10px",
                  color: "#FFD700",
                  fontSize: "1.2rem",
                }}
              >
                Entered Venue: {myInfo.venue}
              </p>
              <p
                style={{
                  textAlign: "center",
                  marginBottom: "10px",
                  color: "#FFD700",
                  fontSize: "1.2rem",
                }}
              >
                Wedding Date: {myInfo.date}
              </p>
            </div>
          </div>
        </div>

        <Vendors type="Photographers" vendors={vendors.photographers} />
        <Vendors type="Makeup & Hair" vendors={vendors.makeup} />
        <Vendors type="Catering" vendors={vendors.catering} />
        <Vendors type="Hotels" vendors={vendors.hotels} />
        <Vendors type="Mehndi Artist" vendors={vendors.mehndi} />
      </div>
    </div>
  );
}

export default Homepage;
