import React from "react";

const Mid = () => {
  return (
    <div className="Mid">
      <div className="Mid-content">
        <h1>YOUR STYLE DESERVES THE FINEST</h1>
        <p>
          YOUR STYLE DESERVES THE BEST, AND WE'RE HERE TO ELEVATE IT WITH OUR
          FINEST CLOTHING. FROM CASUAL TO ELEGANT, WE’VE GOT EVERYTHING YOU NEED
          TO LOOK AND FEEL YOUR VERY BEST.
        </p>

        <div className="Mid-btn">
          <button>Shop Now</button>
          <button className="s-btn">Category</button>
        </div>

        <div className="shopping">
          <p>Also Available On</p>

          <div className="brand-icons">
            <a href="https://www.amazon.com" target="_blank">
              <img src="/images/amazon.png" alt="Amazon" />
            </a>

            <a href="https://www.flipkart.com" target="_blank">
              <img src="/images/flipkart.png" alt="Flipkart" />
            </a>
          </div>
        </div>
      </div>
      <div className="Mid-image">
        <img id="image" src="/images/tshirt.png" alt="image" />
      </div>
    </div>
  );
};

export default Mid;
