import React from "react";

import useStore from "../../useStore";

import "../../assets/css/content.scss";
import nearshore1 from "../../assets/image/nearshore-1.webp";
import nearshore2 from "../../assets/image/nearshore-2.webp";

const Content = () => {
  const { theme } = useStore();
  console.log("theme", theme);
  return (
    <div className={`nearshore-content ${theme}`}>
      <div className={`nearshore-maincontent `}>
        <div className="inline">
          <div className="half left">
            <img src={nearshore1} alt="Netshore_Image_1" width="100%" />
            <h3 className="text-center">
              <em>Nearshore Software Developer</em>
            </h3>
          </div>
          <div className="half right">
            <h1>Find the best nearshore technology company</h1>
            <h2>A better way to nearshore</h2>
            <h2>
              – Polytropic can help you hire the perfect software development
              partner for your project, at no cost to you.
            </h2>
            <h2>
              – We’ve vetted first-rate software development companies in Latin
              America that are ready to scale and start immediately.
            </h2>
            <h2>– Save time and money by leveraging Polytropic’s expertise.</h2>
          </div>
        </div>

        <div className="inline">
          <div className="half left">
            <h1>Define a nearshore technology strategy</h1>
            <h2>
              We know nearshore. Our experience in nearshoring gives us a deep
              understanding of the varied cultures of different countries and
              the business dynamics of working with those countries, companies,
              and teams.
            </h2>
            <h2>
              We use that knowledge to help you find your ideal nearshore
              partner to deliver the high-quality results you require.
            </h2>
            <h2>
              Polytropic’s Nearshore Delivery Framework takes into account key
              aspects, such as;
            </h2>
            <h2>– Intercultural communication</h2>
            <h2>– Work dynamics</h2>
            <h2>– Client maturity and vendor maturity</h2>
            <h2>– Risk management</h2>
            <h2>– Technology and project complexity</h2>
            <h2>– Cost and Timelines</h2>
          </div>
          <div className="half right">
            <img src={nearshore2} alt="Nearshore-2" width="100%" />
            <h3 className="text-center">
              <em>Nearshore Software Developer</em>
            </h3>
          </div>
        </div>
        <div>
          <h1>Why outsource nearshore software development?</h1>
          <h2>Accelerate your product software development process</h2>
          <h2>Lower your operating costs</h2>
          <h2>Increase your ROI compared to a full onshore team</h2>
          <h2>Focus on your core business and do more with an expert team</h2>
        </div>
      </div>
    </div>
  );
};

export default Content;
