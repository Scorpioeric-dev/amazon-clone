import React from "react";
import "../Style/Home.css";
import Product from "../Components/Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._cb428684220_.jpg"
          alt=""
        />
        <div className="home_row">
          {/*Top Row*/}
          <Product
            id="1"
            title="The lean startup"
            price={29.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          />
          <Product
            id="2"
            title="Kenwood kMix Stand Mixer for Baking, stylish Kitchen Mixer with K-beater , Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={39.99}
            rating={4}
            image="https://www.kenwoodworld.com/WebImage/Global/Product%20images/Kmix%20products/KMX754RD/KMX754RD_800x600.png"
          />
        </div>
        <div className="home_row">
          {/*Middle Row*/}
          <Product
            id="3"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="4"
            title="Amazon Echo (3rd generation ) | Smart Speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="5"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi,128GB - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <div className="home_row">
          {/*Bottom Row*/}
          <Product
            id="6"
            title="The PS5 is understated, unobtrusive, sleek, and elegant. The console's form factor also makes a departure from what's come before it, opting for a slanted, parallelogram design rather than a typical boxy or dome-shaped approach. The PS4 is even smaller and quieter than the PS3 launch box and the PS3 slim."
            price={299.99}
            rating={5}
            image="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ps5-1-1591910417.jpg?crop=1.00xw:0.907xh;0,0&resize=1200:*"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
